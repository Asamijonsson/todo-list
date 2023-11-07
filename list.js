export default class TodoList {
  constructor() {
    this.todoList=[]
  }

  addToList(todoItem) {
    this.todoList.push(todoItem)
    return this.todoList;
  }

  addToTopOfList(task) {
    this.todoList.unshift(task)
    return this.todoList;
}

  removeFromListByIndex(index) {
    if (index < 0 || index > this.todoList.lengh) {
      return null;
    }
    let removeItem = this.todoList.splice(index, 1);
    return removeItem;
  }
  
  removeFromListByName(name) {
    const index = this.todoList.findIndex(item => item === name);
    if (index !== -1)
    {
      return this.removeFromListByIndex(index)
    } 
    return null;
  }

}