document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
        document.getElementById('message').style.color = 'red';
    }
});