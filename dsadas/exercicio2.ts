// cidades.ts
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];

function listarCidades(lista: string[]): void {
  lista.forEach(cidade => console.log(cidade));
}

listarCidades(cidades);