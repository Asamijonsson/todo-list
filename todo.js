

// const print = console.log

// export default class Todo{

//   constructor(){
// let todoList = [];

// function addToList(todoItem){
//   todoList.push(todoItem);
//   return todoList;
// }

// }

// addToList('Handla');
// addToList('laga mat');
// addToList('dansa');

// // vi vill ju gärna se hur listan ser ut nu..
// print('todoList', todoList);

// //Lägg till en sak att göra överst i listan
// function addToTopOfList(todoList, task) {
//   todoList.unshift(task)
//   return todoList;
// }

// let nyLista = addToTopOfList(todoList,'tvätta')

// console.log(todoList)

// function addToTopOfList(todoList, task) {
//   todoList.unshift(task)
//   return todoList;
// }

// let nynyLista = addToTopOfList(todoList,'städa')

// console.log(todoList)


// //Ta bort en sak längst ner i listan
 
// // function deleteFromLast(todoList, task) {
// //   todoList.pop(task)
// //   return todoList
// // }

// // let myList = deleteFromLast(todoList)
// // console.log(todoList)


// //Ta bort en sak högst upp i listan

// // function deleteFromFirst(todoList, task) {
// //   todoList.shift(task)
// //   return todoList
// // }

// // let myLista = deleteFromFirst(todoList)
// // console.log(todoList)

// //Ta bort en sak baserad på dess placering i listan
// // function removeFrIndex(todoList, index) {
// //   if (index < 0 || index >= todoList.length) {
// //     console.log("skriv rätt index")
// //      return null
// //   }
 
// //   let removedItem = todoList.splice(index,1 )[0]
// //   return removedItem
  
// // }



// // let tabortMedIndex = removeFrIndex(todoList, 'städa')

// // console.log(todoList)

// // //Ta bort en sak baserad på dess namn

// // function removeFromListByName(todoList, name1) {
// //   // Hitta index för saken med det angivna namnet
// //   var index2 = todoList.indexOf(name1);

// //   // // Kontrollera om saken med det angivna namnet finns i listan
// //   // if (index2 !== -1) {
// //   //   // Anropa removeFromListByIndex för att ta bort saken med det hittade indexet
// //   //   return removeFrIndex(todoList, index2);
// //   // } else {
// //   //   console.log("Saken med namnet '" + name1 + "' finns inte i listan.");
// //   //   return null;
// //   // }
// // }

// // // Exempel på användning:

// // let borttagenUppgift = removeFromListByName(todoList, "tvätta"); // Tar bort uppgiften med namnet "Uppgift 2"

// // console.log(todoList); // Listan efter borttagning
// // console.log("Borttagen uppgift: " + borttagenUppgift); // Den borttagna uppgiften



// // //Ta bort en sak och lägg till den i ”har gjort”-lista
// // let doneList = [];

// // function removeFromListAndAddToDone(todoList, name) {
// //   // Anropa removeFromListByName för att ta bort saken från att göra-listan
// //   let removedItem2 = removeFromListByName(todoList, name);

// //   // Om saken hittades och togs bort, lägg till den i "har gjort"-listan
// //   if (removedItem2 !== null) {
// //     doneList.push(removedItem2);
// //   }

// //   // Returnera listan över saker som är gjorda
// //   return doneList;
// // }

// // // Exempel på användning:

// // removeFromListAndAddToDone(todoList, "tvätta"); // Flyttar "Uppgift 2" från att göra till "har gjort"

// // console.log("Att göra-listan: " + todoList); // Att göra-listan efter borttagning
// // console.log("Har gjort-listan: " + doneList); // "Har gjort"-listan efter tillägg



// // Ta bort en sak baserad på dess placering i listan

// function removeFromByIndex(todoList, index) {
//   if (index < 0 || index > todoList.length) {
//     return null
//   }
//   let removeItem = todoList.splice(0, 1) //remove 1 element at index 0
//  return removeItem
// }

// let tabortMedIndex = removeFromByIndex(todoList, 'städa')


//  console.log(todoList)

// // Ta bort en sak baserad på dess namn

// function removeFromListByName(todoList, name) {
//   const index = todoList.findIndex(item => item === name)
//   if (index !== -1) {
//     return removeFromByIndex(todoList, index)
//   }
//       return null
//     }
//     let removedItem = removeFromListByName(todoList, 'tvätta')

// console.log(todoList)
 


// //Ta bort en sak och lägg till den i ”har gjort”-lista


// // Skapa "har gjort"-listan
// let doneList = [];

// function removeFromListAndAddToDone(todoList, name) {
//   const removedItem = removeFromListByName(todoList, name);
//   if (removedItem !== null) {
//     doneList.push(removedItem[0]);
//   }
//   return doneList;
// }

// // Exempel användning
// removeFromListAndAddToDone(todoList, 'Handla');

// console.log('Att göra-listan:', todoList); // Listan kommer att vara ['städa', 'tvätta']
// console.log('Har gjort-listan:', doneList); // Listan kommer att vara ['handla']



// //Flytta en sak till toppen av listan

// // Återanvänd removeFromListByName-funktionen från steg 7
// function removeFromListByName(todoList, name) {
//   const index = todoList.findIndex(item => item === name);
//   if (index !== -1) {
//     const moveToTop = todoList.splice(index, 1)
//     todoList.unshift(moveToTop[0])
//   }
//   return todoList;
// }


// removeFromListByName(todoList, 'dansa');

// console.log('Uppdaterad att göra-lista:', todoList);


// // Flytta en sak till botten av listan


// function removeFromListByName(todoList, name) {
//   const index = todoList.findIndex(item => item === name);
//   if (index !== -1) {
//     const moveToBottom = todoList.splice(index, 1)
//     todoList.push(moveToBottom[0])
//   }
//   return todoList;
// }


// removeFromListByName(todoList, 'dansa');

// console.log('Uppdaterad att göra-lista:', todoList);


// //Flytta en sak ett steg ner i listan

// function moveDown(todoList, name) {
//   const index = todoList.findIndex(item => item === name); // Hitta index för saken med det angivna namnet
//   if (index !== -1 && index < todoList.length - 1) { // Om saken finns i listan och inte redan längst ner
//     const itemToMove = todoList.splice(index, 1); // Ta bort saken från nuvarande position
//     todoList.splice(index + 1, 0, itemToMove[0]); // Lägg till saken ett steg ner i listan
//   }
//   return todoList;
// }

// // Exempel användning

// moveDown(todoList, 'Handla');

// console.log('Uppdaterad att göra-lista:', todoList);


// // Flytta en sak ett steg upp i listan

// function moveUp(todoList, name) {
//   const index = todoList.findIndex(item => item === name); // Hitta index för saken med det angivna namnet
//   if (index !== -1 && index > 0) { // Om saken finns i listan och inte redan längst upp
//     const itemToMove = todoList.splice(index, 1); // Ta bort saken från nuvarande position
//     todoList.splice(index - 1, 0, itemToMove[0]); // Lägg till saken ett steg upp i listan
//   }
//   return todoList;
// }

// // Exempel användning

// moveUp(todoList, 'tvätta');

// console.log('Uppdaterad att göra-lista:', todoList);


// // addToList({beskrivning:'Handla mat till katten'});

// // // vi vill ju gärna se hur listan ser ut nu..
// // console.log('todoList', todoList);
// }