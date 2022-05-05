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


//corto circuito
const harryPotter = {
	name: "Harry Potter",
	species: "human",
	gender: "male",
	house: "Gryffindor",
	dateOfBirth: "31-07-1980",
	yearOfBirth: 1980,
	wizard: true,
	ancestry: "half-blood",
	eyeColour:"green",
	hairColour:"black",
	wand : {
		 wood: "holly",
		 core: "phoenix feather",
		 length: 11
	},
	patronus: "stag",
	hogwartsStudent: true,
	hogwartsStaff: false,
	actor: "Daniel Radcliffe",
	alternate_actors: [
		{
			name:"whatever"
		},
		{
			name:"whatever2"
		}
	],
	alive: true,
	image: "http://hp-api.herokuapp.com/images/harry.jpg",
	address:{
		street:"Private drive",
		number:"4",
		country: {
			suburb:"Little winging",
			state: "Survey",
			country:"England"
		}
	}
}

//? validates if an object exists(never add ? at the end of validation)
if(harryPotter?.alternate_actors){//only if exists 
	console.log(harryPotter.alternate_actors);//log it
}
