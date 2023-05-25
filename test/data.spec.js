import { filtroMedalhas, ordemAtletas, filtroGenero, filtroPaíses, filtroEsportes, filtroCategoria, calcularPorcentagem } from '../src/data.js';

const arrayTest = [

  {
    "name": "Aaron",
    "gender": "M",
    "sport": "Athletics",
    "team": "Canada",
    "event": "Athletics Men's 4 x 100 metres Relay",
    "medal": "Bronze"
  },

  {
    "name": "Zoe",
    "gender": "F",
    "sport": "Rowing",
    "team": "Great Britain",
    "event": "Rowing Women's Coxed Eights",
    "medal": "Silver"
  },

  {
    "name": "Ahmad Abughaush",
    "gender": "M",
    "sport": "Taekwondo",
    "team": "Jordan",
    "event": "Taekwondo Men's Featherweight",
    "medal": "Gold"
  },

  {
    "name": "Chantal Achterberg",
    "gender": "F",
    "sport": "Rowing",
    "team": "Netherlands",
    "event": "Rowing Women's Quadruple Sculls",
    "medal": "Silver"
  }
];


describe('ordemAtletas', () => {

  it('deve ser uma função', () => {
    expect(typeof ordemAtletas).toBe("function");
  }); 

  it('ordenar de A-Z', () => {
    const resultado = ordemAtletas(arrayTest, "AZ")
    expect(resultado.length).toEqual(4);
    expect(resultado).toEqual([arrayTest[0], arrayTest[2], arrayTest[3], arrayTest[1]]);
  });

  it('ordenar de Z-A', () => {
    const resultado = ordemAtletas(arrayTest, "ZA")
    expect(resultado.length).toEqual(4);
    expect(resultado).toEqual([arrayTest[1], arrayTest[3], arrayTest[2], arrayTest[0]]);
    
  });
});

 
describe('filtroMedalhas', () => {

  it('é uma função', () => {
    expect(typeof filtroMedalhas).toBe("function");
  });

  it('filtrar por medalhas', () => {
    const medalhaEsperada = filtroMedalhas(arrayTest, "Bronze")
    expect (medalhaEsperada.length).toEqual(1);
    expect(medalhaEsperada).toEqual([arrayTest[0]]);
  });
});

describe ('filtroGenero', () => {

  it('é uma função', () => {
    expect(typeof filtroGenero).toBe("function");
  });

  it('filtrar por genero', () => {
    const generoEsperado = filtroGenero(arrayTest, "F")
    expect (generoEsperado.length).toEqual(2);
    expect(generoEsperado).toEqual([arrayTest[1], arrayTest[3]]);

  });
});

describe ('filtroPaíses', () => {

  it('é uma função', ()=> {
    expect(typeof filtroPaíses).toBe("function");
  });

  it('filtrar por país', () => {
    const paísEsperado = filtroPaíses(arrayTest, "Netherlands")
    expect (paísEsperado.length).toEqual(1);
    expect(paísEsperado).toEqual([arrayTest[3]]);
  });
});
 
describe ('filtroEsportes', () => {

  it ('é uma função', () => {
    expect(typeof filtroEsportes).toBe("function");
  });

  it('filtrar por esporte', () => {
    const esporteEsperado = filtroEsportes(arrayTest,"Taekwondo" )
    expect (esporteEsperado.length).toEqual(1);
    expect(esporteEsperado).toEqual([arrayTest[2]]);
  });
});

describe ('filtroCategoria', () => {

  it ('é uma função', () => {
    expect(typeof filtroCategoria).toBe("function");
  });

  it('filtrar por categoria', () => {
    const categoriaEsperada = filtroCategoria(arrayTest,"Rowing Women's Quadruple Sculls")
    expect (categoriaEsperada.length).toEqual(1);
    expect(categoriaEsperada).toEqual([arrayTest[3]]);
  });
});

describe ('calcularPorcentagem', () => {

  it ('é uma função', () => {
    expect(typeof calcularPorcentagem).toBe("function");
  });
  
  it('calcular média de medalhas de prata', () => {
    const media = calcularPorcentagem(arrayTest.length, 2);
    expect(media).toEqual(50);
  });
});



