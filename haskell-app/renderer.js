// Backend and endpoint details
var host     = "http://127.0.0.1:8080",
    endpoint = "/users";
// Retry configuration
var tryNo    = 0,
    maxTries = 50,
    waitTime = 250;

var fetchUserList = function() {
  $.getJSON(host + endpoint, function(users) {
    $("#status").html("Fetched the content after try #" + (tryNo + 1) + "!");
    // Construct the user list HTML output
    var output = "";
    for (var i in users) {
      var user = users[i];
      output += "ID: " + user.userId;
      output += ", Firstname: " + user.userFirstName;
      output += ", Lastname: " + user.userLastName;
      output += "<br>";
    }
    $("#userList").html(output);
  }).fail(function() {
    $("#status").html("Try #" + (tryNo + 1) + ". " +
                   "Are you sure the server is running on " + host + "?");
    tryNo += 1;
    // Keep trying until we get an answer or reach the maximum number of tries
    if (tryNo < maxTries) {
      setTimeout(fetchUserList, waitTime);
    }
  });
}

// Start trying to fetch the user list
fetchUserList();
