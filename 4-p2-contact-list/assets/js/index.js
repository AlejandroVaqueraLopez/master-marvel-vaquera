const contactsList = document.querySelector("#list-contacts");
const txtSearch = document.querySelector("#txt-search");
var listForFiltering = [];

const main = ()=>{
	fetch("https://hp-api.herokuapp.com/api/characters/students/")
		.then(response=>{
			return response.json()//return to get data
		})
		.then(data =>{
			//console.log(data)//<--
			let contactsParsed = [];
			contactsParsed = normalizeData(data);

			listForFiltering = contactsParsed;//we move this value to a GLOBAL variable
			renderData(contactsParsed);
		})
		.catch(error=>{
			console.log(error)
		})
}

//parsing the info requested from api
const normalizeData = (data)=>{
	let contacts = [];
	data.forEach((item) => {
		let info = {
			name: item.name,
			image: item.image
		}  
		contacts.push(info);
	});
	return contacts;
}

//loop that creates calls the listItem creator every item in api request
const renderData = (contacts) => {
	contacts.forEach((item) => {
		createListElement(item);
	});
}

//creation, fulfillment and appending every listItem into the ul
const createListElement = (info) => {
		const listItem = document.createElement("li");
		listItem.classList.add("list-contacts-item","card-panel","teal","lighten-1");

		const imageContainer = document.createElement("div");
		imageContainer.classList.add("user-image");

		const imageItem = document.createElement("img");
		imageItem.src = `${info.image}`;

		const userDataContainer = document.createElement("div");
		userDataContainer.classList.add("user-data");
		userDataContainer.innerHTML = info.name;

		imageContainer.appendChild(imageItem);//imageContainer > imageItem

		listItem.appendChild(imageContainer);//listItem > imageContainer
		listItem.appendChild(userDataContainer);//listItem > imageContainer + userDataContainer

		contactsList.appendChild(listItem);
	}
/*<li class="list-contacts-item card-panel teal lighten-1">
		<div class="user-image">
			<img src="./assets/images/user-icon.png" alt="user-icon">
		</div>

		<div class="user-data">
		innerHTML
		</div>
	</li>
		*/

var matchs = [];
const filtering = (word) =>{
		listForFiltering.forEach((item)=>{
		if(item.name.includes(word)){
			console.group("match");
			console.log(item);
			console.groupEnd();
			matchs.push(item);
		}else{

		}
	})
	return matchs;
}

txtSearch.addEventListener("keyup",(e)=>{
	contactsList.innerHTML = "";
	matchs = [];
	let word = e.target.value;
	console.log(word);
	let filteredContacts = filtering(word);
	renderData(filteredContacts);
})


main();


