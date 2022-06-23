const { Client } = require("pg");

class DB {
  constructor() {
    console.log(
      process.env.DB_USER,
      process.env.DB_HOST,
      process.env.DB_NAME,
      process.env.DB_PASSWORD,
      process.env.DB_PORT
    );
    const client = new Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME, //'anime_recommendations',
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });
    client.connect();
  }
}

module.exports = DB;
