const socket = io();

socket.on('connect', () => {
  // connected to server
});

// get message from developer
socket.on('MessageFromDeveloper', (message) => {
  console.log(message.text);
})

socket.on('message', (message) => {
  console.log(message.text);
})
