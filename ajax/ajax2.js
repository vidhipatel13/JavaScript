const readJsonFile =()=>{

    const output = document.getElementById("output");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","./ajax2.json",true)
    xhr.send(); 

    xhr.onload = ()=>{
        var data = JSON.parse(xhr.responseText);
        console.log(data)
        
    }



}

readJsonFile(); 


