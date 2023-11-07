const print = console.log

export default class Todo {
  constructor() {
    print("Den här är min Todo List")
    this.todoList = []; // Define todoList as a class property
  }

  addToList(todoItem) {
    this.todoList.push(todoItem);
    return this.todoList;
  }

  addToTopOfList(task) {
    this.todoList.unshift(task);
    return this.todoList;
  }

  removeFromByIndex(index) {
    if (index < 0 || index >= this.todoList.length) {
      return null;
    }
    let removeItem = this.todoList.splice(index, 1);
    return removeItem;
  }

  removeFromListByName(name) {
    const index = this.todoList.findIndex(item => item === name);
    if (index !== -1) {
      return this.removeFromByIndex(index);
    }
    return null;
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

// Exempel användning




// addToList({beskrivning:'Handla mat till katten'});
}

// Example usage:
const myTodo = new Todo();

myTodo.addToList('Handla');
myTodo.addToList('laga mat');
myTodo.addToList('dansa');

print('todoList', myTodo.todoList);

myTodo.addToTopOfList('tvätta');
print(myTodo.todoList);

myTodo.addToTopOfList('städa');
print(myTodo.todoList);

myTodo.removeFromListByName('tvätta');
print(myTodo.todoList);
