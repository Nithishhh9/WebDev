document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const articles = document.querySelectorAll('main article');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove highlight from all articles
            articles.forEach(article => {
                article.style.backgroundColor = '';
            });
            
            // Get the corresponding article
            const articleTitle = link.textContent;
            const article = Array.from(articles).find(article => article.querySelector('h2').textContent === articleTitle);
            
            // Highlight the article
            if (article) {
                article.style.backgroundColor = '#efb4f1';
                article.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
