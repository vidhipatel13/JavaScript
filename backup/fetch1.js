const getApiData = async() => {

    const loader = document.getElementById('loader')
    loader.innerHTML ='loading....'


    const res = await fetch("https://node5.onrender.com/user/user", {
        method : "GET"
    })

    const data = await res.json()
    console.log(data)
    console.log(data.message)
    console.log(data.data)
    loader.innerHTML =""


    const tbody = document.getElementById('tbody')
    for (let i=0; i<data.data.length; i++)
    {
        const tr = document.createElement('tr')
        const idTD = document.createElement('td')
        const nameTD = document.createElement('td')
        const emailTD = document.createElement('td')
        const ageTD = document.createElement('td')
        const statusTD = document.createElement('td')
        const actionTD = document.createElement('td')


        idTD.innerHTML = data.data[i]._id
        nameTD.innerHTML = data.data[i]._name
        emailTD.innerHTML = data.data[i]._email
        ageTD.innerHTML = data.data[i]._age
        statusTD.innerHTML = data.data[i].isActive


        //button creation.....
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete"
        deleteButton.className = "btn btn-danger"
        actionTD.appendChild(deleteButton)




        //binding event to button

        deleteButton.addEventListener("click",async()=>{
           
            //alert("Delete button clicked " +data.data[i]._id) 
            const res1 = await fetch("https://node5.onrender.com/user/user/"+data.data[i]._id,{
                method:"DELETE"
            })

            console.log(res1)
           window.location.reload()
           
        })




        tr.appendChild(idTD)
        tr.appendChild(nameTD)
        tr.appendChild(emailTD)
        tr.appendChild(ageTD)
        tr.appendChild(statusTD)
        tr.appendChild(actionTD)
        tbody.appendChild(tr)


    }
}