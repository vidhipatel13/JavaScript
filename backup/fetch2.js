const addData = async()=>{


    const url = "https://node5.onrender.com/user/user"

    const userObj = {

        name: "ram",
        age: 13,
        email:"ram@gmail.com",
        isActive: true
    }

    console.log("json string....",JSON.stringify(userObj))

    //POST  ->BODY
    const res = await fetch(url,{

        method: "POST",
        body: JSON.stringify(userObj),
        headers:{
            'Content-Type': 'application/json'
        }

    })

    console.log(res)
    const data = await res.json()
    console.log("data...",data)
    
    
    
}