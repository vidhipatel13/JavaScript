const data = [
    {
        name:"India",
        flag:"https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
    },{
        name:"CHINA",
        flag:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
    },
    {
        name:"USA",
        flag:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    }
]
document.getElementById("btn").addEventListener("click",()=>{

    var india = document.getElementById("IndiaFlag")
    var china = document.getElementById("ChinaFlag")
    var usa = document.getElementById("USAFlag")
    for(let i=0;i<data.length;i++){
        
        if(data[i].name=="India"){
            india.src=data[i].flag
        }
        if(data[i].name=="CHINA"){
            china.src=data[i].flag
        }
        if(data[i].name=="USA"){
            usa.src=data[i].flag
        }
    }

})