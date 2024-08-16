//mutable -> can be changed with same reference
//immutable -> can't be changed with same reference
//string is immutable
var lang = "  Hindi is a language is hindi language??  "
console.log(lang)
console.log(lang.length)

console.log(lang.charAt(0))
console.log(lang[0])


lang[0] = "X"
console.log(lang)

lang = lang.toUpperCase()
console.log(lang)
lang = lang.toLowerCase()
console.log(lang)


//var ind = lang.indexOf("nd")
var ind = lang.indexOf("nd",10)
console.log(ind)
// for(let i = lang.length-1;i>=0;i--){
//     //17,16,15
// }
ind = lang.lastIndexOf("a",15)
console.log(ind)


// var ss = lang.slice(0)
// console.log(ss)


lang = lang.trim()
//lang = lang.trimEnd()
console.log(lang)
console.log(lang.length)

//enter stirng...."      "
//""if(str!=""||str!=null||str!=undefined){}



lang = lang.replace("is","was")
console.log(lang)

//lang.concat("hello")
lang = lang + "abc";
console.log(lang)

// ["java",]
//string
// var strarray = lang.split("hi")
// console.log(strarray)

//lang.startsWith("H")
//lang.endsWith("h")

console.log(lang.lastIndexOf("i"))
var flag = lang.includes("i",29)
console.log(flag)


lang  = lang.repeat(1)
console.log(lang)

var s = lang.search("h")
console.log(s)








// for(let i=0;i<lang.length;i++){
//     //console.log(lang[i])
//     console.log(lang.charAt(i))
// }