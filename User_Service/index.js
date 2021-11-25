const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
);

const port = process.env.APP_PORT;

const userRouter = require("./routes/user.router");
const projectRouter = require("./routes/project.router");
const taskRouter = require("./routes/task.router");
const authRouter = require("./routes/auth.router");

app.use('/usersystem/users', userRouter);
app.use('/usersystem/projects', projectRouter);
app.use('/usersystem/tasks', taskRouter);
app.use('/usersystem/auth', authRouter);

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
})