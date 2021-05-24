var array1 = [1, 4, 9, 16];
var array2 = [];
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var arr = array1_1[_i];
    var a = arr * 2;
    array2.push(a);
}
console.log("array2", array2);
console.log(array2[1]);
var array3 = [3, 4, 5, -5, 0, 12];
var sum = 0;
// iterating through each element of the array 
for (var _a = 0, array3_1 = array3; _a < array3_1.length; _a++) {
    var arr = array3_1[_a];
    sum = sum + arr;
}
console.log("Sum is:-", sum);
