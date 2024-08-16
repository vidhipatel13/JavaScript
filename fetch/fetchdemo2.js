const fetchUserData = async () => {

    const res = await fetch("https://node5.onrender.com/user/user", { method: "GET" });
    const data = await res.json();
    console.log(data.message);
    console.log(data.data);

    //table body...
    const tableBody = document.getElementById("tableBody");
    for(let i=0;i<data.data.length;i++){

        const tr = document.createElement("tr");
        const idTd = document.createElement("td");
        idTd.innerHTML = data.data[i]._id;
        tr.appendChild(idTd);
        const nameTd = document.createElement("td");
        nameTd.innerHTML = data.data[i].name;
        tr.appendChild(nameTd);
        const emailTd = document.createElement("td");
        emailTd.innerHTML = data.data[i].email;
        tr.appendChild(emailTd);
        const ageTd = document.createElement("td");
        ageTd.innerHTML = data.data[i].age;
        tr.appendChild(ageTd);
        const isActiveTd = document.createElement("td");
        isActiveTd.innerHTML = data.data[i].isActive;
        tr.appendChild(isActiveTd);
      tableBody.appendChild(tr);
    }





}
fetchUserData();