let username = '';

function login() {
    username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
        document.getElementById('messages').innerHTML += `<p><strong>${username}</strong> دخل الدردشة!</p>`;
    } else {
        alert('الرجاء إدخال اسم المستخدم وكلمة المرور.');
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        document.getElementById('messages').innerHTML += `<p><strong>${username}:</strong> ${message}</p>`;
        document.getElementById('message').value = '';
        const messagesDiv = document.getElementById('messages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    } else {
        alert('الرجاء كتابة رسالة.');
    }
}
