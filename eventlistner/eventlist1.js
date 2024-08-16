document.getElementById("btn").addEventListener("click", () => {
    console.log("clicked");
  });
  
  document.getElementById("box1").addEventListener("mouseover", () => {
    document.getElementById("box1").className = "box";
  });
  
  document.getElementById("fb").addEventListener("dblclick", () => {
    document.getElementById("fb").href = "https://www.facebook.com/";
    document.getElementById("fbimg").src = "./fb.jpg";
  });
  document.getElementById("google").addEventListener("dblclick", () => {
    document.getElementById("google").href = "https://www.google.com/";
    document.getElementById("gimg").src = "./google.png";
  });
  
  
  
  /// 10 8 th event ---> event listner
  // document.getElementById("btn").addEventListener("click",function(){
  
  // })
  // const test =()=>
  // {
  
  // }
  // document.getElementById("btn").addEventListener("click",test)