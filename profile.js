// Retrieve user object from localStorage
var storedUser = localStorage.getItem('user');

if (storedUser) {
  // Parse storedUser JSON string to object
  var user = JSON.parse(storedUser);

  // Set user details in the profile page
  document.getElementById('username').textContent = user.username;
  document.getElementById('email').textContent = user.email;

  // Add a welcome message animation
  var welcomeMessage = document.querySelector('.welcome-message');
  welcomeMessage.style.opacity = 0;
  welcomeMessage.style.transform = 'translateY(30px)';
  welcomeMessage.style.transition = 'opacity 0.5s, transform 0.5s';

  setTimeout(function () {
    welcomeMessage.style.opacity = 1;
    welcomeMessage.style.transform = 'translateY(0)';
  }, 500);

  // Add a profile card animation
  var profileCard = document.querySelector('.profile-card');
  profileCard.style.opacity = 0;
  profileCard.style.transform = 'translateY(30px)';
  profileCard.style.transition = 'opacity 0.5s, transform 0.5s';

  setTimeout(function () {
    profileCard.style.opacity = 1;
    profileCard.style.transform = 'translateY(0)';
  }, 800);

  // Add a logout functionality
  var logoutButton = document.getElementById('logout-button');

  logoutButton.addEventListener('click', function () {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    // Redirect to the login page
    window.location.href = 'login.html';
  });
} else {
  alert('User not found. Please sign in first.');
  // Redirect to login page
  window.location.href = 'login.html';
}
