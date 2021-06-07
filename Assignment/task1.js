const a = [
    {name: 'first_name', alais: 'First Name', type: 'string'},
    {name: 'age', alais: 'Age', type: 'number'}
  ];
  const b = [
    {first_name: 'John', age: 23},
    {first_name: 'Tom', age: 25}
  ];
let c = b.map(function(obj) {
   console.log(obj);
    obj[a[0].alais] = obj['first_name'];      obj[a[1].alais] = obj['age']; 
    delete obj['first_name']; delete obj['age'];
    return obj;
});
console.log(c);