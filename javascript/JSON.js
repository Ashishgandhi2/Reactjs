let text = '{"employees":[' +
'{"firstName":"Ashish","lastName":"Gandhi" },' +
'{"firstName":"Ashutosh","lastName":"Sharma" },' +
'{"firstName":"Sandeep","lastName":"Sukhija" }]}';

obj = JSON.parse(text);
console.log(obj.employees[02]);