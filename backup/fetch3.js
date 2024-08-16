const addData = async(userObj)=> {

    const url ="https://node5.onrender.com/user/user"
    // const userObj = {
    //     name:"ram",
    //     age:23,
    //     email:"ram@gmail.com",
    //     isActive:true
    // }

    console.log("json string...", JSON.stringify(userObj))
    //POST -> Body

    const res = await fetch(url, {
        method : "POST",
        body: JSON.stringify(userObj),
        headers:{
            'Content-Type': 'application/json'
        }

    })
    console.log(res)
    const data = await res.json()
    console.log('data...',data)


}

function handleSubmit(event){

    event.preventDefault()
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const isActive = document.getElementById('isActive').value

    const userObj ={
        name:name,
        age:age,
        email:email,
        isActive: isActive =='true'?true:false
    }
    addData(userObj)
}