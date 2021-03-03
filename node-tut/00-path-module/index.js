// Write File

const fs = require('fs');

const data = [
	{
		author: 'john bush',
		date: '3/3/2021',
		topic: 'path-module',
	},
];

fs.writeFile('test.json', JSON.stringify(data), (err) => {
	if (err) throw err;
	// console.log('done');
});

// Path Module
const path = require('path');
let baseN = path.basename('00-path-module/test.json');
let dirN = path.dirname('00-path-module/test.json');
let parsedN = path.parse('00-path-module/test.json');
let absolutePath = path.resolve('test.json');

console.log('basename: ', baseN);
console.log('dirname: ', dirN);
console.log('parsedName: ', parsedN);
console.log('absolutepath: ', absolutePath);
