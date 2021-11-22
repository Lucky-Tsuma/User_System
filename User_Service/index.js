const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(cors());

const port = process.env.APP_PORT;

const userRouter = require("./usersystem/routes/user.router");
const projectRouter = require("./usersystem/routes/project.router");
const taskRouter = require("./usersystem/routes/task.router");
const authRouter = require("./usersystem/routes/auth.router");

app.use('/usersystem/users', userRouter);
app.use('/usersystem/projects', projectRouter);
app.use('/usersystem/tasks', taskRouter);
app.use('/usersystem/auth', authRouter);

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
})