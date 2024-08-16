//getelement by class name and tag name...
var flag = true;

function changeBox() {
  if (flag) {
    console.log("flag is true");
    var boxElm = document.getElementsByClassName("box");
    console.log(boxElm);
    //boxElm[0].style.backgroundColor = "red";

    for (let i = 0; i < boxElm.length; i++) {
      boxElm[i].style.backgroundColor = "red";
    }

    var h1ELm = document.getElementsByTagName("h1");
    for (let i = 0; i < h1ELm.length; i++) {
      h1ELm[i].style.color = "green";
    }
    
  } else {
    alert("please reload and accept cookies first");
  }
}

function acceptCookies() {
  var x = confirm("Do you want to accept cookies?");
  if (x) {
    alert("You have accepted cookies");
  } else {
    flag = false;
    alert("You have not accepted cookies");
  }
}

                                                                                                                     
    
