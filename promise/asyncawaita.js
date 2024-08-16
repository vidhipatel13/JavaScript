const printData = () => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 101, message: "success" })
        }, 3000)
    })


}

// var response;
// console.log("before calling printData");
// printData().then((data) => {
//     console.log("status...",data.status);
//     response = data;
// }).catch((err) => {
//     console.log(err);
// })
// console.log("after calling printData",response.status);

const getData = async() => {

        console.log("before calling printData");
        printData().then((data) => {
            console.log("status...", data.status);
            response = data;
        })
        // .catch((err) => {
        //     console.log(err);
        // })
        // console.log("after calling printData");

        console.log("before calling printData");
        const data =  await printData(); // 3
        console.log("data...",data);
        console.log("status...",data.status);
        console.log("after calling printData");
}
getData()