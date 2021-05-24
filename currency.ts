function commas(input, currency ?: "as-ruppee")
{

        let x = input.toLocaleString();
        
        
         if(currency==="as-ruppee"){
          console.log("₹" + " " +x);
        }
       
        else
          {
            console.log(`{currency} is not identify `);
          }
      }
    
    

let  a=123000;

commas(a,"as-ruppee");