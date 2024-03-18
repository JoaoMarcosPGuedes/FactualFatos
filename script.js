async function searchNews() {
    const apiKey = 'YOUR_API_KEY'; // Insira sua chave de API do NewsAPI.org aqui
    const query = document.getElementById('searchInput').value;
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles.length > 0) {
            const newsResults = document.getElementById('newsResults');
            newsResults.innerHTML = '';

            data.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                const title = document.createElement('h2');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                const source = document.createElement('p');
                source.textContent = `Fonte: ${article.source.name}`;

                const publishedAt = document.createElement('p');
                publishedAt.textContent = `Publicado em: ${new Date(article.publishedAt).toLocaleString()}`;

                const link = document.createElement('a');
                link.textContent = 'Leia mais';
                link.href = article.url;
                link.target = '_blank';

                articleDiv.appendChild(title);
                articleDiv.appendChild(description);
                articleDiv.appendChild(source);
                articleDiv.appendChild(publishedAt);
                articleDiv.appendChild(link);

                newsResults.appendChild(articleDiv);
            });
        } else {
            alert('Nenhuma notícia encontrada.');
        }
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        alert('Ocorreu um erro ao buscar notícias. Por favor, tente novamente mais tarde.');
    }
}
