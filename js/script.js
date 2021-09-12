async function getData() {
	try {
		const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
		const data = await res.json();
		var img = document.getElementById('res');
		img.src = data.message;
		console.log(data.message);
	} catch {
		console.log('error');
	}

	// return data;
}

getData();
