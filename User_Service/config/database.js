const { createPool } = require("mssql");

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.MSSQL_DB,
    connectionLimit: 10
});

module.exports = pool;