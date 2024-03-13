

export interface sqlConfig {
  user: string;
  password?: string;
  database: string;
  server: string;
  pool?: { max: number; min: number; idleTimeoutMillis: number };
  options: {
    encrypt: boolean; // for azure
    trustServerCertificate: boolean;
  };
}
