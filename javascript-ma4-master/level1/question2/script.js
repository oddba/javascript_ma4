// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)

request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)

var details = document.getElementById('ul1');
  details.innerHTML += "<li>userId: " + data[0].userId + "</li>";
  details.innerHTML += "<li>id: " + data[0].id + "</li>";
  details.innerHTML += "<li>title: " + data[0].title + "</li>";
  details.innerHTML += "<li>completed: " + data[0].completed + "</li>";
  
  var details = document.getElementById('ul2');
  details.innerHTML += "<li>userId: " + data[1].userId + "</li>";
  details.innerHTML += "<li>id: " + data[1].id + "</li>";
  details.innerHTML += "<li>title: " + data[1].title + "</li>";
  details.innerHTML += "<li>completed: " + data[1].completed + "</li>";
}

// Send request
request.send()


