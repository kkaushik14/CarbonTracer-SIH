async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const successMessage = document.getElementById('login-success');

  try {
      const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      if (response.ok) {
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('token', token);
          successMessage.textContent = 'Login successful!';
      } else {
          const errorData = await response.json();
          successMessage.textContent = errorData.message || 'Login failed. Please try again.';
      }
  } catch (error) {
      console.error('Error logging in:', error);
      successMessage.textContent = 'An error occurred. Please try again later.';
  }
}

async function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const successMessage = document.getElementById('signup-success');

  try {
      const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
          successMessage.textContent = 'Sign Up successful!';
      } else {
          const errorData = await response.json();
          successMessage.textContent = errorData.message || 'Signup failed. Please try again.';
      }
  } catch (error) {
      console.error('Error signing up:', error);
      successMessage.textContent = 'An error occurred. Please try again later.';
  }
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateName(name) {
  return name.trim() !== '';
}

function showSignup() {
  document.getElementById('signup-popup').style.display = 'flex';
  document.getElementById('login-container').style.display = 'none';
}

function showLogin() {
  document.getElementById('signup-popup').style.display = 'none';
  document.getElementById('login-container').style.display = 'flex';
}

function closeSignup() {
  document.getElementById('signup-popup').style.display = 'none';
  document.getElementById('login-container').style.display = 'flex';
}