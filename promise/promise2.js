// const getData =()=>{

//     return new Promise((success,fail)=>{

//         //4000 miliseconds
//         setTimeout(()=>{
//             success({status:101,message:"success"})
//         },4000)
//     })

// }

function getData(){
    return new Promise((success,fail)=>{
        setTimeout(()=>{
            success({status:101,message:"success"})
        },4000)
    })
}

// var x = getData()
// console.log(x);

// x.then((data)=>{
//     console.log(data);
// })
// x.catch((err)=>{
//     console.log(err);
// })

getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})