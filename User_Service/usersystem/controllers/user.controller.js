const mssql = require('mssql');
const { ms_sql_config } = require("../../config/database");

module.exports = {

    getUsers: async (req, res) => {
        let sql = `SELECT * FROM users`;

        try {
            const pool = await mssql.connect(ms_sql_config);
            const result = await pool.request().query(sql);
            result === null ? res.status(201).send("No users available") : res.status(201).send(result);
        } catch(error) {
            res.status(500).send(error);
        }
        
    },
    getUser: async (req, res) => {
        const { user_id } = req.body;
        let sql = `SELECT * FROM users WHERE user_id = '${user_id}'`;

        try {
            const pool = await mssql.connect(ms_sql_config);
            const result = await pool.request().query(sql);
            result === null ? res.status(201).send("User not available") : res.status(201).send(result.recordset[0]);
        } catch(error) {
            res.status(500).send(error);
        } 
    },
    deleteUser: async (req, res) => {
        const { user_id } = req.body;
        let sql1 = `SELECT * FROM users WHERE user_id = '${user_id}'`;
        let sql = `DELETE FROM users WHERE user_id = '${user_id}'`;

        try {
            const pool = await mssql.connect(ms_sql_config);
            result = await pool.request().query(sql1);
            if(result.recordset[0] == null) {
                res.status(201).send("User does not exist");
            } else {
                result = await pool.request().query(sql);
                res.status(201).send("User deleted successfully");
            }
        } catch(error) {
            res.status(500).send(error);
        }
    }
}