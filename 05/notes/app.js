const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/notes/create', (req, res) => {
	res.sendFile(path.join(__dirname, '/templates/create-note.html'));
});

app.listen(3000, (err) => {
	if (err) throw err;

	console.log('listening for port 3000...');
});
