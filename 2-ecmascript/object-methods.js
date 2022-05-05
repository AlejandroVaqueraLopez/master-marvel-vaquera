console.group("object-methods.js")
const person = {
	name:"alejandro",
	age: 19,
	country:"Mexico"
}
//returns an array with arrays inside (matrix) of every property of object
console.log(Object.entries(person));
console.log(Object.values(person));//returns the values of object
console.log(Object.keys(person));//returns keys of the object

const entries = Object.entries(person);

const anotherPerson = Object.create(Object.fromEntries(entries));//create an object from array
console.log(anotherPerson);
console.groupEnd();
