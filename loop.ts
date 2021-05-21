const array1 = [1, 4, 9, 16];
let array2 = [ ];
for(let arr of array1){
   let a = arr*2;
array2.push(a);
}
console.log("array2",array2);
console.log(array2[1]);


const array3 = [3, 4, 5, -5, 0, 12];
let sum=0;

// iterating through each element of the array 
for(let arr of array3) {
   sum  = sum + arr;
}
console.log("Sum is:-",sum);




function E_mail(mail_id:string) { 
  
   console.log("Email Id: ",mail_id); 
   }
   
   let b="abc@gmail.com";
   E_mail(b);