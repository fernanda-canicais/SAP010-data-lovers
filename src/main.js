import { ordemAtletas, filtroMedalhas, filtroGenero } from './data.js';

import data from './data/athletes/athletes.js';

const atletas = data.athletes //busca atletas dentro do array


//menu esportes:
const esportes = atletas.map(modalidades => modalidades.sport) //Método que transforma o objeto modalidade esportes dentro do array atletas e cria uma nova array.

const esportesFiltrados = esportes.filter((esporte, indice, novoArray) => { //filter para filtrar os elementos que passam na condição desejada.
  return novoArray.indexOf(esporte) === indice //indexOf verifica se o elemento esporte é igual ao novo indice para descartar duplicados.
})

const esportesMenu = esportesFiltrados.sort().map(esporte => `<option value="" selected disabled hidden>Esportes</option>
<option value="${esporte}">${esporte}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarEsporte = document.querySelector(".selecionar-esporte") //variável que linka com o html
selecionarEsporte.innerHTML = esportesMenu.join(" ") //joga a variável para o html


//menu de países
const país = atletas.map(países => países.team)

const paísesFiltrados = país.filter((países, indice, novoArray) => {
  return novoArray.indexOf(países) === indice
})

const paísesMenu = paísesFiltrados.sort().map(países =>  `<option value="" selected disabled hidden>Países</option>
<option value="${países}">${países}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarPais = document.querySelector(".selecionar-país")//variável que linka com o html
selecionarPais.innerHTML = paísesMenu.join(" ")//joga a variável para o html
 

// menu de categorias
const modalidade = atletas.map(estilo => estilo.event)

const modalidadesFiltradas = modalidade.filter((modalidade, indice, novoArray) => {
  return novoArray.indexOf(modalidade) === indice
})

const modalidadesMenu = modalidadesFiltradas.sort().map(modalidade => `<option value="" selected disabled hidden>Categorias</option>
<option value="${modalidade}">${modalidade}</option> ` ) //laço que concatena cada variável dentro do html

const selecionarCategoria = document.querySelector(".selecionar-categoria")// variável que linka com html
selecionarCategoria.innerHTML = modalidadesMenu.join(" ") // joga variável para o html

//criando cards 

function dadosCards (array) {
  const itensArray = array.map (item =>
    
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
  cardsContainer.innerHTML = itensArray.join("")
}

dadosCards(atletas)

const ordemAlfabetica = document.getElementById("selecionar-ordem");
ordemAlfabetica.addEventListener("change", () => {
  const atletasOrdem = ordemAtletas(atletas, ordemAlfabetica.value);
  dadosCards(atletasOrdem);
        
});

const ordemMedalhas = document.getElementById("selecionar-medalhas");
ordemMedalhas.addEventListener("change", () => {
  const filtro = filtroMedalhas(atletas, ordemMedalhas.value);
  dadosCards(filtro);
});

const ordemGenero = document.getElementById("selecionar-genero");
ordemGenero.addEventListener("change", () => {
  const generoFiltro = filtroGenero(atletas, ordemGenero.value);
  dadosCards(generoFiltro);
});