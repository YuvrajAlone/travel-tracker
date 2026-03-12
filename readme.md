# Travel Tracker 🌍

A web application that tracks visited countries and highlights them on a world map.

## 🚀 Features

- Add countries you have visited
- Countries appear highlighted on the world map
- Stores visited countries in a PostgreSQL database

## 🛠 Tech Stack

- Node.js
- Express.js
- EJS
- PostgreSQL
- HTML / CSS / JavaScript

## Database Setup

1. Create a PostgreSQL database.

2. Run the schema file:
```bash
psql -U postgres -d your_database_name -f schema.sql
```
    This will create :
   ```bash 
   visited_countries
   countries
   ```

3. Import the dataset:

  The project includes a file countries.csv.
  Import this file into the countries table.

   You can do this using pgAdmin Import/Export or the PostgreSQL \copy command.



## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/travel-tracker.git
```
2. Navigate to the project folder
```bash
cd travel-tracker
```
3. Install dependencies
```bash
npm install
```
4. Create a .env file and add your database credentials

## Running the App

Start the server:
```bash
node index.js
```
Then open your browser and go to:
```bash
http://localhost:3000
```