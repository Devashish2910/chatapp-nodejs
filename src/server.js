const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + './../public'));

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.broadcast.emit('message', message);
  })

  socket.emit('MessageFromDeveloper', {
    text: `Welcome to ChatApp`
  })

});

http.listen(PORT, () => {
  console.log("Application Started On: http://localhost:" + PORT);
});
