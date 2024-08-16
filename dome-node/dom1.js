function loaddiv(){

    var div = document.getElementById("div");
    
    console.log(div);
    var ptag = document.createElement("p");
    ptag.innerHTML = "paragraph";
    div.appendChild(ptag);

    var atag = document.createElement("a");
    atag.innerHTML = "this is a google link ";
    atag.href = "http://www.google.com";
    div.appendChild(atag);
}

function loadcountries (){

    var data =[
        {
            name:"India",
            image:"../../pictures/india.jpg",
            capital:"New Delhi",
        },
        {
            name:"USA",
            image:"../../pictures/usa.jpg",
            capital:"Washington DC",
        },
        {
            name:"UK",
            image:"../../pictures/uk.jpg",
            capital:"London",
        }
    ]
    

    var countries = document.getElementById("countries");

    for(let i=0;i<data.length;i++){

        var conh1 = document.createElement("h1");
        conh1.innerHTML = data[i].name;
        countries.appendChild(conh1);

        var conh2 = document.createElement("h2");
        conh2.innerHTML = data[i].capital;
        //conh2.className ="cap"
        countries.appendChild(conh2);

        var conimg = document.createElement("img");
        conimg.src = data[i].image;
        conimg.className ="image"
        countries.appendChild(conimg);

    }



}