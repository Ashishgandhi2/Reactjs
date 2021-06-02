var person = {
    firstName: "Ashish",
    lastName : "Gandhi",
    id       : 5658,
    fullName : function() {
      console.log (this.firstName + " " + this.lastName);
    }
   
  };