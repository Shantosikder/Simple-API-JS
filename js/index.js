function loadUser2() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((user) => displayUser2(user));
}

function displayUser2(data) {
  const ul = document.getElementById("user-list");
  for (user of data) {
    console.log(user.name);
    console.log(user.email);
    const li = document.createElement("li");
    li.innerText = `
           ${user.name}
           ${user.email}
          `;
    ul.appendChild(li);
  }
}

//create a post 
function createUser() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//update a post
function updatePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//delete a post
function deletePost(){
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}
