document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Retrieve user object from localStorage
    var storedUser = localStorage.getItem("user");
  
    if (storedUser) {
      // Parse storedUser JSON string to object
      var user = JSON.parse(storedUser);
  
      // Check if entered credentials match the stored user details
      if (username === user.username && password === user.password) {
        // Store the username in session storage
        sessionStorage.setItem("username", username);
  
        // Redirect to profile page
        window.location.href = "profile.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } else {
      alert("User not found. Please sign up first.");
    }
  });
  