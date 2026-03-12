import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited(){
  const result = await db.query("SELECT country_code FROM visited_countries");
  const countries = result.rows.map(c => c.country_code);
  return countries;
} 

app.get("/" , async (req, res) => {
   const countries = await checkVisited(); 
  res.render("index.ejs", { countries: countries, total: countries.length });
});


app.post ("/add" , async (req , res) =>{

  try{
  const code = await db.query(
    "select country_code from countries where lower(country_name) like '%' || lower($1) || '%'; ", 
    [req.body.country]
   ); 

    const data = code.rows[0];
    const countryCode = data.country_code;
  try{
    await db.query("insert into visited_countries (country_code) values ($1)" , 
      [countryCode]
     );
    res.redirect("/"); 
  }catch (err){
    const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
  }
 }catch(err){
    const countries = await checkVisited();
    res.render("index.ejs" , {
      countries: countries ,
      total: countries.length ,
      error: "Country name does not exist, try again." 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
