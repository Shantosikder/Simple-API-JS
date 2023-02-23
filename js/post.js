function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(posts){
    const postContainer = document.getElementById('div-container');
    for(post of posts){
        // console.log(post)
       const postDiv = document.createElement('div');
       postDiv.classList.add('post');
       postDiv.innerHTML = `
       <h3>ID Number: ${post.id}</h3>
       <h5>User: ${post.userId}</h5>
       <h4>Title: ${post.title}</h4>
       <p>Describtion: ${post.body}</p>
       `
       postContainer.appendChild(postDiv);
    }
}
loadPost();