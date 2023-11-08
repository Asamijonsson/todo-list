import { readFileSync } from 'node:fs'
import Todo from "./newtodo.js"

let dbTodos = readFileSync("./todoList.csv","utf8")

dbTodos = dbTodos.trim().split("\r\n")

let todos = [[]]


for (const todoData of dbTodos) {
      todos.push = [new Todo(todoData)]
}




