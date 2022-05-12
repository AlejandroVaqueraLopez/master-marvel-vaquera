const main = ()=>{
	fetch("https://hp-api.herokuapp.com/api/characters/students/")
		.then(response=>{
			return response.json()//return to get data
		})
		.then(data =>{
			console.log(data)//<--
		})
		.catch(error=>{
			console.log(error)
		})
}
main();
