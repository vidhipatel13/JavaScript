//settimeout...

// const printData = () => {
//     console.log("function called....!!!!");
// }

// //printData();

// setTimeout(()=>{
//     printData();
// },2000)


//when promise is resolved then only it will call then block
//when promise is rejected then only it will call catch block
const printData = ()=>{


    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve({status:101,message:"success",arr:[1,2,3,4,5]})
                //resolve("resolved...!!!")
                //reject("due to error...!!!")

        },3000)

    })

    console.log(promise);

    promise.then((data)=>{
        console.log(data);
        console.log(data.arr.length);
    })
    promise.catch((err)=>{
        console.log(err);
    })

    // console.log("function end");



}

printData();






