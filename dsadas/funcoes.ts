function saudacao(nome: string): string {
    return 'Olá, ${nome}';
}

console.log(saudacao('leandro'));


interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

function exibirUsuario(usuario: Usuario): void{
    console.log('Nome: ${usuario.nome}');
    console.log('Idade: ${usuario.idade}');
}

exibirUsuario({ nome: 'Marcos', idade: 22 });

function listarNomes(nome: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);
