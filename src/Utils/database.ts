import sql from "mssql";

interface config {
  user: string;
  password: string;
  server: string;
  database: string;
  options?: {
    trustServerCertificate?: Boolean; // trust self-signed certificates
    enableArithAbort?: Boolean;
  };
}

class SqlConnect {
  private config: config;
  constructor() {
    this.config = {
      user: process.env.DB_SQL_USER,
      password: process.env.DB_SQL_PASS,
      server: process.env.DB_SQL_SERVER,
      database: process.env.DB_SQL_NAME,
      options: {
        trustServerCertificate: true, // trust self-signed certificates
        enableArithAbort: true,
      },
    };
  }
  public connect = async () => {
    try {
      await sql.connect(this.config);
      console.log("Database connected sql");
    } catch (err) {
      console.log(err);
    }
  };

  public disconnect = async () => {
    try {
      await sql.close();
      console.log("Database closed");
    } catch (err) {
      console.log(err);
    }
  };
}

export default new SqlConnect();
