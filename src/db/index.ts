import { Sequelize } from "sequelize-typescript";
import {
  DB_SQL_NAME,
  DB_SQL_SERVER,
  DB_SQL_USER,
  DB_SQL_PASS,
} from "../config/index";

const sequelize = new Sequelize(DB_SQL_NAME, DB_SQL_USER, DB_SQL_PASS, {
  host: "localhost",
  dialect: "mssql",
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // dialectOptions: {
  //   options: {
  //     encrypt: true, // Enable encryption for secure communication
  //   },
  // },
});

// Test the connection

// Start the Express server

export default sequelize;
