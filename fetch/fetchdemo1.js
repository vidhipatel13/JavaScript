function getAPIDemo(){


    //url ---> API
    fetch("https://reqres.in/api/users?page=2",{method:"GET"}).then((res)=>{
        res.json().then((data)=>{
            console.log(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })

}

//getAPIDemo();


async function getAPIDemo2(){


const res = await fetch("https://reqres.in/api/users?page=2",{method:"GET"});
const data = await res.json();
console.log(data);


}
//getAPIDemo2();

const getUserData = async () => {



    const res = await fetch("https://node5.onrender.com/user/user",{method:"GET"});
    const data = await res.json();
    console.log(data.message);
    console.log(data.data);

}

getUserData();