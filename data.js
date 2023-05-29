export const ordemAtletas = (dados, selecionado) => {
  const copia = [...dados]
  if(selecionado === "AZ"){
    return ordemCrescente(copia)
  }
  else(selecionado === "ZA")
  return ordemDecrescente(copia)}

export const ordemCrescente = (dados) => dados.sort((atleta_a, atleta_b) => 
  atleta_a.name.localeCompare(atleta_b.name)
)

export const ordemDecrescente = (dados) => dados.sort((atleta_a, atleta_b) => 
  atleta_b.name.localeCompare(atleta_a.name)
)


export function filtroMedalhas(dados, medal){
  const filtrarMedalhas = dados.filter((item) => item["medal"] === medal);
  return filtrarMedalhas;
}


export function filtroGenero(dados, gender){
  const filtrarGenero = dados.filter((item) => item["gender"] === gender);
  return filtrarGenero;
}


export function filtroPaíses(dados, team){
  const filtrarPaíses = dados.filter((item)=> item ["team"] === team);
  return filtrarPaíses;
}


export function filtroEsportes(dados, sport){
  const filtrarEsporte = dados.filter((item)=> item["sport"] === sport);
  return filtrarEsporte;
}


export function filtroCategoria(dados, event) {
  const filtrarCategoria = dados.filter((item)=> item ["event"] === event);
  return filtrarCategoria;
}

export function calcularPorcentagem(tamanhoLista, tamanhoListaFiltrada) {
  return Math.round((tamanhoListaFiltrada*100)/tamanhoLista);
}