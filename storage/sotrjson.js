function storeData(){

    const data = {
        name:"vidhi",
        age:23,
    }

    var strData = JSON.stringify(data)

    localStorage.setItem("data",strData)

}

function removeData() {

}


function getDataFromstorage() {

        const strData = localStorage.getItem(" data ")
        console.log(strData)

        //console.log("name....",storeData.name)
        //object parse//
        var user = JSON.parse(strData)
        console.log(user)
        console.log(user.name)
        console.log(user.age)
}








