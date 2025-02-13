//Script para interatividade na página
// Função que será executada quando a página carregar
window.onload = function() {
  // Exibe um alerta assim que a página for carregada
  alert("Olá! Obrigado por acessar nossa página. Estamos felizes em tê-lo por aqui!");
}

// Função para enviar a mensagem
function enviarMensagem(event) {
  // Impede o envio do formulário e a recarga da página
  event.preventDefault();

  // Coleta os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = document.getElementById("telefone").value;

  // Exibe as informações coletadas diretamente na página
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <strong>Mensagem enviada com sucesso!</strong><br><br>
    <strong>Nome:</strong> ${nome}<br>
    <strong>E-mail:</strong> ${email}<br>
    <strong>Mensagem:</strong> ${mensagem}<br>
    <strong>Telefone:</strong> ${telefone}<br>
    <br>
  `;

  // Após o envio da mensagem, espera 2 segundos e redireciona para a página inicial
  setTimeout(function() {
    location.href = 'index.html'; // Redireciona para a página inicial
  }, 2000); // Atraso de 2 segundos antes do redirecionamento
}