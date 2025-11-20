var uid = prompt("Enter user id", "User Id");
var pwd = prompt("Enter Password", "Password");

var message = (uid == "John" && pwd == "1234") ? "Welcome" : "Invalid User Id or password"
alert(message);

