// OUTPUT DATABASE CONTAINED POSTS TO PAGE
const posts_div = document.getElementById('posts_div');
function outputPosts(data) {
    posts_div.innerHTML = '';
    if (!data.length) {
        posts_div.innerHTML = '<p>THERE ARE CURRENTLY NO POSTS!</p>'
    };
    for (i = 0; i < data.length; i++) {
        let html = `<div id="blog_post">
        <h3>${data[i].title}</h3>
        <p>${data[i].content}</p>
        </div>`;
        posts_div.insertAdjacentHTML('beforeend', html);
    }
}
// FETCH POSTS FROM DATABASE
function fetchPosts() {
    fetch('/posts')
    .then(res => res.json())
        .then(data => {
            let posts_data = data;
            outputPosts(posts_data);
        })
}
// SAVE POSTS TO DATABASE
const post_btn = document.getElementById('post_btn');
function savePost(event) {
    let post_title = document.getElementById('enter_title').value;
    let post_content = document.getElementById('enter_content').value;
    event.preventDefault();
    const new_post = {
        title: post_title,
        content: post_content
    }
    fetch('/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(new_post)
    }).then(res => res.json())
        .then(() => {
        post_title = '';
        post_content = '';
    })
}
// ON PAGE LOAD
fetchPosts();
post_btn.addEventListener('click', savePost);