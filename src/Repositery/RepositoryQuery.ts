import sql from "mssql";
import SqlConnect from "../Utils/database";
import Procedure from "./QueryProcedure";
import ApiError from "@/Utils/ApiError";

interface TablePar {
  tableName?: string;
  columns?: string;
  values?: string;
  id?: number;
}

class RepositoryQuery {
  // private tablePar;

  // private tableName: string;
  // private columns: string;
  // private values: string;
  // private id: number;

  // constructor(private tablePar: TablePar) {}

  public async getReques() {
    const pool = await SqlConnect.connect();
    return new sql.Request(pool);
  }

  public async disConnect() {
    return await SqlConnect.disconnect();
  }
  // parms => (name, columns, values)
  public async insertIntoTable(tablePar: TablePar) {
    // inpput propertie{tableName, columns, values}}
    const request = await this.getReques();
    try {
      await Procedure.InsertTableProcedure();
      await request.input("tableName", sql.NVARCHAR(50), tablePar.tableName);
      await request.input("columns", sql.NVARCHAR(sql.Max), tablePar.columns);
      await request.input("values", sql.NVARCHAR(sql.Max), tablePar.values);
      const result = await request.execute("insertTable");
      return result;
    } catch (err) {
      throw new ApiError(500, "faild insert data in table .. repository");
    } finally {
      await SqlConnect.disconnect();
    }
    // excute stored procedure
  }

  // parms => (name, columns)
  public async readTable(tablePar: TablePar) {
    const request = await this.getReques();
    try {
      await Procedure.ReadTableProcedure();
      await request.input("tableName", sql.NVARCHAR(50), tablePar.tableName);
      await request.input("columns", sql.NVARCHAR(sql.Max), tablePar.columns);
      const result = await request.execute("readTable");
      return result;
    } catch (err) {
      throw new Error("faild read data from table... repository");
    } finally {
      await this.disConnect();
    }
  }

  public async readTableById(tablePar: TablePar) {
    const request = await this.getReques();
    try {
      await Procedure.ReadTableByIdProcedure();
      await request.input("tableName", sql.NVARCHAR(50), tablePar.tableName);
      await request.input("columns", sql.NVARCHAR(sql.Max), tablePar.columns);
      await request.input("id", sql.Int, tablePar.id);
      const result = await request.execute("readTableById");
      console.log("repository", result);
      return result;
    } catch (err) {
      throw new Error("faild read data from table...repository");
    } finally {
      await this.disConnect();
    }
  }

  // parms => (name, columns)
  public async creatTable(tablePar: TablePar) {
    try {
      // check create table procedure and add it
      await Procedure.CreateTableProcedure();
      const request = await this.getReques();
      await request.input("tableName", sql.NVARCHAR(50), tablePar.tableName);
      await request.input("columns", sql.NVARCHAR(sql.Max), tablePar.columns);
      const result = await request.execute("creatTable");
      return result;
    } catch (err) {
      throw new Error("faild creat table...repository");
    } finally {
      await this.disConnect();
    }
  }

  public async updateTabe(tablePar: TablePar) {
    try {
      // update table procedure
      await Procedure.UpdateTableProcedure();
      const request = await this.getReques();
      await request.input("tableName", sql.NVARCHAR(50), tablePar.tableName);
      await request.input("columns", sql.NVARCHAR(sql.Max), tablePar.columns);
      await request.input("values", sql.NVARCHAR(sql.Max), tablePar.values);
      await request.input("id", sql.Int, tablePar.id);
      const result = await request.execute("updateTable");
      return result;
    } catch (err) {
      throw new ApiError(500, "faild update table...repository");
    }
  }
  // parms => (name, id)
  public async delTable(tablePar: TablePar) {
    try {
      // delete table procedure
      await Procedure.DeleteTableProcedure();
      const request = await this.getReques();
      await request.input("tableName", sql.NVARCHAR(50), tablePar.tableName);
      await request.input("id", sql.Int, tablePar.id);
      const result = await request.execute("deleteTable");
      return result;
    } catch (err) {
      throw new Error("faild delete table...repository");
    } finally {
      await this.disConnect();
    }
  }
}

export default RepositoryQuery;
