const fetchData = async () => {

    const url ="https://reqres.in/api/users?page=2"
    const res = await fetch(url,{
        method:"GET"
    })
    const data = await res.json();
    console.log(data.data);

    const tbody = document.getElementById("tbody");
    for(let i=0;i<data.data.length;i++){
        const tr = document.createElement("tr");
        const idTd = document.createElement("td");
        idTd.innerHTML = data.data[i].id;
        tr.appendChild(idTd);
        const nameTd = document.createElement("td");
        nameTd.innerHTML = data.data[i].first_name;
        tr.appendChild(nameTd);

        const lastNameTd = document.createElement("td");
        lastNameTd.innerHTML = data.data[i].last_name;
        tr.appendChild(lastNameTd);


        const emailTd = document.createElement("td");
        emailTd.innerHTML = data.data[i].email;
        tr.appendChild(emailTd);

        const avatarTd = document.createElement("td");
        const avatarImg = document.createElement("img");
        avatarImg.src = data.data[i].avatar;
        avatarImg.style.width = "50px";
        avatarTd.appendChild(avatarImg);   
        tr.appendChild(avatarTd); 



       tbody.appendChild(tr);     
    }




}
fetchData();