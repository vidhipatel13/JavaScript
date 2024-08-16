// const date = new Date(); 
// const date = new Date(0); 
// const date = new Date(2024, 1, 14, 00, 00, 00, 0); 

//year   month   day   hours  minutes  seconds  milliseconds

//const date = new Date(2014,1,14)

const date = new Date()
console.log(date);

console.log("get date>>>",date.getDate());

console.log("get day>>>",date.getDay());

console.log("get full year>>>",date.getFullYear());

console.log("get hours>>>",date.getHours());

console.log("get milliseconds>>>",date.getMilliseconds());

console.log("get minutes>>>",date.getMinutes());

console.log("get month>>>",date.getMonth());

console.log("get seconds>>>",date.getSeconds());

console.log("get time>>>",date.getTime());

console.log("get timezone offset>>>",date.getTimezoneOffset());

console.log("get UTC date>>>",date.getUTCDate());

console.log("get UTC day>>>",date.getUTCDay());

console.log("get UTC full year>>>",date.getUTCFullYear());

console.log("get UTC hours>>>",date.getUTCHours());

console.log("get UTC milliseconds>>>",date.getUTCMilliseconds());

console.log("get UTC minutes>>>",date.getUTCMinutes());

console.log("get UTC month>>>",date.getUTCMonth());

console.log("get UTC seconds>>>",date.getUTCSeconds());

console.log("get year>>>",date.getYear());


const date1 = new Date()

date1.setFullYear(2023);
date1.setMonth(1);
date1.setDate(13);
date1.setHours(0);
date1.setMinutes(0);
date1.setSeconds(0);
date1.setMilliseconds(0);
console.log(date1);