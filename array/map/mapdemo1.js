var products =[
    {
        id:1,
        type:"mobile",
        name:"iphone 13",
        price:1000,
        colors:["red","blue","black"],
        available:true,
        capacity:128,
    },
    {
        id:2,
        type:"laptop",
        name:"leanovo legion",
        price:2000,
        colors:["red","blue","black"],
        processor:"i7",
        available:true,
    },
    {
        id:3,
        type:"mobile",
        name:"samsung s21",
        price:900,
        colors:["red","blue","white"],
        available:true,
        capacity:256,

    },
    {
        id:4,
        type:"cloth",
        name:"shirt",
        price:20,
        colors:["red","blue","black","white"],
        size:["s","m","l","xl"],
        available:true,
    },
    {
        id:4,
        type:"cloth",
        name:"t-shirt",
        price:20,
        colors:["red","blue","black","white"],
        size:["s","m","l","xl"],
        available:true,
    },
    {
        id:4,
        type:"cloth",
        name:"jeans",
        price:20,
        colors:["red","blue","black","white"],
        size:["s","m","l"],
        available:true,
    }
]

//name --> colors --> red..

//products && products.type !== undefined && products.type === "mobile"
var filProducts = products.filter((prod)=>{
    return prod?.type ==="cloth" && prod?.size?.includes("xl")
})

console.log(filProducts)

// var fillProd = products.filter((prod)=>{


//     return prod.colors.includes("white")

// }).forEach((prod)=>{
//     console.log(prod.name)
// })
// prodnames.forEach((prod)=>{
//     console.log(prod.name)
// })

// products.map((prod)=>{
//     console.log(prod.name)
//     console.log(prod.price)
//     console.log(prod.colors)
//     console.log(prod.available)
//     // if(prod.type=="mobile"){
//     //     console.log(prod.capacity)
//     // }
//     // if(prod.type=="laptop"){
//     //     console.log(prod.processor)
//     // }
//     // if(prod.type=="cloth"){
//     //     console.log(prod.size)
//     // }
//     // if(prod.capacity!=undefined){
//     //     console.log("cap..",prod.capacity)
//     // }
//     //if(prod && prod.capacity != undefined){
//     if(prod?.capacity){
//         console.log("cap..",prod.capacity)
//     }
//     // console.log(prod.capacity)
//     // console.log(prod.size)
//     // console.log(prod.processor)
//     // console.log(prod.type)
//     console.log("*************")
// })