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

## Database Setup

1. Create a PostgreSQL database.
```bash
psql -U postgres -c "CREATE DATABASE World;"
```
2. Run the schema file:
```bash
psql -U postgres -d World -f schema.sql
```
## Running the App

Start the server:
```bash
node index.js
```
Then open your browser and go to:
```bash
http://localhost:3000
```