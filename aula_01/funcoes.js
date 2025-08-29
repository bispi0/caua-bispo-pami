let n1 = 2;
let n2 = 5;
//Pascal Case = NomeVariavel (primeira letra da palavra
// é sempre maiscula)
// Camel Case = nomeVariavel( primeira letra da palavra é
// minuscula e o restante começa com maiscula)
// Kebab Case = nome-variavel (tanto faz se começa com
// maiscula ou minuscula, o importante é separar por hifen)
// Snake Case = nome_variavel (tanto faz se começa com 
// maiscula ou minuscula, o importante é separar por underline)

function Soma () {
    console.log (5 + 14);
}
Soma();

function SomaComParametro(v1, v2) {
    let resultado = v1 + v2;
    return resultado;
}
console.log(SomaComParametro(n1, n2));