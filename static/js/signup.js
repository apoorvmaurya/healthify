document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Save user details to local storage
  localStorage.setItem("user", JSON.stringify({ username: username, email: email, password: password }));

  // Redirect to login page
  window.location.href = "profile.html";
});

function startGoogleSignIn() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '681018805781-sgin86ama2q2eic886cetphsufr415hi.apps.googleusercontent.com',
    });
  });
}

function googleSignUp() {
  gapi.auth2.getAuthInstance().signIn()
    .then(function(user) {
      // Successful authentication
      var profile = user.getBasicProfile();
      var username = profile.getName();
      var email = profile.getEmail();
      var password = ""; // No password for Google sign-in

      // Save user details to local storage or your preferred method
      localStorage.setItem("user", JSON.stringify({ username: username, email: email, password: password }));

      // Delay the redirection slightly to ensure local storage is updated
      setTimeout(function() {
        // Redirect to profile page or your desired destination
        window.location.href = "profile.html";
      }, 500);
    })
    .catch(function(error) {
      // Handle error during authentication
      console.log(error);
    });
}

window.onload = function() {
  startGoogleSignIn();
};
