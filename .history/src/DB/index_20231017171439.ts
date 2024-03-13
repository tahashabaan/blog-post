import { Connection, Request } from "tedious";

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "Config";

// const config = {
//   server: DB_HOST,

//   authentication: {
//     type: "default",
//     options: {
//       userName: DB_USER,
//       password: DB_PASSWORD,
//     },
//   },

//   options:{
//       database:DB_DATABASE,
//       encrypt:true
//   }
// };

const config = {
  server: DB_HOST,
  // authentication: {
  //   type: 'default',
  //   options: {
  //     userName: DB_USER,
  //     password:DB_PASSWORD
  //   },
  // },
  options: {
    database: DB_DATABASE,
    encrypt: true,
  },
};

const connection = new Connection(config);

connection.on("connect", (err) => {
  if (err) {
    console.error("Connection failed:", err);
  } else {
    console.log("Connected to SQL Server.");
  }
});

export default  connection.connect();
