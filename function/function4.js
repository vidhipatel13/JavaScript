function sum(a,b){

    console.log("sum");
    console.log(a+b);

    function add(x){

        console.log("add");
        console.log("add...",a+b);
        console.log("add !!",x);
        return x*x;
    }
    var mul = add(a);
    console.log("mul",mul);

    return  a *b;

}
// add();
var ans = sum(10,20);
console.log("ans...",ans);



function pow(x){

    
    function powinner(a){

        
        return a*a;
    }

    return powinner(x);


}
var ans  = pow(10)
console.log("ans",ans);


