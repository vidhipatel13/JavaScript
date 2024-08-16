
const handleSubmit = (event) => {

    event.preventDefault();
    const name = document.getElementById("city").value;

    fetchWeatherData(name); 

}
const fetchWeatherData = async (name) => {

const params = new URLSearchParams({
    q: name,
    appid: "fe4feefa8543e06d4f3c66d92c61b69c",
  });

const url = "https://api.openweathermap.org/data/2.5/weather"+"?"+params.toString();

const res = await fetch(url,{
    method:"GET"
})
const data = await res.json();
console.log(data);


var cityName = document.getElementById("cityName");
cityName.innerHTML = data.name;

var minTemp = document.getElementById("minTemp");
minTemp.innerHTML = (data.main.temp_min-273.15).toFixed(2);

var maxTemp = document.getElementById("maxTemp");
maxTemp.innerHTML = (data.main.temp_max-273.15).toFixed(2);

var country = document.getElementById("country");
country.innerHTML = data.sys.country;

}