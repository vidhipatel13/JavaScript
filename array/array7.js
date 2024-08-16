var students = [
    {
        id:1,
        name:"amit",
        age:30,
        marks:250,
        degrees:[
            {
                id:1,
                name:"BE",
            },
            {
                id:2,
                name:"ME",
            }
        ]
    },
    {
        id:2,
        name:"sumit",
        age:32,
        marks:258,
        degrees:[
            {
                id:1,
                name:"MBBs",
            },
            {
                id:2,
                name:"MD",
            }
        ]
    }

]

//console.log(students);

// students.forEach((stu)=>{

//     console.log(stu.name);
//     stu.degrees.forEach((deg)=>{
//         console.log(deg.name);
//     })
//     console.log("---------");
// })


students = students.map((stu)=>{
    return({
        id:stu.id,
        name:stu.name,
        degrees: stu.degrees.upper()
    })
})
console.log(students);