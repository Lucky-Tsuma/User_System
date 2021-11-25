const mssql = require('mssql');
const { ms_sql_config } = require("../config/database");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {

    registerUser: async (req, res) => {
        const { email, firstname, lastname, password } = req.body;

        try {
            if(!email || !firstname || !lastname || !password) {
                return res.status(401).json({ success: 0, message: "Make sure to fill all the required fields" })
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            let sql = `INSERT INTO users(email, firstname, lastname, password) VALUES('${email}', '${firstname}', '${lastname}', '${hashedPassword}')`;
            const pool = await mssql.connect(ms_sql_config);
            await pool.request().query(sql);
            return res.status(201).json({ success: 1, message: "User added successfully" });
        } catch (error){
            return res.status(500).json({ success: 0, message: error });
        }
    },
    loginUser: async (req, res) => {
        const {email, password} = req.body;

        try {
            if(email && password) {
                let sql = `SELECT * FROM users WHERE email = '${email}'`;
    
                const pool = await mssql.connect(ms_sql_config);
                const data = await pool.request().query(sql);
                const user = data.recordset[0];
    
                if (!user) return res.status(401).json({success: 0, message: "User not found"});
    
                bcrypt.compare(password, user.password, (err, result) => {
                    if (!result) return res.status(401).json({success: 0, message: "Invalid user details"});
          
                    const token = sign(
                        { firstname: user.firstname, lastname: user.lastname, email: user.email },
                        process.env.SECRET_KEY,
                        { expiresIn: "1h" }
                    );
                    return res.json({ success: 1, message: token });
                });
    
            }
        } catch(error) {
            return res.status(500).json({ success: 0, message: error });
        }
    }
}