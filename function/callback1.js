//single threaded // call back function

function test(){

    console.log("test function");
}



function greet(a){

    
    console.log(a);
    //a function
    //test 
    a();
}

// greet(10)
// greet("java")
// greet(undefined)
// greet(null)
// greet([10,20,30])
// greet({name:"java"})
greet(test)


const getStudentData=(name)=>{

    console.log("get student data");
    console.log("name",name);
    return "STUDENT";
}
const getEmployeeData=(name)=>{

    console.log("get emp data");
    console.log("name",name);
    return "EMPLOYEE";
}


const getData=(cb)=>{

    console.log("get data");
    var data = cb("ram");
    console.log("data",data);
    
}

var choice = "emp"
if(choice=="student"){

    getData(getStudentData)
}
else{
    getData(getEmployeeData)
}
//getData(getStudentData)
//getData(getEmployeeData)





