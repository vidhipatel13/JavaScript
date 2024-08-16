const getData = () =>{


    fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
    })
    
    .then((data)=>{
        console.log("data..",data);
        data.json().then((x)=>{
            console.log("x...",x);
        }).catch((err)=>{
            console.log(err);
        })

    }).catch((err)=>{
        console.log(err);
    })


}
//callback hell

getData()