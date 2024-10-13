function converterMoeda() {
    // Recebe os valores do select e do input
    let valorQueDesejaConverter = parseFloat(document.getElementById("valor").value);
    let moedaDesejada = parseInt(document.getElementById("moeda").value);
    let resultado = document.getElementById("resultado");

    // Valida o valor inserido
    if (isNaN(valorQueDesejaConverter) || valorQueDesejaConverter <= 0) {
        resultado.textContent = "Por favor, insira um valor válido.";
        return;
    }

    // Faz o processamento do valor, e da moeada escolhida
    let conversao = 0;
    let simboloMoeda = '';

    switch (moedaDesejada) {
        case 1: // Dólar (USD)
            conversao = valorQueDesejaConverter / 5,61;
            simboloMoeda = '$';
            break;
        case 2: // Euro (EUR)
            conversao = valorQueDesejaConverter / 5.60;
            simboloMoeda = '€';
            break;
        case 3: // Libra Esterlina (GBP)
            conversao = valorQueDesejaConverter / 6.30;
            simboloMoeda = '£';
            break;
        case 4: // Iene Japonês (JPY)
            conversao = valorQueDesejaConverter / 0.038;
            simboloMoeda = '¥';
            break;
        default:
            resultado.textContent = "Opção inválida.";
            return;
    }

    // Mostra o resultado da conversão
    resultado.textContent = `R$ ${valorQueDesejaConverter.toFixed(2)} equivale a ${simboloMoeda} ${conversao.toFixed(2)}.`;
}

