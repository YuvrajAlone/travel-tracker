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

app.get("/" , async (req, res) => {
   const result = await db.query("SELECT country_code FROM visited_countries");
  const countries = result.rows.map(c => c.country_code);
  res.render("index.ejs", { countries: countries, total: result.rows.length });
});


app.post ("/add" , async (req , res) =>{ 
  const code = await db.query("select country_code from countries where country_name = $1" , [req.body.country]); 
  if(code.rows.length !== 0){ 
    await db.query("insert into visited_countries (country_code) values ($1)" , [code.rows[0].country_code]);
    } 
    res.redirect("/"); 
  });


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
