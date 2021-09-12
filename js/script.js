async function getData() {
	try {
		const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
		const data = await res.json();
		var img = document.getElementById('res');
		img.src = data.message;
		img.style.width = '500px';
		img.style.height = '500px';
		console.log(data.message);
	} catch {
		console.log('error');
	}

	// return data;
}
