import { ordemAtletas, filtroMedalhas, filtroGenero, filtroPaíses,filtroEsportes, filtroCategoria, calcularPorcentagem } from './data.js';

import data from './data/athletes/athletes.js';

const atletas = data.athletes //busca atletas dentro do array
const porcentagem = document.querySelector(".porcentagem")


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
    
    `<div class="cards-atletas" id="cards-atletas">
         <div class="cards-flip">
              <div class ="card-frente">
                <ul class="textoCards1" style="listaStyle: none">
                <li><strong>Nome:</strong><span> ${item.name}</span></li>
                </ul>
              </div>    
              <div class = "card-verso">
                      <ul class="textoCards" style="listaStyle: none">
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
                
              </div>
          </div>    
      </div>
    `
    
  )




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

  const percentual = calcularPorcentagem(atletas.length, filtro.length);
  porcentagem.innerHTML= "Essa categoria contém " + percentual + "% das medalhas nas Olimpíadas";

});

const ordemGenero = document.getElementById("selecionar-genero");
ordemGenero.addEventListener("change", () => {
  const generoFiltro = filtroGenero(atletas, ordemGenero.value);
  dadosCards(generoFiltro);

  const percentual = calcularPorcentagem(atletas.length, generoFiltro.length);
  porcentagem.innerHTML= "Esse gênero contém " + percentual + "% nas Olimpíadas";

});


const ordemPaíses = document.getElementById("selecionar-país");
ordemPaíses.addEventListener("change", () => {
  const paísesFiltro = filtroPaíses(atletas, ordemPaíses.value);
  dadosCards(paísesFiltro);

  const percentual = calcularPorcentagem(atletas.length, paísesFiltro.length);
  porcentagem.innerHTML= "Esse país contém " + percentual + "% dos atletas nas Olimpíadas";

});

const ordemEsportes = document.getElementById("selecionar-esporte");
ordemEsportes.addEventListener("change",() => {
  const esportesFiltro = filtroEsportes(atletas, ordemEsportes.value);
  dadosCards(esportesFiltro);

  const percentual = calcularPorcentagem(atletas.length, ordemEsportes.length);
  porcentagem.innerHTML= "Esse esporte contém " + percentual + "% das Olimpíadas";
});

const ordemCategoria = document.getElementById("selecionar-categoria");
ordemCategoria.addEventListener("change", () => {
  const categoriaFiltro = filtroCategoria(atletas, ordemCategoria.value);
  dadosCards(categoriaFiltro);
 
  const percentual = calcularPorcentagem(atletas.length, categoriaFiltro.length);
  porcentagem.innerHTML= "Essa categoria contém " + percentual + "% das Olimpíadas";

});