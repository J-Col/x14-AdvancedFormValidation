function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var notification = "";

  //Show message that there is an error with the username...
  if ((notification = validUser(userEntered)) =="great") {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else {
    document.getElementById("usernameError").innerHTML=notification;
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  //Show message that there is an error with the password...
  if((notification = validPass(passEntered, userEntered)) =="great") {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else {
  document.getElementById("passwordError").innerHTML=notification;
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
}

function validUser(username) {
  if (username.length < 6) {
    return "Username must be 6 characters or longer";
  }
  if (username.includes(" ")) {
      return "username cannot contain spaces";
  }
  else
    return "great";
}

function validPass(password, username) {
  if (password.toLowerCase() == "password") {
    return "password must be different than password";
  }
  if (password == username) {
    return "Cannot be same as username";
  }
  if (password.length < 6 || password.length > 20) {
    return "password must be 6-20 characters";
  }
  else 
    return "great";
}
