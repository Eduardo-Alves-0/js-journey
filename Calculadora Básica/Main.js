function calcular() {
    let primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value);
    let segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    let resultado;
    let operacao = parseInt(document.getElementById("operacao").value);

    switch (operacao) {
        case 1:
            resultado = primeiroNumero + segundoNumero;
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
            break;

        case 2:
            resultado = primeiroNumero - segundoNumero;
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
            break;

        case 3:
            resultado = primeiroNumero * segundoNumero;
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
            break;

        case 4:
            if (segundoNumero === 0) {
                document.getElementById("resultado").innerText = "Divisão por zero não pode.";
            } else {
                resultado = primeiroNumero / segundoNumero;
                document.getElementById("resultado").innerText = "Resultado: " + resultado;
            }
            break;

        default:
            document.getElementById("resultado").innerText = "Por favor, escolha uma operação válida.";
            break;
    }
}