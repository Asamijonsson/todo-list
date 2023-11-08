import TodoList from "./todoList.js";
import { readFileSync } from 'node:fs';

const print = console.log


const myTodoList = new TodoList();


const dbTodos = readFileSync("./todoList.csv", "utf8").trim().split("\r\n");


for (const dbTodo of dbTodos) {
  myTodoList.addToList(dbTodo);
}

export default class Todo {

  newtodoList


  constructor(newtodoList) {
    print("Den här är min Todo List\n" , myTodoList.todoList)
  
    this.newtodoList = newtodoList;
  }

  moveUp(todoList, name) {
  const index = todoList.findIndex(item => item === name); 
  if (index !== -1 && index > 0) { 
    const itemToMove = todoList.splice(index, 1); 
    todoList.splice(index - 1, 0, itemToMove[0]); 
  }
  this.moveUp(todoList, 'tvätta');

console.log('Uppdaterad att göra-lista:', todoList);
}


// addToList({beskrivning:'Handla mat till katten'});
}

myTodoList.addToList("handla");

myTodoList.saveToFile();