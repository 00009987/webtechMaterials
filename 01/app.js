const express = require('express');
const app = express();

app.get('/', (req, res) => {
	if (req.query.username !== undefined) {
		res.send(
			`<h1 style="font-family: sans-serif">hiiiiiiiiiii, ${req.query.username} ✌</h1>`
		);
	} else {
		res.send(`<h1 style="font-family: sans-serif">hiiiiiiiiiii ✌</h1>`);
	}
});

app.get('/login', (req, res) => {
	res.send(`<h1 style="font-family: sans-serif">no so fast 👀</h1>`);
});

app.post('/login', (req, res) => {});

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
