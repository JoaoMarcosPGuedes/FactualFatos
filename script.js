// scripts.js

// Substitua 'sua_chave_da_api' pela sua chave da API do NewsAPI.org
const apiKey = '159169b7970549b082187135ea3cb068i';

// Função para buscar notícias
async function buscarNoticias() {
    const url = `https://newsapi.org/v2/top-headlines?language=pt&q=&apiKey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarNoticias(data.articles);
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}

// Função para exibir as notícias na página
function mostrarNoticias(noticias) {
    const container = document.getElementById('noticias');
    container.innerHTML = '';

    noticias.forEach((noticia, index) => {
        const { title, description, url } = noticia;
        const noticiaElement = `
            <div class="noticia">
                <h2>${title}</h2>
                <p>${description}</p>
                <a href="${url}" target="_blank">Leia mais</a>
            </div>
        `;
        container.innerHTML += noticiaElement;
    });
}

// Chama a função de busca ao carregar a página
window.onload = () => {
    buscarNoticias();
};
