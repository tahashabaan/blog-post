import SqlConnect from "../Utils/database";
import sql from "mssql";

class View {
  // create view read from table
  public static createViewToreadTable = async () => {
    const pool = await SqlConnect.connect();
    const request = await new sql.Request(pool);
    const dropViewQuery = `
    if object_id('readTable', 'v') is not null
    drop view readTable`;

    await request.query(dropViewQuery);

    const createViewQuery = `
    create view readTable 
    with encryption
    as
    select * from users  where id = @id
    `;
    await request.query(createViewQuery);
  };
}

class Procedure {
  // get request
  public static getRequest = async () => {
    const pool = await SqlConnect.connect();
    return new sql.Request(pool);
  };

  // procedure to create table
  public static CreateTableProcedure = async () => {
    const request = await this.getRequest();

    const dropProdureQuery = ` 
    if object_id('createTable', 'p') is not null
    drop procedure createTable`;

    await request.query(dropProdureQuery);

    const createProcedureQuery = `
      create procedure createTable 
      @tableName NVARCHAR(50), 
      @columns NVARCHAR(max)
      with encryption
      as
      begin try
        declare @sql NVARCHAR(max)    
        SET @sql = 'create table' + quotename(@tableName) + '(' + @columns + ')';
        exec sp_executesql @sql
      end try
      begin catch
        print 'Error: in create table procedure ' 
      end catch
    `;
    await request.query(createProcedureQuery);
  };

  // procedure to insert into table
  public static InsertTableProcedure = async () => {
    // const pool = await SqlConnect.connect(); // Await the pool promise
    const request = await this.getRequest();

    const dropProdureQuery = `
    if object_id('insertTable', 'p') is not null
    drop procedure insertTable`;

    await request.query(dropProdureQuery);
    const createProcedureQuery = `
      create procedure insertTable 
      @tableName NVARCHAR(50), 
      @columns NVARCHAR(max), 
      @values NVARCHAR(max)
      as
      begin try
        declare @sql NVARCHAR(max)    
        SET @sql = 'INSERT INTO ' + QUOTENAME(@tableName) + ' (' + @columns + ') VALUES (' + @values + ')';
        exec sp_executesql @sql
      end try
      begin catch
        print 'Error: ' + error_message()
      end catch
    `;
    await request.query(createProcedureQuery);
  };

  // procedure to read table
  public static ReadTableProcedure = async () => {
    const request = await this.getRequest();

    const dropProdureQuery = `
    if object_id('readTable', 'p') is not null
    drop procedure readTable`;

    await request.query(dropProdureQuery);

    const createProcedureQuery = `
    create procedure readTable
    @tableName NVARCHAR(50),
    @columns NVARCHAR(max)=null
    with encryption
    as
    begin try
    declare @sql NVARCHAR(max)
    if @columns is null
    begin
      set @sql = 'select * from ' + quotename(@tableName) 
    end
    else
    begin
      set @sql = 'select ' + @columns + ' from ' + quotename(@tableName) 
    end
  
    exec sp_executesql @sql
    end try
    begin catch
    print 'Error: in read table procedure'
    end catch
    `;

    await request.query(createProcedureQuery);
  };

  // read table by id
  public static ReadTableByIdProcedure = async () => {
    const request = await this.getRequest();

    const dropProdureQuery = `
    if object_id('readTableById', 'p') is not null
    drop procedure readTableById`;

    await request.query(dropProdureQuery);

    const createProcedureQuery = `
    create procedure readTableById
    @tableName NVARCHAR(50), 
    @columns NVARCHAR(max)=null,
    @id INT
    with encryption
    as
    begin try
    declare @sql NVARCHAR(max)
    if @columns is null
    begin
    set @sql = 'select from ' + quotename(@tableName) + ' where id = ' + @id;
    end
    else 
    begin
    set @sql = 'select ' + @columns + ' from ' + quotename(@tableName) + ' where id = ' + @id;
    end
     exec sp_executesql @sql
    end try
    begin catch
    print 'Error: in read table by id procedure'
    end catch
    `;

    await request.query(createProcedureQuery);
  };

  // procedure to update table
  public static UpdateTableProcedure = async () => {
    const request = await this.getRequest();

    const dropProdureQuery = `
    if object_id('updateTable', 'p') is not null
    drop procedure updateTable`;

    await request.query(dropProdureQuery);

    const createProcedureQuery = ` 
     create procedure updateTable
     @tableName, @columns, @values, @id
     with encryption
     as
      begin try
      declare @sql NVARCHAR(max);
      set sql = 'update ' + quotename(@tableName) + ' set ' + @columns + ' = ' + @values + ' where id = ' + @id;
      exec sp_executesql @sql
      end try
      begin catch
      print 'Error: in update table procedure'
      end catch  
     `;
    await request.query(createProcedureQuery);
  };
  // procedure to delete table
  public static DeleteTableProcedure = async () => {
    const request = await this.getRequest();

    const dropProdureQuery = ` 
      if OBJECT_ID('deleteTable', 'P') IS NOT NULL
      drop procedure deleteTable`;

    await request.query(dropProdureQuery);
    // query i want execute in procedure
    const createProcedureQuery = ` 
    create procedure deleteTable 
    @tableName NVARCHAR(50), @id INT 
    with encryption
    as 
    begin try
    declare @sql NVARCHAR(max)
    set sql = 'delete from ' + quotename(@tableName) + ' where id = ' + @id;
    exec sp_executesql @sql
    end try
    begin catch
    print 'Error: in delete table procedure'
    end catch
    `;

    await request.query(createProcedureQuery);
  };
}

export default Procedure;
