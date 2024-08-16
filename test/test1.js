// ------------------------------------------------------PART-1------------------------------------------------------------

//  1)Declare an array of string type and sort it by string length.  

            // var arr = ["jay", "parth","vedant","dhrashti"]
            // arr.sort(function(x,y)
            // {
            //     return x.length - y.length;
            // });
            // console.log(arr);

// 2)Difference between forEach and map demonstrate with example.

    // map -- return new arry with expected values 
    // foreach -- only print expected elem 
   
            // x=[1,2,3,4,5]
            // //foreach
            // x.forEach((arr)=>{
            //     console.log(arr+1)})
            // //map
            // y = x.map((arr)=>
            // {
            //     return arr+10
            // })
            //  console.log(y)

// 3)Declare the array users percentage and check every percentage value is above certain value or not”
     // Eg: [12.22,45.50,70.89,90]
     // You need to check if all per data is above 50 or not !

            //  var arr = [12.22,45.50,70.89,90]
            //  var arr1 =[]

            //  for(let i=0;i<arr.length;i++){
            //      if(arr[i]>50){
            //          arr1.push(arr[i]);  
            //      }   
            //  }
            //  console.log(arr1)
          
//4) Convert all elements from array to upper case and store into a new array.

            // var arr = ["jay", "parth","vedant","dhrashti"]
            // var arr1 =[]
            //     var x = arr.map((y)=>{  
            //     y= y.toUpperCase();
            //     arr1.push(y);
            // })
            // console.log(arr1)






// ------------------------------------------------PART-2------------------------------------------------------------
//1) create json array object of product, use normalisation according to RDBMS concept 










//2) Create json array for 1 user’s bank transactions 

   




// ------------------------------------------------PART-3------------------------------------------------------------

// 1)create a box and change the color of the box when the user double clicks on it.

            // function updateBox(test){

            //     console.log(test);
            //     var x = document.getElementById("div1")
            //     x.style.backgroundColor ="black"
            //     x.style.height = "350px";
            //     x.style.width = "350px";
                
            // }    










// 2) create form with 2 field email and password , after form submission print email password on alert box or console.


// const regEmployee = (test) => {
    // console.log(test);
    // test.preventDefault();
    // alert(console.log(email))
    // console.log("regEmployee() called");
    // document.getElementById("email").alert(value);
    // var pswd = document.getElementById("pswd").value;
// }











// ......................................................................................................

// var product =[
//     {
//         electronic: [
//             {
//                 // id : 1,
//                 namee :"juicer",
//                 amount : 4000,
                
//             },
//             {
//                 namee : "watch",
//                 amount : 2000,
//             },
//             {
//                 namee : "dryer",
//                 amount : 3000,
//             }
//         ],


//         fashion: [
//             {
//                 // id : 1,
//                 namee :"jeans",
//                 amount : 4000,
                
//             },
//             {
//                 namee : "tshirt",
//                 amount : 2000,
//             },
//             {
//                 namee : "band",
//                 amount : 3000,
//             }
//         ]
//     },
// ]






var employee = [
    {
        dep:"it",
        emp:[
            {
                name:"shreya",
                gender: "female",
                salary: 20
            },
            {
                name:"harsh",
                gender: "male",
                salary: 10
            },
            {
                name:"meet",
                gender: "male",
                salary: 25
            }
        ]
    },
    {
        dep:"hr",
        emp:[
            {
                name:"smit",
                gender: "male",
                salary: 15
            },
            {
                name:"shruti",
                gender: "female",
                salary: 20
            },
            {
                name:"devanshi",
                gender: "female",
                salary: 10
            }
        ]
    }

]

var total =0;

var employee1 = employee.find((item)=>item.dep=="it").emp.reduce((sum,item)=>sum+item.salary,0)
console.log(employee1)

// var employee = employee.find((item)=>item.dep=="hr").type.reduce((sum,item)=>sum+item.salary,0)
// console.log(employee)


