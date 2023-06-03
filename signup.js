document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Save user details to local storage
    localStorage.setItem("user", JSON.stringify({ username: username, email: email, password: password }));
  
    // Redirect to login page
    window.location.href = "login.html";
  });
  