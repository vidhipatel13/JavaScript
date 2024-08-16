var employees = [
    {
        id:1,
        name:"raj",
        age:25,
        salary:25000,
    },
    {
        id:2,
        name:"parth",
        age:27,
        salary:35000,
    },
    {
        id:3,
        name:"jay",
        age:22,
        salary:23000,
    },
]

employees = employees.map((emp)=>{


    //return emp.name.toUpperCase();
    //return emp.salary + 10000;
    return({
        id:emp.id,
        salary:emp.salary + 10000,
    })

    // return(
    //     {
    //         empid:emp.id,
    //         name:emp.name.toUpperCase(),
    //         age:emp.age *2,
    //         salary:emp.salary + 10000,
    //     }
    // )
})
console.log(employees);