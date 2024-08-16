const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const isActive = document.getElementById("active").checked;
  
    const user = {
      name: name,
      age: age,
      email: email,
      isActive: isActive,
    };
    //console.log(JSON.stringify(user));
    addData(user);
  };
  const addData = async (userObj) => {
    // const user = {
    //     name:"ram",
    //     age:23,
    //     email:"ram@gmail.com",
    //     isActive:true
    // }
    // console.log(JSON.stringify(user));
    //const url = "https://node5.onrender.com/user/user"
  
    const res = await fetch("https://node5.onrender.com/user/user", {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    //console.log("response....",res);
  
    const data = await res.json();
    console.log(data);
  
    
      var x = document.getElementById("toast");
      x.className = "show";
      var desc = document.getElementById("desc");
      desc.innerHTML = "Data Added Successfully";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 2000);
    
      setTimeout(function () {
          location.href = "../fetchdemo1.html";
      },3000)
      
  };