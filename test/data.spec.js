import { ordemAtletas } from '../src/data.js';

const Aaron = {
  "name": "Aaron",
  "gender": "M",
  "sport": "Athletics",
  "team": "Canada",
  "event": "Athletics Men's 4 x 100 metres Relay",
  "medal": "Bronze"}

const Zoe = {
  "name": "Zoe",
  "gender": "F",
  "sport": "Rowing",
  "team": "Great Britain",
  "event": "Rowing Women's Coxed Eights",
  "medal": "Silver"}

const ordenar = [Aaron, Zoe];

describe('ordemAtletas', () => {

  it('deve ser uma função', () => {
    expect(typeof ordemAtletas).toBe("function");
  }); 

  it('ordenar de A-Z', () => {
    const resultado = ordemAtletas(ordenar, "AZ")
    expect(resultado[0].name).toBe('Aaron');
  });

  it('ordenar de Z-A', () => {
    const resultado = ordemAtletas(ordenar, "ZA")
    expect(resultado[0].name).toBe('Zoe');
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
