const { writeDB  } = require('../services/writeDB');
const { Server } = require('socket.io');
//const writeDataBase = require('./services/writeCloud');
const {Messages, lastFiftyMsg} = require('../moduls/message');

module.exports = function (server){
	const io = new Server(server, {
	    cors: {
	        origin: "http://localhost:3000",
	        methods: ['GET', 'POST'],
	    },
	});

	io.on('connection', (socket)=>{

	    socket.on('send_message', (data) => {
	        const { message, username, time } = data;

	        io.emit('new_message', data); // Send to all users, including sender
	        writeDB(message, username, time)
	          .catch((err) => console.log(err));

	    }); 

	    socket.on("lastFiftyMsg",(limit)=>{
	        lastFiftyMsg(limit)
	            .then(res=>{ io.emit('lastMsg', res) })
	            .catch(err=>console.log(err));
	    })

	    
	});
}
