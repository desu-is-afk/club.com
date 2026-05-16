function checkLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'cluber' && pass === '691109') {
    document.getElementById('message').textContent = 'Welcome!';
    window.location.href = 'index.html';
  } else {
    document.getElementById('message').textContent = 'Wrong username or password.';
  }
}