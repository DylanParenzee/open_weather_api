const key = 'bd46a268c8e5e6bd7778516a6f3f569c'
let cityName = 'tokyo'



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
.then((res) => {
    if(res.status !== 200){
        throw new Error(res.status)
    }
    return res.json()
})
.then((data) => {
    console.log(data)
    document.querySelector('#funkyCity').innerText = data.name
    document.querySelector('.temp h1').innerText = `${data.main.temp} 'C`
    document.querySelector('.description').innerHTML = data.weather[0].description
    document.querySelector('.humidity').innerHTML = `Humidity : ${data.main.humidity}`
    document.querySelector('.windspeed').innerHTML = `Wind speed : ${data.wind.speed} km/h`
    
    
    
})
.catch((err) => {
    console.log(`${err} :  unable to load data`)
})



function displayData(){
    
}