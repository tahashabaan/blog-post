import sql from "mssql";

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "Config";

interface   sqlConfig: {
  user: string;
  password: string;
  database: string;
  server: string;
  pool?: { max: number; min: number; idleTimeoutMillis: number };
  options: {
    encrypt: boolean; // for azure
    trustServerCertificate: boolean;
  };
};
export default class ConnectDatabase {
  private static config: string = `Server=${DB_HOST},1433;Database=${DB_DATABASE};User Id=${null};Password=${null};Encrypt=true`;


  // this.sqlConfig = {
  //   user: DB_USER,
  //   password:DB_PASSWORD,
  //   database: DB_DATABASE,
  //   server: DB_HOST,
  //   // pool: {
  //   //   max: 10,
  //   //   min: 0,
  //   //   idleTimeoutMillis: 30000,
  //   // },
  //   options: {
  //     encrypt: true, // for azure
  //     trustServerCertificate: false, // change to true for local dev / self-signed certs
  //   },
  // };

  constructor(private sqlConfig: sqlConfig) {}

  async connectDatabase() {
    try {
      await sql.connect(this.sqlConfig);
    } catch (err) {
      if (err) return console.log("falid to connected with database", err);
      else console.log("connected with database");
    }
  }
}
