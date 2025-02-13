// Função para calcular operações básicas (soma, subtração, multiplicação, divisão)
function calcular() {
    // Obtém os valores de num1, num2 e a operação selecionada no HTML
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado;

    // Verifica se os valores inseridos são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos!";  // Caso algum valor não seja um número válido
    } else {
        // Realiza a operação matemática selecionada
        if (operacao === "soma") {
            resultado = num1 + num2;
        } else if (operacao === "subtracao") {
            resultado = num1 - num2;
        } else if (operacao === "multiplicacao") {
            resultado = num1 * num2;
        } else if (operacao === "divisao") {
            // Verifica se o divisor não é zero
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: Divisão por zero!";  // Evita divisão por zero
            }
        } else {
            resultado = "Operação inválida!";  // Caso a operação não seja reconhecida
        }
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

// Função para calcular o IMC (Índice de Massa Corporal)
function calcularIMC() {
    // Obtém os valores de peso e altura inseridos no HTML
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultadoIMC = "";

    // Verifica se o peso ou a altura não são números válidos ou se os valores são menores ou iguais a zero
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoIMC = "Por favor, insira valores válidos para peso e altura!";
    } else {
        // Calcula o IMC com a fórmula: IMC = peso / (altura * altura)
        let imc = peso / (altura * altura);

        // Classificação de acordo com o valor do IMC
        let classificacao;
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        // Exibe o resultado com o IMC calculado e a classificação
        resultadoIMC = `IMC: ${imc.toFixed(2)} (${classificacao})`;
    }

    // Exibe o resultado na página
    document.getElementById('resultado-imc').textContent = resultadoIMC;
}

// Função para conversão de unidades (Celsius para Fahrenheit, metros para centímetros, quilos para libras)
function converter() {
    // Obtém o valor inserido no campo de conversão e a unidade selecionada
    let valor = parseFloat(document.getElementById('valor').value);
    let conversao = document.getElementById('conversao').value;
    let resultado = "";

    // Verifica se o valor inserido é válido
    if (isNaN(valor)) {
        resultado = "Por favor, insira um valor numérico válido!";
    } else {
        // Realiza a conversão conforme a unidade selecionada
        if (conversao === 'Celsius-Fahrenheit') {
            resultado = (valor * 9/5) + 32;  // Converte Celsius para Fahrenheit
        } else if (conversao === 'metros-centimetros') {
            resultado = valor * 100;  // Converte metros para centímetros
        } else if (conversao === 'quilos-libras') {
            resultado = valor * 2.20462;  // Converte quilos para libras
        }
    }

    // Exibe o resultado na página
    document.getElementById('resultado-conversao').textContent = `Resultado: ${resultado}`;
}

// Função para sortear um número entre 0 e 100 e permitir que o usuário tente adivinhar
let numeroSorteado = Math.floor(Math.random() * 100)+1; // Sorteia o número entre 0 e 100
let tentativas = 0;  // Contador de tentativas

function adivinhar() {
    // Obtém o valor inserido pelo usuário no campo de chute
    let chute = parseInt(document.getElementById('chute').value);
    let resultadoJogo = "";

    // Verifica se o chute inserido é um número válido
    if (isNaN(chute)) {
        resultadoJogo = "Por favor, insira um número válido!";
    } else {
        tentativas++;  // Incrementa a contagem de tentativas

        // Verifica se o chute foi correto, maior ou menor que o número sorteado
        if (chute === numeroSorteado) {
            resultadoJogo = `Parabéns! Você acertou em ${tentativas} tentativas.`;
            tentativas = 0; // Reseta a contagem de tentativas
            numeroSorteado = Math.floor(Math.random() * 100) + 1; // Sorteia um novo número
        } else if (chute < numeroSorteado) {
            resultadoJogo = "Tente um número maior!";  // Sugere tentar um número maior
        } else {
            resultadoJogo = "Tente um número menor!";  // Sugere tentar um número menor
        }
    }

    // Exibe o resultado do jogo (mensagem de acerto ou dica)
    document.getElementById('resultado-jogo').textContent = resultadoJogo;
}
