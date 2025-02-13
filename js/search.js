//Script JavaScript para buscar artigos

// Função que realiza a busca de artigos com base no texto digitado no campo de pesquisa
function searchArticles() {
  // Obtém o valor digitado no campo de busca e converte para minúsculas
  const input = document.getElementById('searchInput').value.toLowerCase();
  // Seleciona todos os itens da lista de artigos
  const articles = document.querySelectorAll('#articleList li');

  // Loop para verificar cada item da lista de artigos
  articles.forEach(article => {
    // Verifica se o texto do artigo contém o valor digitado no campo de busca
    if (article.textContent.toLowerCase().includes(input)) {
      article.style.display = ''; // Exibe o artigo
    } else {
      article.style.display = 'none'; // Oculta o artigo
    }
  });
}