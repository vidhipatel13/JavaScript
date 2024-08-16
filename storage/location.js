const getCurrentLocation = () => {


    window.navigator.geolocation.getCurrentPosition((postion) => {

        console.log(postion)
        console.log(postion.coords)
        console.log(postion.coords.latitude)
        console.log(postion.coords.longitude)

        localStorage.setItem("latitude", postion.coords.latitude)
        localStorage.setItem("longitude", postion.coords.longitude)

    })
}

getCurrentLocation()