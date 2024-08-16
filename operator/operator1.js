const compare = ()=>{

    var a = 100;
    var b = "100"

    if(a === b){
        console.log("equal");
    }
    else{
        console.log("not equal");
    }

}
compare();

function compare1(a,b){

    if(a>b){
        return a;
    }
    else{
        return b;
    }

}

var ans = compare1(10,20);
console.log("max....",ans);

const compare3 = (a,b)=> a>b ? a : b;
const compare4 = (a,b)=> a %2 ==0 &&  a>b ? a : b;


console.log("max....",compare3(100,20));
console.log("max1....",compare4(99,20));

// if(a>b){

//     console.log("a is grt... b");
// }
// else if(a == b){
//     console.log("a is equal to b");
// }
// else{
//     console.log("a is less than b");
// }

const compare5 = (a,b)=> a> b ? "a sis grt... b ": "a < b";
console.log("compare5....",compare5(100,20));



const compare6 = (a, b, c) => a > b? "a is greater": (a==b? "equal": "a is greater"): "b is greater";

const result = compare6(10, 5, 8);
console.log("result : ", compare6(1,1))


