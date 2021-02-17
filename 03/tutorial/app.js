const express = require('express');
const mcModule = require('./modules/mc');
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.use('/mc', mcModule);

app
	.route('/students')
	.post((req, res) => {
		res.send(req.method);
	})
	.delete((req, res) => {
		res.send(req.method);
	});

app.listen(404, () => {
	console.log('server is on port 404');
});
