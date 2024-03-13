import mongoose from "mongoose";

import { DB_URL } from "@/Config";
// Connection configuration

// const { DB_URL } = process.env;
// console.log(DB_URL);
export const connectDb = async () => {
  if (!DB_URL) throw new Error("DB_URL must be defined");
  await mongoose.connect(DB_URL, {});
  console.log("conneted with database");
};
