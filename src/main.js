import { ordemAtletas } from './data.js';

import data from './data/athletes/athletes.js';

const atletas = data.athletes //filtra atletas dentro do array

//menu esportes:
const esportes = atletas.map(modalidades => modalidades.sport) //filtra modalidade esportes dentro do array atletas

const esportesFiltrados = esportes.filter((esporte, index) => {
  return esportes.indexOf(esporte) === index
})

const esportesMenuArray = [...esportesFiltrados].sort() //converte 'seet' em array e coloca em ordem alfabetica

const esportesMenu = esportesMenuArray.map(esporte => `<option value="" selected disabled hidden>Esportes</option>
<option value="${esporte}">${esporte}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarEsporte = document.querySelector(".selecionar-esporte") //variável que linka com o html
selecionarEsporte.innerHTML = esportesMenu //joga a variável para o html


//menu de países
const país = atletas.map(países => países.team)

const paísesFiltrados = país.filter((países, index) => {
  return países.indexOf(países) === index
})

const paísesMenuArray = [...paísesFiltrados].sort() // converte o 'seet' para array e ordena em ordem alfabetica

const paísesMenu = paísesMenuArray.map(países =>  `<option value="" selected disabled hidden>Países</option>
<option value="${países}">${países}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarPaíses = document.querySelector(".selecionar-país")//variável que linka com o html
selecionarPaíses.innerHTML = paísesMenu //joga a variável para o html


// menu de categorias
const modalidade = atletas.map(estilo => estilo.event)
const modalidadesFiltradas = modalidade.filter((modalidade, index) =>{
  return modalidade.indexOf(modalidade) === index
})

const modalidadesMenuArray = [...modalidadesFiltradas].sort() //converte o 'seet' para array e ordena em ordem alfabetica

const modalidadesMenu = modalidadesMenuArray.map(modalid => `<option value="" selected disabled hidden>Categorias</option>
<option value="${modalid}">${modalid}</option> ` ) //laço que concatena cada variável dentro do html


const selecionarCategoria = document.querySelector(".selecionar-categoria")// variável que linka com html
selecionarCategoria.innerHTML = modalidadesMenu // joga variável para o html

//criando cards 

function dadosCards (array) {

  const itensAraay = array.map (item =>
    
    `<div class = "cards">
            <ul class="textoCards" style="listaStyle: none">
            <li><strong>Nome:</strong><span> ${item.name}</span></li>
            <li><strong>Gênero:</strong><span> ${item.gender}</span></li>
            <li><strong>Altura:</strong><span> ${item.height}</span></li>
            <li><strong>Peso: </strong><span> ${item.weight}</span></li>
            <li><strong>Esporte:</strong><span> ${item.sport}</span></li>
            <li><strong>País:</strong><span> ${item.team}</span></li>
            <li><strong>Sigla:</strong><span> ${item.noc}</span></li>
            <li><strong>Idade:</strong><span> ${item.age}</span></li>
            <li><strong>Categoria:</strong><span> ${item.event}</span></li>
            <li><strong>Medalha:</strong><span>${item.medal}</span></li>
            
            </ul>
        
    </div>`)


  const cardsContainer = document.querySelector(".card-container")
  cardsContainer.innerHTML = itensAraay.join("")

}

dadosCards(atletas)


const ordemAlfabetica = document.getElementById("selecionar-ordem");
ordemAlfabetica.addEventListener("change", () => {
  const atletasOrdem = ordemAtletas(atletas, ordemAlfabetica.value);
  dadosCards(atletasOrdem);
        
});
