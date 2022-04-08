// Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.
// Call both functions directly from your code.
// Add an event listener to task3Element and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.
// Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated).
// Call that new function directly from your code and alert() the result of that function.

function showAlert() {
  alert("showAlert!");
}

function showName(name) {
  alert(name);
}

function concatStrings(string1, string2, string3) {
  return (string1 + string2 + string3);
}

showAlert();
showName("Austin");

const task3Element = document.getElementById("task-3");
task3Element.addEventListener("click", showAlert);
alert(concatStrings("1", "2", "3"));
