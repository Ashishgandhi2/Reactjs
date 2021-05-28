for (i = 0; i < 5; i++) {
    console.log(i);
  }

const array3 = [3, 4, 5, -5, 0, 12];
let sum=0;

// iterating through each element of the array 
for(let arr of array3) {
   sum  = sum + arr;
}
console.log("Sum is:-",sum);

let array = [10, 20, 30, 40];
for (var index in array) {
    console.log(index); // prints indexes: 0, 1, 2, 3
  
    console.log(array[index]); 
  }