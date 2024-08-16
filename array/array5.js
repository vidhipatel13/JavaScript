var names = ["nihar","zara","jaya","amit","don","anil","hr"];


function sortByLen(a,b){

    return a.length - b.length;
}


//var sname  = names.sort();
//console.log(sname);
var sdata = names.sort(sortByLen);
console.log(sdata);

const sortNum =(a,b)=>{

    return a-b;
}

var userAge = [12,32,1,34,5,6,78,43,13,3]
console.log(userAge);

//var sAge = userAge.sort(sortNum)
var sAge  = userAge.sort((a,b)=>a-b)
console.log(sAge);

