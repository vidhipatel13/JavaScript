const getData = () => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received')
        }, 3000)
    })

}

async function fetchData() {

    console.log('Fetching data...')
    const data = await getData()
    console.log(data)
    console.log('Data fetcing completed...')


}
fetchData()

// console.log('Fetching data...')
// getData().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })
// console.log('Data fetcing completed...')