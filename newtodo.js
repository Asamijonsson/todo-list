import TodoList from "./todoList.js";
import { readFileSync } from 'node:fs';

const print = console.log


// Create an instance of TodoList
const myTodoList = new TodoList();

// Read to-do items from a CSV file
const dbTodos = readFileSync("./todoList.csv", "utf8").trim().split("\r\n");

// Create instances of the Todo class for each item in the CSV file
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
  const index = todoList.findIndex(item => item === name); // Hitta index för saken med det angivna namnet
  if (index !== -1 && index > 0) { // Om saken finns i listan och inte redan längst upp
    const itemToMove = todoList.splice(index, 1); // Ta bort saken från nuvarande position
    todoList.splice(index - 1, 0, itemToMove[0]); // Lägg till saken ett steg upp i listan
  }
  this.moveUp(todoList, 'tvätta');

console.log('Uppdaterad att göra-lista:', todoList);
}


// addToList({beskrivning:'Handla mat till katten'});
}


// print('Todo List:', myTodoList.todoList);

// Lägg till nya att-göra-objekt
myTodoList.addToList('handla');
myTodoList.addToList('tvätta');
myTodoList.addToList('laga mat');
// Spara den uppdaterade listan till filen
myTodoList.saveToFile();