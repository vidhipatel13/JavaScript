const changeTheme = ()=>{

    var x = document.getElementsByTagName("body")[0];
    console.log(x);
    x.style.backgroundColor = "black";
    
    var header = document.getElementsByTagName("header")[0];
    header.style.backgroundColor = "red";
    header.style.color = "white";

    var product = document.getElementsByClassName("product");
    for(var i=0; i<product.length; i++){
        product[i].style.backgroundColor = "black";
        product[i].style.color = "white";
    }
}