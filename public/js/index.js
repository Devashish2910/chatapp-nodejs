const socket = io();

socket.on('connect', () => {
  // connected to server
});

// get message from developer
socket.on('MessageFromDeveloper', (message) => {
  document.querySelector('#title').innerHTML = message.text;
});

socket.on('message', (message) => {
  jQuery('#lbl-message').append('<label>' + message.text + '</label><br />');
});

// handle submit new message
// document.querySelector('#btn-send').addEventListener('click', sendNewMessage);
//
// function sendNewMessage() {
//   const message = document.querySelector('#txt-message').value;
//   document.querySelector('#txt-message').value = "";
//   socket.emit('message', {
//     text: message
//   })
// }
var $form = jQuery('#chat-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
});
