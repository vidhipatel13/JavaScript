function storeData(){

    localStorage.setItem("id","101")
    sessionStorage.setItem("name","John")
}

function removeData(){

        localStorage.removeItem("id")
        sessionStorage.removeItem("name")
        //localStorage.clear()
        //sessionStorage.clear()
}

function getDataFromstorage(){

    const id = localStorage.getItem("id")
    const name = sessionStorage.getItem("name")

    console.log(id)
    console.log(name)
}