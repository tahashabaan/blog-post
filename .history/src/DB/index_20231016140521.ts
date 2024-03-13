const sql = require("tedious");

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "Config";

const config = {
  server: DB_HOST, // Your SQL Server's host name
  database: DB_DATABASE, // Your database name
  user: DB_USER, // Your SQL Server login username
  password: DB_PASSWORD, // Your SQL Server login password
  options: {
    encrypt: true, // Use if you have SSL enabled
  },
};

sql.connect(config, (err) => {
  if (err) {
    console.error("Error connecting to SQL Server:", err);
  } else {
    console.log("Connected to SQL Server");
  }
});
