








function displayData(city){
    const key = 'bd46a268c8e5e6bd7778516a6f3f569c'
    let unit = 'metric'
    let lang = 'en'
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}&lang=${lang}`)
.then((res) => {
    if(res.status !== 200){
        throw new Error(res.status)
    }
    return res.json()
})
.then((data) => {
    console.log(data)
    let icon = data.weather[0].icon
    //city display, makes sure first letter is capitalised
    document.querySelector('.city').innerText = `Weather in ${city[0].toUpperCase() + city.substring(1)}`
     // temp display 
    document.querySelector('.temp h1').innerText = `${data.main.temp} C `
    //icon display
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    // weather discrition display
    document.querySelector('.description').innerHTML = data.weather[0].description
    // humidity display
    document.querySelector('.humidity').innerHTML = `Humidity : ${data.main.humidity}`
    //windspeed display
    document.querySelector('.windspeed').innerHTML = `Wind speed : ${data.wind.speed} km/h`
    

    
    
    
    
})
.catch((err) => {
    console.log(`${err} :  unable to load data`)
})
    
}

displayData()