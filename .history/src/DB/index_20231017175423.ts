import sql from "mssql";

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "Config";

export default class ConnectDatabase {
  private static  config: string;
  constructor() {
    this.config =
      "Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true";
  }

 static async connectDatabase() {
    try {
      await sql.connect(this.config);
    } catch (err) {
      if(err)  console.log("falid to connected with data")
    }
  }
}
