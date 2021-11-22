const mssql = require('mssql');
const { ms_sql_config } = require("../../config/database");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {

    registerUser: async (req, res) => {
        const { email, firstname, lastname, password } = req.body;

        try {
            if(!email || !firstname || !lastname || !password) {
                res.status(401).send("Make sure to fill all the required fields");
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            let sql = `INSERT INTO users(email, firstname, lastname, password) VALUES('${email}', '${firstname}', '${lastname}', '${hashedPassword}')`;
            const pool = await mssql.connect(ms_sql_config);
            await pool.request().query(sql);
            res.status(201).send("User added successfully");
        } catch (error){
            res.status(500).send();
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
    
                if (!user) res.status(401).send("User not found");
    
                bcrypt.compare(password, user.password, (err, result) => {
                    if (!result) res.status(401).send("Invalid user details");
          
                    const token = sign(
                        { firstname: user.firstname, lastname: user.lastname, email: user.email },
                        process.env.SECRET_KEY,
                        { expiresIn: "1h" }
                    );
                    res.json({ accessToken: token });
                });
    
            }
        } catch(error) {
            res.status(500).send();
        }
    }
}