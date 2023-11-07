import TodoList from "./list.js";

const print = console.log

export default class Todo {

  todoList


  constructor() {
    print("Den här är min Todo List")
    this.todoList = new TodoList();
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

// Example usage:
const myTodo = new Todo();

myTodo.todoList.addToList('Handla');
myTodo.todoList.addToList('laga mat');
myTodo.todoList.addToList('dansa');

print('todoList', myTodo.todoList);

myTodo.todoList.addToTopOfList('tvätta');
print(myTodo.todoList);

myTodo.todoList.addToTopOfList('städa');
print(myTodo.todoList);

myTodo.todoList.removeFromListByName('tvätta');
print(myTodo.todoList);
