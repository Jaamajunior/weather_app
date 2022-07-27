
let city= "tamale"
let key="ba51c99cd3fabe34e0a5e18c1a7486f7"
let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


fetch(api)


.then((Response)=>Response.json())
.then((data)=>{console.log(data)
    let city=document.getElementById("cityname")
    city.innerHTML=data.name
    let country =document.getElementById("country")
    country.innerHTML=data.sys.country
    let temp=document.getElementById("temperature")
    temp.innerHTML=data.main.temp
    let feels_like=document.getElementById("feelslike")
    feels_like.innerHTML = data.weather[0].description 
    let humidity=document.getElementById("humidity")
    humidity.innerHTML=data.main.humidity
    let windspeed=document.getElementById("windspeed")
    windspeed.innerHTML=data.wind.speed
    let max_temp=document.getElementById("max")
    max_temp.innerHTML=data.main.temp_max
    let pressure=document.getElementById("pressure")
    pressure.innerHTML=data.main.pressure
    
  


})
   
 

.catch((Error)=>console.log(Error))
