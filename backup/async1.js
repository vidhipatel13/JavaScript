// console.log('start');
// setTimeout(() => {

//         console.log('process in progress');
// },3000);
// console.log('end');


// -----------------------------------------------------

// var promise = new promise ((resolve,reject) => {

//     setTimeout(() => {
//         resolve('success')
//         reject('failure')
//     },3000)
// })

// console.log(promise); //promise {<pending>}
// promise.then((data) => {
//     console.log("data..",data); //success

// })
 
// promise.catch((error)=> {
//     console.log("error..",error);
// })

// ------------------------------------------------------

// const fetchdata = () =>{
//     return new promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({id:101, name: 'raj'})
//             // reject("failure")
//         },4000)
//     })
// }

// var data = fetchData()
// console.log(data); // Promise { <pending> }
// data.then((data) => {
//     console.log("data..",data); // success
// })
// data.catch((error) => {
//     console.log("error..",error);
// })


fetchData().then((data) => {
    console.log("data..",data); // success
}).catch((error) => {
    console.log("error..",error);
})

// ---------------------------------------------------------------