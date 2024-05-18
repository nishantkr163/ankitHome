const express = require("express");
const TodoModel = require("../Model/Todo.model");

const TodoRouter = express.Router();

TodoRouter.post("/post", async (req, res) => {
  const { title, description, quantity } = req.body;
  try {
    const todo = new TodoModel({
      title,
      description,
      quantity,
    //   category,
      status: false,
      startDate: new Date(),
    });
    await todo.save();
    res.status(200).send({ message: "added successfully", added: todo });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


TodoRouter.get("/get", async (req, res) => {
  try {
    const todo = await TodoModel.find();
    res.status(200).send(todo);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


TodoRouter.patch("/update/:id", async (req, res) => {
    const {id} = req.params;
    try{
await TodoModel.findByIdAndUpdate({_id:id},req.body);
res.status(200).send("updated")
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
})


TodoRouter.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    try{
        await TodoModel.findByIdAndDelete({_id:id})
        res.status(200).send({"deleted":id})
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
})

module.exports = { TodoRouter };
