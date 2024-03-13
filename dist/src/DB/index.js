"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnect = exports.connectToSQLServer = void 0;
const tslib_1 = require("tslib");
const msnodesqlv8_1 = tslib_1.__importDefault(require("mssql/msnodesqlv8"));
// Connection configuration
const config = {
    driver: "msnodesqlv8",
    server: "localhost",
    database: "BlogPost",
    options: {
        trustedConnection: true, // Use Windows Authentication
    },
};
// let sql :SqlClient;
const connectToSQLServer = async () => {
    try {
        await msnodesqlv8_1.default.connect(config);
        console.log("connected with database");
    }
    catch (err) {
        console.error("Database error:", err);
    }
    finally {
        // sql.close();
    }
};
exports.connectToSQLServer = connectToSQLServer;
const closeConnect = async () => {
    //  await sql.close();
    console.log("Connection closed");
};
exports.closeConnect = closeConnect;
//# sourceMappingURL=index.js.map