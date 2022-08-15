// MATERIALIZE INIT
document.addEventListener('DOMContentLoaded', function () { M.AutoInit() })
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
});
// TOPIC TEXT SHOWS SELECTED TOPIC
const select_topic = document.getElementById('select_topic')
function topicText(event) {
    let selected_topic = event.target.innerText
    select_topic.innerText = selected_topic
}
// OUTPUT DATABASE CONTAINED TOPICS TO MODAL DROPDOWN
const topics_ul = document.getElementById('dropdown1')
function outputTopics(data) {
    // select_topic.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        let topic_li = document.createElement('li');
        topic_li.innerText = data[i].name;
        topic_li.addEventListener('click', topicText)
        topics_ul.appendChild(topic_li)
    }
}
// OUTPUT DATABASE CONTAINED POSTS TO PAGE
const posts_div = document.getElementById('posts_div');
function outputPosts(data) {
    posts_div.innerHTML = '';
    if (!data.length) {
        posts_div.innerHTML = '<p>THERE ARE CURRENTLY NO POSTS!</p>'
    };
    for (i = 0; i < data.length; i++) {
        let html = `<div class="col s12">
    <div class="card blue-grey darken-1">
        <div id="blog_post" class="card-content white-text">
            <span class="card-title">${data[i].title} - ${data[i].author}</span>
            <p>${data[i].topic_name}</p>
            <p>${data[i].content}</p>
        </div>
    </div>
</div>`
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
// FETCH TOPICS FROM DATABASE
function fetchTopics() {
    fetch('/topics')
        .then(res => res.json())
            .then(data => {
                let topics_data = data;
                outputTopics(topics_data)
            })
}
// SAVE TOPICS TO DATABASE
const create_topic_btn = document.getElementById('create_topic_btn')
function saveTopic(event) {
    event.preventDefault()
    const topic_name = document.getElementById('enter_name').value
    const new_topic = {
        name: topic_name
    };
    fetch('/topics', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(new_topic)
    });
    document.location.replace('/')
}
// SAVE POSTS TO DATABASE
const post_btn = document.getElementById('post_btn');
function savePost(event) {
    event.preventDefault();
    const post_title = document.getElementById('enter_title').value;
    const post_content = document.getElementById('enter_content').value;
    const new_post = {
        title: post_title,
        topic_name: select_topic.innerText,
        content: post_content
    }
    fetch('/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(new_post)
    })
    document.location.replace('/')
}
// ON PAGE LOAD
fetchPosts();
fetchTopics();
post_btn.addEventListener('click', savePost);
create_topic_btn.addEventListener('click', saveTopic)