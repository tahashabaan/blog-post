import sql from "mssql";

import ApiError from "@/Utils/ApiError";
import SqlConnect from "../Utils/database";
import RepositoryQuery from "@/Repositery/RepositoryQuery";
import { Payload } from "@/Interface/IAuthInterface";

export default class AuthService {
  // call repository to take payload about user
  constructor(private repositoryQuery: RepositoryQuery) {}
  public async getReques() {
    const pool = await SqlConnect.connect();
    return new sql.Request(pool);
  }
  public async register(payload: Payload, email: string) {
    // return this.authenticated; 1-create user 2- login user
    try {
      const { columns, tableName } = payload;
      const request = await this.getReques();
      // 1- check if user exist
      const user = await request.query(
        `select * from ${tableName} where email = ${email}`
      );
      if (user) throw new ApiError(403, "user authenticated");

      return await this.repositoryQuery.insertIntoTable(payload);
      // 2- create user

      // const token = await this.repository.loginUser(payload);
    } catch (err) {
      throw new ApiError(500, "Internal Server Error in register");
    }
  }
  public async login(payload: Payload, email: string) {
    // return this.authenticated; 1- check if user exist 2- login user
    try {
      const { columns, tableName } = payload;
      const request = await this.getReques();
      const user = await request.query(
        `select * from ${tableName} where email = ${email}`
      );
      if (!user) throw new ApiError(403, "user not authenticated");
      return user;
    } catch (err) {
      throw new ApiError(500, "Internal Server Error in login");
    }
  }

  public logOut() {}

  public isAuthenticated() {
    // return this.authenticated;
  }
}
