const pets = [
  {name: 'Panda', age: 2, gender: 'female', type: 'dog'},
  {name: 'Chewie', age: 12, gender: 'female', type: 'dog'},
  {name: 'Dolores', age: 4, gender: 'female', type: 'cat'},
  {name: 'Nene', age: 2, gender: 'male', type: 'cat'},
  {name: 'Vick', age: 10, gender: 'female', type: 'dog'},
];

const getDogs = ({type}) => type === 'dog';
const convertToHumanAge = ({name, age}) => ({
  name,
  convertedAge: age * 7,
})

console.log(
  pets
    .filter(getDogs)
    .map(convertToHumanAge)
);