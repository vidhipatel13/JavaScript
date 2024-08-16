var city = ["Ahmedabad","Delhi", "Mumbai", "Kolkata", "Chennai", "Pune"];
//function remove city.... updated array.... (city name...)

//name mumbao
function removeCity (name)
{
    //Ahmedabad
    //Delhi
    //
    var newArr = city.filter((c)=>{
        // Ahmedabad !== Mumbai
        // Delhi !== Mumbai
        // Mumbai !== Mumbai
        return c!==name
    })

    return newArr;

}

console.log(removeCity("Mumbai"));