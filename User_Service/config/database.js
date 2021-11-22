require("dotenv").config();

const ms_sql_config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MSSQL_DB,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, 
    trustServerCertificate: true 
  }
};


module.exports = {ms_sql_config};