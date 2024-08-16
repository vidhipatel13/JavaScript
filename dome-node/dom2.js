var users = [
    {id: 1, name: 'jay', age: 18},
    {id: 2, name: 'ram', age: 20},
    {id: 3, name: 'shyam', age: 22},
]

function loadtable(){

    var tbody = document.getElementById("tbody");
    users.map((user)=>{

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerHTML = user.id;
        td1.className = "td"
        var td2 = document.createElement("td")
        td2.innerHTML = user.name;
        var td3 = document.createElement("td")
        td3.innerHTML = user.age;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    })

    var btn = document.getElementById("btn");
    btn.disabled = true;

}
