var users  =[
    {
        id:1,
        name:"Neha",
        gender:"female",
        age:22,
        isMarried:false,
        child:0
    },
    {
        id:2,
        name:"Raj",
        gender:"male",
        age:29,
        isMarried:true,
        child:1
    },
    {
        id:3,
        name:"Parth",
        gender:"male",
        age:28,
        isMarried:true,
        child:0
    }
]


users = users.filter((user)=>{

    //return user.gender ==="male" && user.child>0
    return user.name.startsWith("P")
})

//console.log(users[0].name[0])
console.log(users)