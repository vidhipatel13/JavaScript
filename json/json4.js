//var user={}
var users =[
    {
        id:101,
        name:"user1",
        email:"user1@gmail.com",
        skills:[
            {
                id:1,
                name:"java"
            },
            {
                id:2,
                name:"python"
            },
            
        ]
    },
    {
        id:102,
        name:"user2",
        email:"user2@gmail.com",
        skills:[
            {
                id:1,
                name:"java"
            },
            {
                id:2,
                name:"python"
            },
            
        ]
    }
]

console.log(users);
console.log(users[0]);
console.log(users[1]);

console.log(users[0].skills[1].name)