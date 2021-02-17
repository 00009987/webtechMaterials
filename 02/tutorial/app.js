const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) =>{
	let options = {name: 'John Doe', address: 'adresssssss', phone: '988765432'}
	res.render('index', options)
})

app.listen(3000, () =>{
	console.log('server is running on http://localhost:3000/')
})