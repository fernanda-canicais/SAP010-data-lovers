// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const ordemAtletas = (dados, selecionado) => {
  if(selecionado === "AZ"){
    return ordemCrescente(dados)
  }
  else(selecionado === "ZA")
  return ordemDecrescente(dados)}

const ordemCrescente = (dados) => dados.sort((atleta_a, atleta_b) => 
  atleta_a.name.localeCompare(atleta_b.name)
)

const ordemDecrescente = (dados) => dados.sort((atleta_a, atleta_b) => 
  atleta_b.name.localeCompare(atleta_a.name)
)
  


