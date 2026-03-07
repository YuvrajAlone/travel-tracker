# Travel Tracker 🌍

A web application that tracks visited countries and highlights them on a world map.

## Features

- Add countries you have visited
- Countries appear highlighted on the world map
- Stores visited countries in a PostgreSQL database

## Technologies Used

- Node.js
- Express.js
- EJS
- PostgreSQL
- HTML / CSS / JavaScript

## Installation

1. Clone the repository

git clone https://github.com/yourusername/travel-tracker.git

2. Navigate to the project folder

cd travel-tracker

3. Install dependencies

npm install

4. Create a .env file and add your database credentials

DB_USER=postgres
DB_HOST=localhost
DB_NAME=World
DB_PASSWORD=yourpassword
DB_PORT=5432

## Running the App

Start the server:

node index.js

Then open your browser and go to:

http://localhost:3000

## Project Structure

travel-tracker
│
├── index.js
├── package.json
├── public/
├── views/
├── .gitignore
└── README.md

## Author

Yuvraj Alone