const WRAPPER = document.querySelector('.api__section');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '476e6a88bemshe2743700f2b9539p1da050jsn5841396743bb',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
	.then(response => response.json())
	.then(data => {
		console.log(data.classes);
		data.classes.forEach(element => {
			console.log(element.classes)
			const CONTAINER = document.createElement("div");
			const NAME = document.createElement("p");
			WRAPPER.appendChild(CONTAINER);
			CONTAINER.appendChild(NAME);
			NAME.innerHTML = `Classes : ${element}`;
		});
	}
	)
	.catch(err => console.error(err));