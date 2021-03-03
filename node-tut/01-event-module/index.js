const events = require('events');
const ev = new events.EventEmitter();

ev.on('evento', function (data) {
	console.log(data);
});

ev.once('oncemethod', (code, msg) => {
	console.log(`Got ${code} and ${msg}`);
});

ev.emit('evento', 'what is this? i dont get it why i need this');
ev.emit('oncemethod', 200, 'ok');
