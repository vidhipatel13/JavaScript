function test(){

    console.log('test function called...');
    //with return type without parameters
}


// boilerplate code

test();

function test1(){
    console.log('test1 function called...');
    return 100;
}


var x = test1();
console.log(x);
console.log(test1());

function sum(a,b){
    
    return a+b;

}

console.log(sum(10,20));

