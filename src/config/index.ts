import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";

export const {
  SESSIONSECRETKEY,
  DB_SQL_NAME,
  DB_SQL_SERVER,
  DB_SQL_USER,
  DB_SQL_PASS,
  SECRETKEY,
  GMAIL_USER,
  GMAIL_PASS,
} = process.env;
