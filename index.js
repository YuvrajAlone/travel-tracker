import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database: "World",
  password : "yuvraj@7385",
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
