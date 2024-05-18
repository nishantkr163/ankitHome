const express = require('express');
const cors = require("cors");
const { connection } = require('./DB');
const { TodoRouter } = require('./Routes/Todo.Routers');


const app = express();
app.use(express.json());
app.use(cors())

app.use("/todo",TodoRouter);





app.listen(8080,async()=>{
    await connection
console.log("listening")
})