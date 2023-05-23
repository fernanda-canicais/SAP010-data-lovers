import { ordemAtletas, filtroMedalhas } from '../src/data.js';

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
    const medalhaEsperada = filtroMedalhas(arrayTest, "medal", "Bronze")
    expect (medalhaEsperada.length).toEqual(1);
    expect(medalhaEsperada).toEqual([arrayTest[0]]);
  });
});



/*it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
