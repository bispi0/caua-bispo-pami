// cidades.ts
var cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];
function listarCidades(lista) {
    lista.forEach(function (cidade) { return console.log(cidade); });
}
listarCidades(cidades);
