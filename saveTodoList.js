import { appendFileSync } from 'node:fs';

let todoList = ["tvätta katt"]; // Ersätt detta med det faktiska hemliga ordet
const fileName = "./todoList.txt";

// Lägg till det hemliga ordet i filen med en radbrytning
appendFileSync(fileName, secretWord + '\n', 'utf8');
console.log("Min Todo-List sparade i " + fileName)