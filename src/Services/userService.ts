import RepositoryQuery from "@/Repositery/RepositoryQuery";
import ApiError from "@/Utils/ApiError";

/* 1-adminn route /users then 
   2-call controller to take payload about user 
   3-call service to take payload about user
    4-call repository to take payload about user
    5-call database to take payload about user
*/

interface TablePar {
  tableName?: string;
  columns?: string;
  values?: string;
  id?: number;
}

export default class UserService {
  // admin can (create, update , delete, read)
  // create user
  // private repositoryQuery: RepositoryQuery;
  constructor(private repositoryQuery: RepositoryQuery) {}
  public async createUser(tableParms: TablePar) {
    // 1-create table Publisher in DB
    // insertValueInTable => call procedure insertValueIntable(tableName, columns, values)
    try {
      // const { tableName, columns, values } = tableParms;
      const result = await this.repositoryQuery.insertIntoTable(tableParms);
      console.log("service" + result);
      return result;
    } catch (err) {
      throw new ApiError(500, "falid create user service");
    }
  }
  // read users
  public async readUsers(tableParms: TablePar) {
    // readTable => call procedure readTable(tableName, columns)
    try {
      const { tableName, columns = null } = tableParms;
      const result = await this.repositoryQuery.readTable({
        tableName,
        columns,
      });
      return result;
    } catch (err) {
      throw new ApiError(500, "falid read users from service");
    }
  }
  //read user by id
  public async readUser(tableParms: TablePar) {
    try {
      // readTable => call procedure readTable(tableName, columns)
      // const { tableName, columns, id } = tableParms;
      const result = await this.repositoryQuery.readTableById(tableParms);
      return result;
    } catch (err) {
      throw new ApiError(500, "falid read user by id from service");
    }
  }
  // update user byid
  public async updateUser(tableParms: TablePar) {
    // updateTable => call procedure updateTable(tableName, columns, values, id)
    try {
      const { tableName, columns, values, id } = tableParms;
      return await this.repositoryQuery.updateTabe({
        tableName,
        columns,
        values,
        id,
      });
    } catch (err) {
      throw new ApiError(500, "falid update user by id from service");
    }
  }

  // delete user by id
  public async deleteUser(tableParms: TablePar) {
    // deleteTable => call procedure deleteTable(tableName, id)
    try {
      // const { tableName, id } = tableParms;
      const result = await this.repositoryQuery.delTable(tableParms);
      return result;
    } catch (err) {
      throw new ApiError(500, "falid delete user by id from service");
    }
  }
}
