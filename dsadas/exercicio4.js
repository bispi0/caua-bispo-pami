// Criando um objeto do tipo Livro
var livroExemplo = {
    titulo: 'A Jornada do Código',
    autor: 'Ana Dev',
    anoPublicacao: 2022
};
// Função que exibe as informações do livro
function exibirLivro(livro) {
    console.log("\uD83D\uDCD6 T\u00EDtulo: ".concat(livro.titulo));
    console.log("\u270D\uFE0F Autor: ".concat(livro.autor));
    console.log("\uD83D\uDCC5 Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
}
// Chamando a função
exibirLivro(livroExemplo);
