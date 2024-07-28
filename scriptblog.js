document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const titleInput = document.getElementById('title-input');
    const contentInput = document.getElementById('content-input');
    const blogPosts = document.getElementById('blog-posts');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addBlogPost(titleInput.value, contentInput.value);
        titleInput.value = '';
        contentInput.value = '';
    });

    function addBlogPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        blogPosts.appendChild(postDiv);
    }
});
