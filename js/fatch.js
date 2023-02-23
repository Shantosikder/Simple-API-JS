/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
 */

function getData(){
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
}

function loadUser(){
      const url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url)
      .then(response => response.json())
      .then(user => displayUser(user));
}

function displayUser(user){
      console.log(user);
}

