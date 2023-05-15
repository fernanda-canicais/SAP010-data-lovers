// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const ordemAtletas = (dados, selecionado) => {
  if(selecionado === "AZ"){
    return ordemCrescente(dados);
  }
  else
    return ordemDecrescente(dados);
  }

  const ordemCrescente = (dados) => dados.sort((atleta_a, atleta_b) => {
    return atleta_a.name.localeCompare(atleta_b.name, 'pt-BR');
  });

  const ordemDecrescente = (dados) => dados.sort((atleta_a, atleta_b) => {
    return atleta_b.name.localeCompare(atleta_a.name, 'pt-BR');
  });
  


