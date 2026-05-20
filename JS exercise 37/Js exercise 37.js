const blogForm = document.getElementById('blogForm');
const postTitleInput = document.getElementById('postTitle');
const postImageInput = document.getElementById('postImage');
const postContentInput = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');


let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// ---  all Functions ---

function renderPosts() {
    postsContainer.innerHTML = '';

    if (blogPosts.length === 0) {
        postsContainer.innerHTML = '<p style="color: #777;">No posts available yet.</p>';
        return;
    }

    blogPosts.forEach((post, index) => {
     
        const postCard = document.createElement('div');
        postCard.className = 'blog-post';

        const titleEl = document.createElement('h3');
        titleEl.textContent = post.title;
        postCard.appendChild(titleEl);


        if (post.image && post.image.trim() !== '') {
            const imgEl = document.createElement('img');
            imgEl.src = post.image;
            imgEl.alt = post.title;
            postCard.appendChild(imgEl);
        }


        const contentEl = document.createElement('p');
        contentEl.textContent = post.content;
        postCard.appendChild(contentEl);

        const btnGroup = document.createElement('div');
        btnGroup.className = 'btn-group';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editPost(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deletePost(index));

        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(deleteBtn);
        postCard.appendChild(btnGroup);
        postsContainer.appendChild(postCard);
    });
}

// save funtion 
function saveToStorage() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    renderPosts();
}

function addPost(e) {
    e.preventDefault();

    const newPost = {
        title: postTitleInput.value,
        image: postImageInput.value,
        content: postContentInput.value
    };

    blogPosts.push(newPost);
    saveToStorage();


    blogForm.reset();
}


function editPost(index) {
    const targetPost = blogPosts[index];

    const newTitle = prompt("Edit Title:", targetPost.title);
    if (newTitle === null) return; 


    const newImage = prompt("Edit Image URL:", targetPost.image);
    if (newImage === null) return;


    const newContent = prompt("Edit Content:", targetPost.content);
    if (newContent === null) return;

    blogPosts[index] = {
        title: newTitle.trim() !== "" ? newTitle : targetPost.title,
        image: newImage,
        content: newContent.trim() !== "" ? newContent : targetPost.content
    };

    saveToStorage();
}

function deletePost(index) {
    if (confirm("Are you sure you want to delete this blog post?")) {
        blogPosts.splice(index, 1);
        saveToStorage();
    }
}

blogForm.addEventListener('submit', addPost);


renderPosts();