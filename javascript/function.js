function commas(input, currency)
  {

        let x = input.toLocaleString();
        
        
         if(currency==="as-ruppee")
         {
          console.log("₹" + " " +x);
         }
       
        else
          {
            console.log(`{cura} is not identify `);
          }
  }
     
    

let  a=16777;

commas(a,"as-ruppee");