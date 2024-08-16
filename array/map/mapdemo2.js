var pizza =[
    {
        name:"margherita",
        detail:[
            {
                size:"small",
                price:200
            },
            {
                size:"medium",
                price:300
            },
            {
                size:"large",
                price:400
            }
        ],
        toppings:["onion","tomato","cheese","capsicum"],
        available:true,
        base:["thin","thick"],
        breads:["garlic","plain","multigrain"]
    },
    {
        name:"farmhouse",
        detail:[
            
            {
                size:"medium",
                price:550
            },
            {
                size:"large",
                price:400
            }
        ],
        toppings:["onion","tomato","cheese","capsicum","corn","elpino"],
        available:true,
        base:["thick"],
        breads:["plain","multigrain"]
    },
    {
        name:"7 cheese",
        
        detail:[
            {
                size:"small",
                price:200
            },
            {
                size:"medium",
                price:800
            },
            {
                size:"large",
                price:800
            },
            {
                size:"extra large",
                price:1200
            }
        ],
        toppings:["onion","tomato","cheese"],
        available:true,
        base:["thin","thick"],
    }

]
//
// var x  = pizza.filter((p)=>{
    
//     return p?.base?.includes("thick")
// })


//var x = pizza.filter((p)=>p?.toppings?.includes("elpino"))
var x = pizza.filter((p)=>{

    
    return p?.detail.filter((pr)=>{
        
         return pr?.size=="medium" && pr?.price<500
        
    }).length>0

})
console.log(x)

// pizza.map((p)=>{
    
//     p.detail.map((pr)=>{
//         if(pr.size=="medium" && pr.price<500){
//             console.log(pr)
//         }
//     })
// })