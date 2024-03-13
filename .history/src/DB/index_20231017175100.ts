import sql from "mssql";

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "Config";

export default class ConnectDatabase {
  private config:Object;
  constructor() {
     this.config ={server:DB } ;
  }

  async connectDatabase(){
      await sql.connect(this.config)
  }
}
