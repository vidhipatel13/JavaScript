function loadData() {
    var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World!";
    var bodytag = document.getElementsByTagName("body")[0];
  
    bodytag.appendChild(h1);
  }
  
  var student = {
    name: "amit",
    age: 24,
  };
  
  function loadStudentData() {
    var div = document.getElementById("student");
    var h1 = document.createElement("h1");
    h1.innerHTML = student.name;
    var h2 = document.createElement("h2");
    h2.innerHTML = student.age;
    div.appendChild(h1);
    div.appendChild(h2);
  }
  var employees = [
    {
      id: 1,
      name: "steve",
      avatar:
        "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*",
    },
    {
      id: 2,
      name: "musk",
      avatar:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
    },
  ];
  
  function loadEmployeeData() {
    var div = document.getElementById("employee");
  
    for (let i = 0; i < employees.length; i++) {
      var ul = document.createElement("ul");
      var idLi = document.createElement("li");
      var nameLi = document.createElement("li");
  
      idLi.innerHTML = employees[i].id;
      nameLi.innerHTML = employees[i].name;
  
      ul.appendChild(idLi);
      ul.appendChild(nameLi);
  
      div.appendChild(ul);
    }
  }
  
  function loadEmployeeInTable() {
    var tbody = document.getElementById("empbody");
    employees.forEach((emp) => {
      var tr = document.createElement("tr");
      var tdId = document.createElement("td");
      var tdName = document.createElement("td");
      var tdImage = document.createElement("td");
      var img = document.createElement("img");
  
      tdId.innerHTML = emp.id;
      tdName.innerHTML = emp.name;
      img.src = emp.avatar;
      img.width = 100;
  
      tdImage.appendChild(img);
      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdImage);
      tbody.appendChild(tr);
    });
  }