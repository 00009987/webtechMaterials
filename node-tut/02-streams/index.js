const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
	// fs.readFile(path.join(__dirname, '/test.json'), (err, data) => {
	// 	res.end(data);
	// });

	const stream = fs.createReadStream('test.json');
	stream.pipe(res);
});

server.listen(3000, (err) => {
	if (err) console.log(err);
});
