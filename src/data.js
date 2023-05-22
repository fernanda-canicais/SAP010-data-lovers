// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

//Ordenar de A-Z e Z-A
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

// Filtrar por Medalhas
export function filtroMedalhas(dados, medal){
  const filtrarMedalhas = dados.filter((item) => item["medal"] === medal);
  return filtrarMedalhas;
}

// Filtrar por Genero
export function filtroGenero(dados, gender){
  const filtrarGenero = dados.filter((item) => item["gender"] === gender);
  return filtrarGenero;
}

