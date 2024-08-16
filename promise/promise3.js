const getData = () =>{



    var promise = new Promise((res,rej)=>{

        //res("data")
        //rej("error")
        setTimeout(()=>{
           // res({status:101,message:"success"}) //res() function
            rej({status:404,message:"error"})
        },3000)

    })

    console.log("promise...",promise);
    promise.then((data)=>{
        console.log("then block..");
        console.log(data);
    })
    promise.catch((err)=>{
        console.log("catch block..");
        console.log(err);
    })

}
//getData()




const printData = () =>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({status:101,message:"success"})
        },3000)
    })

    
}


printData().then((data)=>{
    console.log(data);
}).catch((err)=>{ 
    console.log(err);
})


// var x = printData();
// console.log(x);
// x.then((data)=>{
//     console.log(data);
// })
// x.catch((err)=>{
//     console.log(err);
// })