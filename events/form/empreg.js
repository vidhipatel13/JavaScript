const regEmployee = (event) => {
    console.log(event);
    event.preventDefault();
    console.log("regEmployee() called");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    if (name == "") {
      //alert("Name is required");
      document.getElementById("namerr").innerHTML = "Name is required";
    }
    if (email == "") {
      //alert("Email is required");
      document.getElementById("emailerr").innerHTML = "Email is required";
    } else {
      document.getElementById("namerr").innerHTML = "";
      document.getElementById("emailerr").innerHTML = "";
      console.log(name);
      console.log(email);
    }
  };
  
  
  const agevalidation = (event) => {
  
      var age = document.getElementById("age").value;
      if(age<=18){
          document.getElementById("ageerr").innerHTML = "Age should be greater than 18";
      }
      else{
          document.getElementById("ageerr").innerHTML = "";
      }
  
  }
  