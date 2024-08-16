// var x = document.getElementById("txt");
// console.log(x);

function changeData(){

    document.getElementById("txt").innerHTML = "Helloo World";
    document.getElementById("txt").style.color = "pink";
}

function addContent(){


    var x = document.getElementById("content")
    x.className = "box";

    var url = document.getElementById("url")
    url.href = "https://www.facebook.com";
    url.innerHTML = "fbpage";
    
}