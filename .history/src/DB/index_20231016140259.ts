const sql = require('tedious');

import {} from "@"
const config = {
  server: 'your-server-name',   // Your SQL Server's host name
  database: 'your-database-name', // Your database name
  user: 'your-username',        // Your SQL Server login username
  password: 'your-password',    // Your SQL Server login password
  options: {
    encrypt: true, // Use if you have SSL enabled
  },
};

sql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to SQL Server:', err);
  } else {
    console.log('Connected to SQL Server');
  }
});
