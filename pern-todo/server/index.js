const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes//
app.get("/", async (req, res) => {
  res.send({ message: "hello" });
});

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const getAllTodos = await pool.query("SELECT * FROM todo");

    res.json(getAllTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [
      id,
    ]);

    res.json(getTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id=$2",
      [description, id]
    );

    res.json("Update successfully");
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [
      id,
    ]);

    res.json("Delete succesfully ");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
