const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sum); // retorna 6

/*************EXEMPPLO2***************/
const people = [
  {id: 5, name: 'Carla', age: 25, federativeUnit: 'MS'},
  {id: 81, name: 'Jennifer', age: 28, federativeUnit: 'SC'},
  {id: 25, name: 'Alex', age: 32, federativeUnit: 'SP'},
  {id: 52, name: 'Carlos', age: 25, federativeUnit: 'MG'},
  {id: 98, name: 'Andressa', age: 25, federativeUnit: 'PR'},
]

const agesFrequency = people.reduce((accumulator, {age}) => {
  accumulator[age] = accumulator[age] + 1 || 1; // colchetes para escrever expressao

  return accumulator;

}, {})

console.log(agesFrequency);