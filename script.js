import { readFileSync } from 'node:fs'
import Todo from "./newtodo.js"

let dbTodos = readFileSync("./todoList.csv", "utf8")

dbTodos = dbTodos.trim().split("\r\n")

let todos = []

for (const dbTodo of dbTodos) {
  // const todoData = dbTodo.split(","); // Use a different variable name
  todos.push(new Todo(todoData[0], todoData[1], todoData[2]));
}