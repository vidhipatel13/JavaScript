var data = ["jay","raj","parth","amit","harshil","parth"]


uplen = data.push("jaydeep")
console.log(uplen)
console.log(data)

var removedelm = data.pop()
console.log(removedelm)

data.unshift("vraj")
console.log(data)

removedelm =data.shift()
console.log(removedelm)


console.log(data)
var ind = data.indexOf("parth")
console.log(ind)
ind = data.lastIndexOf("parth")
console.log(ind)