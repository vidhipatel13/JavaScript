var users = ["jhon","arya","sansa","robb","bran","rickon"];


// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }



//user users[i]
// users.forEach((user)=>{
//     console.log(user);
// })

// var users1 = users.map((u)=>{
    
//     return u.toUpperCase();
// })

// console.log(users1);

// users1.forEach((user)=>{
//     console.log(user);
// })


var fileArray =[]

// for(let i=0;i<users.length;i++){
//     if(users[i].length>4){
//         fileArray.push(users[i]);
//     }
// }

//false --> no push
//true --> push
// fileArray = users.filter((user)=>{

//     //true or false uses[i]= Jhon false
//     return user.length>4;

// })
//console.log(users[2].length>4);

var filarr  = users.filter((user)=>user.length>4)
console.log(filarr);

//console.log(fileArray);