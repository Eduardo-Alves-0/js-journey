let notas = [
    ["Aluno 1:",8, 7, 9, 6],
    ["Aluno 2:",5, 6, 7, 8],
    ["Aluno 3:",10, 9, 8, 7] 
]

notas.forEach(function(notas){
    console.log (notas)
})

notas.forEach(function(aluno) {
    let soma = aluno.slice(1).reduce(function(acumulador, nota) {
        return acumulador + nota;
    }, 0);

    let = media = soma / (aluno.length - 1)

    console.log (`Média do ${aluno[0]}: ${media}`)
});

/*
Primeiro:
    Eu crio uma matriz:
        let notas = [
            ["Aluno 1:",8, 7, 9, 6],
            ["Aluno 2:",5, 6, 7, 8],
            ["Aluno 3:",10, 9, 8, 7] 
        ]
Segundo:
    Eu percorro a matriz utilizando ForEach que itera sobre cada item da matriz:

        notas.forEach(function(notas){
            console.log (notas)
        })
Terceiro: Calculo a media dos alunos, novamente utilizo o método ForEach utilizo novamente uma função de callback que é chamada toda vez que a palavra aluno aparece durante as iterações.
Quarto: crio uma variavel chamada soma sobre essa variável eu aplico  os metodos slice e reduce. O método slice cria uma copia de parte de um array. Nesse caso ignorando o nome "aluno 1" e criando um novo array com as notas, sem alterar o array original. Já o reduce reduz todo os elementos de um array a um único valor, aplicando a função de acumulado em cada elemento do array.
        - acumulador: O valor acumulado que vai guardando o resultado da aplicação da função.
        - valorAtual: O valor do elemento atual do array no qual a função está sendo aplicada, Nesse caso o valor atual é Nota.
        - indice (opcional): O índice do elemento atual.
        - array (opcional): O próprio array no qual o reduce está sendo chamado.
        - valorInicial (opcional): O valor que o acumulador terá no início. Se não for fornecido, o acumulador começa com o primeiro valor do array e o loop começa no segundo elemento.
*/