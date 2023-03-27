const WRAPPER = document.querySelector('.api__section');

fetch('https://api.nasa.gov/planetary/apod?api_key=IOGagThStxF7X0yyTYHRUePpLWjb9Bj3VyD7PaY7&count=10')
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.forEach(element => {
			const CONTAINER = document.createElement("div");
			WRAPPER.appendChild(CONTAINER);
			CONTAINER.innerHTML = `<figure>
			<figcaption>${element.title}</figcaption>
			<img src="${element.hdurl}"><img></figure>`}
			)
		}
	)
	.catch(err => console.error(err));