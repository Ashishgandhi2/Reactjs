// Task 1: replace alais with name
const a = [
  {name: 'first_name', alais: 'First Name', type: 'string'},
  {name: 'age', alais: 'Age', type: 'number'}
];
const b = [
  {first_name: 'John', age: 23},
  {first_name: 'Tom', age: 25}
];
function replaceNameToAlais(a, b) {
  const output = [];
 
  for (let object of b) {
    let newobject = {};
    let i = 0;
    for (key in object) {
      const newKey = a[i].alais;
      newobject[newKey] = object[key];
      i++;
    }
    output.push(newobject);
  }
  return output;
}
 
const c = replaceNameToAlais(a, b);
console.log(c);