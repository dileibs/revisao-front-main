var pessoa = {
  nome: "Wesley",
  sobrenome: "Willian",
  idade: 19,
  telefone: 13996581756,
};

pessoa.nomeCompleto = function () {
  return pessoa.nome + " " + pessoa.sobrenome;
};

pessoa.aniversario = function () {
  pessoa.idade++;
  return (
    "Parabéns, " +
    pessoa.nomeCompleto() +
    " agora você tem " +
    pessoa.idade +
    " anos"
  );
};

pessoa.validaTel = function () {
  if (pessoa.telefone !== 11) {
    return "Telefone incorreto.";
  }
  return "Seu telefone é: " + pessoa.telefone;
};

veiculo = {
  cor: "Verde",
  modelo: "Celta",
  ano: 2000,
  unicoDono: true,
  gas: false,
};

veiculo.validaSit = function () {
  if (veiculo.gas === true) {
    return "Este veiculo está autorizado a circular.";
  }
  return "Este veiculo não está autorizado a circular.";
};
