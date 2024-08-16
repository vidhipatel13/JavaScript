//printf,print,cout
console.log("Hello")
console.info("Hello")
console.warn("Hello")
console.error("Hello")

// var let const...
//var global scope
//let block scope (local)
//const block scope (local) --> final

var a = 10
let b = 20
var sname = "John"
var isActive = true
var salary = 1000.10

console.log("value of a = ",a)
console.log("value of b = ",b)
console.log("value of name = ",sname)
console.log("value of isActive = ",isActive)
console.log("value of salary = ",salary)

//number,string,boolean,undefined,null
console.log("type of a = ",typeof a)
console.log("type of b = ",typeof b)
console.log("type of name = ",typeof sname)
console.log("type of isActive = ",typeof isActive)
console.log("type of salary = ",typeof salary)

var x;
console.log("value of x = ",x)
console.log("type of x = ",typeof x)

{
    let y = 100
    console.log("value of y = ",y)
    var z = 200
    console.log("value of z = ",z)
}

//console.log("value of y = ",y) error
console.log("value of z = ",z)

const pi = 3.14
console.log("value of pi = ",pi)
pi = 3.15 //error