document.getElementById('sendButtonBlue').addEventListener('click', function() {
    sendMessage('blue');
});

document.getElementById('sendButtonRed').addEventListener('click', function() {
    sendMessage('red');
});

function sendMessage(user) {
    const messageInput = document.getElementById(`messageInput${capitalize(user)}`);
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', user);
        messageElement.textContent = messageText;

        document.getElementById('messages').appendChild(messageElement);
        messageInput.value = '';
        messageInput.focus();
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
