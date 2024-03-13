import sql from "mssql";

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "Config";

export default class ConnectDatabase {
  private static config: string = `Server=${DB_HOST},1433;Database=${DB_DATABASE};User Id=${null};Password=${null};Encrypt=true`;
  sqlConfig: {
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

  constructor(private sqlConfig: sqlConfig) {
   
  }

  async connectDatabase() {
    try {
      await sql.connect(this.sqlConfig);
    } catch (err) {
      if (err) return console.log("falid to connected with database", err);
      else console.log("connected with database");
    }
  }
}
