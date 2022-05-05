console.group("literal-template.js");
const newPerson = {
	name:"lola",
	age:25,
	country:"Mexico"
}
const message = `<b>Name:</b> ${newPerson.name} <b>Age:</b> ${newPerson.age}`;
document.write(message);
console.log("printed on page");
console.groupEnd();
