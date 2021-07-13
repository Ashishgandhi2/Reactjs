let mobile = ["iphone", "oneplus","samsung", "vivo","oppo"];
console.log(mobile[1]);                         //Access the Elements of an Array
mobile[4]="nokia";                             // Changing an Array Element
console.log(mobile);
console.log(mobile.length);                     //The length Property
console.log(mobile[mobile.length-1]);           //Accessing the Last Array Element
console.log(mobile.push("oppo"));               //Adding Array Elements
console.log(mobile);                            //Access the Full Array
console.log(typeof(mobile));                    //How to Recognize an Array
console.log(Array.isArray(mobile));             // Check that is this array or not
console.log(mobile.pop());                      //Popping
console.log(mobile);                            //Access the elements
console.log(mobile.shift());                    //Shifting Element
console.log(mobile);                             //Access the elements
console.log(mobile.unshift("Lava"));            //unshift element means add new elements
console.log(mobile[2]);