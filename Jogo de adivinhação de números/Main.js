function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; 
}

let numeroAleatorio = gerarNumeroAleatorio(); 
let numeroDeTentativas = 0;
const numeroLimiteDeTentativas = 5;

function verificarPalpite(palpite) {
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        return "Digite um número válido entre 1 e 100"; 
    }
    return null; 
}

function exibirMensagem(msg) {
    document.getElementById("mensagem").innerText = msg; 
}

document.getElementById("submeterPalpite").addEventListener("click", function() {
    const palpiteDoUsuario = parseInt(document.getElementById("palpite").value); 


    const mensagemErro = verificarPalpite(palpiteDoUsuario);
    if (mensagemErro) {
        exibirMensagem(mensagemErro);
        return; 
    }


    if (palpiteDoUsuario === numeroAleatorio) {
        exibirMensagem("Parabéns! Você acertou!"); 
        return;
    }

    numeroDeTentativas++; 

   
    if (palpiteDoUsuario < numeroAleatorio) {
        exibirMensagem("O seu palpite é menor que o número."); 
    } else {
        exibirMensagem("O seu palpite é maior que o número."); 
    }


    if (numeroDeTentativas === numeroLimiteDeTentativas) {
        exibirMensagem("Você chegou no limite máximo de tentativas... O número era: " + numeroAleatorio); 

        setTimeout(() => {
            numeroAleatorio = gerarNumeroAleatorio(); 
            numeroDeTentativas = 0; 
            exibirMensagem("O jogo reiniciou! Tente adivinhar um novo número.");
        }, 3000);
    }
});
