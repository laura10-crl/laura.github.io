// Array com as perguntas, respostas e a resposta correta
let perguntas = [
  {
    pergunta: "Quem foi Jesus?",
    respostas: ["O Filho de Deus", "Um grande profeta", "Um sábio filósofo"],
    correta: "O Filho de Deus"
  },
  {
    pergunta: "Onde Jesus nasceu?",
    respostas: ["Nazareth", "Belém", "Jerusalém"],
    correta: "Belém"
  },
  {
    pergunta: "Quem foi o discípulo que negou Jesus três vezes?",
    respostas: ["Pedro", "João", "Tiago"],
    correta: "Pedro"
  },
  {
    pergunta: "Qual milagre Jesus realizou ao alimentar uma grande multidão?",
    respostas: ["Curou os cegos", "Fez multiplicar pães e peixes", "Andou sobre as águas"],
    correta: "Fez multiplicar pães e peixes"
  },
  {
    pergunta: "O que Jesus fez na última ceia com seus discípulos?",
    respostas: ["Lavou os pés dos discípulos", "Multiplicou os pães", "Curou os doentes"],
    correta: "Lavou os pés dos discípulos"
  }
];

// Variáveis para controlar o progresso do quiz e a pontuação
let perguntaAtual = 0;
let pontuacao = 0;

// Função para carregar a pergunta e as opções de resposta
function carregarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  // Exibe a pergunta atual no HTML
  document.getElementById('pergunta').textContent = pergunta.pergunta;

  // Atualiza os botões com as respostas
  const botoes = document.querySelectorAll('#respostas button');
  botoes[0].textContent = pergunta.respostas[0];
  botoes[1].textContent = pergunta.respostas[1];
  botoes[2].textContent = pergunta.respostas[2];
}

// Função que é chamada quando o usuário escolhe uma resposta
function responder(opcao) {
  const pergunta = perguntas[perguntaAtual];
  const botoes = document.querySelectorAll('#respostas button');
  let respostaEscolhida = '';

  // Verifica qual botão foi clicado para pegar a resposta escolhida
  if (opcao === 'opcao1') {
    respostaEscolhida = botoes[0].textContent;
  } else if (opcao === 'opcao2') {
    respostaEscolhida = botoes[1].textContent;
  } else if (opcao === 'opcao3') {
    respostaEscolhida = botoes[2].textContent;
  }

  // Verifica se a resposta escolhida está correta e atualiza a pontuação
  let feedback = '';
  if (respostaEscolhida === pergunta.correta) {
    pontuacao++;
    feedback = 'Resposta Correta!';
  } else {
    feedback = 'Resposta Errada!';
  }

  // Exibe o feedback e a pontuação atual
  document.getElementById('feedback').textContent = feedback;
  document.getElementById('pontuacao').textContent = pontuacao;

  // Incrementa a pergunta atual
  perguntaAtual++;

  // Verifica se ainda há perguntas, caso contrário, exibe a pontuação final
  if (perguntaAtual < perguntas.length) {
    setTimeout(carregarPergunta, 1000); // Carrega a próxima pergunta após 1 segundo
  } else {
    setTimeout(function() {
      // Exibe o resultado final após terminar o quiz
      document.getElementById('feedback').textContent = `Fim do quiz! Sua pontuação final é ${pontuacao}.`;
    }, 1000);
  }
}

// Carregar a primeira pergunta ao abrir a página
carregarPergunta();
