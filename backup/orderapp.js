const orderFood = (time,order)=> {
   
    return new Promise ((resolve,reject)=> {

        setTimeout(()=> {
            resolve(order)
        },time)
    })
}

const placeorder = async (time,order)=> {

    const orderData = await orderFood(time,order)
    console.log("orderdata",orderData)
}

console.log('ordering food....')
placeorder(3000, {item:'pizza', quantity : 1 , size: 'large'})