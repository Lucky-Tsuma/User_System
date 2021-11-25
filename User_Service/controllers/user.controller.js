const mssql = require('mssql');
const { ms_sql_config } = require("../config/database");

module.exports = {

    getUsers: async (req, res) => {
        let sql = `SELECT * FROM users`;

        try {
            const pool = await mssql.connect(ms_sql_config);
            const result = await pool.request().query(sql);
            result === null ? res.status(201).json({ success: 0, message: "No users available" }) : res.status(201).json({ success: 1, message: result });
        } catch(error) {
            return res.status(500).json({ success: 0, message: error });
        }
        
    },
    getUser: async (req, res) => {
        const { user_id } = req.body;
        let sql = `SELECT * FROM users WHERE user_id = '${user_id}'`;

        try {
            const pool = await mssql.connect(ms_sql_config);
            const result = await pool.request().query(sql);
            return result === null ? res.status(401).send({ success: 0, message: "User not available" }) : res.status(201).json({ success: 1, message:  result.recordset[0] });
        } catch(error) {
            return res.status(500).send({ success: 0, message: error });
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
                return res.status(401).json({ success: 0, message: "User does not exist" });
            } else {
                result = await pool.request().query(sql);
                return res.status(201).json( { success: 1, message: "User deleted successfully" });
            }
        } catch(error) {
            return res.status(500).json({ success: 0, message: error });
        }
    }
}