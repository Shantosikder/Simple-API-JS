function loadComments(){
    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url)
    .then(response => response.json())
    .then(data => displayComments(data));
}

function displayComments(data) {
    const divContainer = document.getElementById('div-container');
    for(const comment of data){
        const div = document.createElement('div');
        div.innerHTML = `
        <h5>PostId: ${comment.postId}</h5>
        <h5>Id: ${comment.id}</h5>
        <h5>Name: ${comment.id}</h5>
        <span>Email: ${comment.email}</span>
        <p>Describation: ${comment.body}</p>
        `
        divContainer.appendChild(div);
    }
}
loadComments();