var name = "raj"
var email ="raj@g,ail.com"
//
//
//
//
//

//json....java script object notation
var user = {
    name:"raj",
    email:"raj@gmail.com",

    address:{
        city:"bangalore",
        pincode:560001,
        state:"karnataka",
        street:"mg road",
    }
}
// }
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.address.city);
// console.log(user.address.pincode);
// console.log(user.address.state);
// console.log(user.address.street);
// console.log(user.city);
// console.log(user.pincode);
// console.log(user.state);
// console.log(user.street);


var employee = {

    id:101,
    name:"raj",
    // experience:{
    //     company:"testyantra",
    //     year:2,
    //     designation:"developer",
    //     salary:20000,
    // },
    experiances:[
        {
            company:"TCS",
            year:2,
            designation:"developer",
            salary:20000,
        },
        {
            company:"INFO",
            year:1,
            designation:"developer",
            salary:30000,
        }
    ]
    

}
console.log(employee);
console.log(employee.experiances[0].company);
console.log(employee.experiances[1].company);


var products ={
    id:1121,
    name:"iphone 14",

    category:{
        id:"C1",
        name:"mobile",

        capacity:{
            ram:"4gb",
            rom:"64gb",
            processor:"A14",
        }
    },
    colors:["red","blue","black","white"],

}

console.log(products);
console.log(products.category);
console.log(products.category.capacity);
console.log(products.colors);




