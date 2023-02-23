var pessoa = {nome: "Wesley", sobrenome: "Willian", idade: 19};

pessoa.nomeCompleto = function() {
    return pessoa.nome + ' ' + pessoa.sobrenome;
}

pessoa.aniversario = function() {
    pessoa.idade++;
    return 'Parabéns, ' + pessoa.nomeCompleto();
}
