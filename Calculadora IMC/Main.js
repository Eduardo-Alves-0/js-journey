// Seleciona os elementos do DOM
const calcularBtn = document.getElementById("calcular");
const resultadoElement = document.getElementById("resultado");
const nomeInput = document.getElementById("nome");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const sexoInput = document.getElementById("sexo");

// Função para coletar e validar os dados
function coletarDados() {
  const nome = nomeInput.value.trim();
  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);
  const sexo = sexoInput.value.trim();

  if (!nome || altura <= 0 || peso <= 0 || !sexo) {
    alert("Por favor, preencha todos os campos");
    return null;
  }

  return { nome, altura, peso, sexo };
}

// Função para calcular o IMC
function calcularIMC(dados) {
  const imc = (dados.peso / (dados.altura * dados.altura)).toFixed(2);
  resultadoElement.textContent = `IMC: ${imc}`;
}

// Adiciona evento de clique ao botão calcular
calcularBtn.addEventListener("click", () => {
  const dados = coletarDados();
  if (dados) {
    calcularIMC(dados);
  }
});