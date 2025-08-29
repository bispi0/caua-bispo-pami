// Comentario
// Java script é uma linguagem fracamente tipada!
var texto = "ola" // aspas duplas contem sempre uma string
let texto2 = "Mundo"; 
const texto3 = "!" // aspas simples também serve para string!
console.log(texto, texto2 + texto3)
// virgula concatena com espaco, enquanto o sinal de + deixa tudo junto


texto = 'Hello'
let msg = `${texto} ${texto2} ${texto3}`
console.log(msg)
// também


// texto3 = "teste"
// O exemplo acima mostra que é impossivel reatribuir um novo valor
// a uma constante 

let numero = 4
console.log(typeof numero)

let obj = {nome: "Cauã", idade: 16}
console.log(
    "nome da pessoa", obj.nome,
    "| idade do meliante:", obj.idade
    )
console.log (typeof obj)
// objeto sempre é um elemento chave/valor

let arr = ['Cauã', 'M', 'A', 'Bispo']
console.log(arr[0], arr[3])
console.log(typeof arr)