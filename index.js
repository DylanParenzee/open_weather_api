


let unit = 'metric'
let lang = 'En'
let humidity = document.querySelector('.humidity')
let windSpeed = document.querySelector('.windspeed')
let cityDescription = document.querySelector('.city')




function displayData(city){
    const key = 'bd46a268c8e5e6bd7778516a6f3f569c'
    
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}&lang=${lang}`)
.then((res) => {
    if(res.status !== 200){
        throw new Error(res.status)
    }
    return res.json()
})
.then((data) => {
    
    let icon = data.weather[0].icon
    //city display, makes sure first letter is capitalised -- handles 3 available languages 
    if(lang === 'En'){cityDescription.innerText = `Weather in ${city[0].toUpperCase() + city.substring(1)} (${data.sys.country})`}
    else if(lang ===  'Es'){cityDescription.innerText = `el Clima en ${city[0].toUpperCase() + city.substring(1)} (${data.sys.country})`}
    else {cityDescription.innerText = `la météo dans ${city[0].toUpperCase() + city.substring(1)} (${data.sys.country})`}
    

     // temp display 
     if(unit === 'metric'){
        document.querySelector('.temp h1').innerText = `${data.main.temp} C `
     } else{
        document.querySelector('.temp h1').innerText = `${data.main.temp} F `
     }
    

    //icon display
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    // weather discription display
    document.querySelector('.description').innerHTML = data.weather[0].description

    // humidity display -- handles 3 available languages 
    if(lang === 'En'){humidity.innerHTML = `Humidity : ${data.main.humidity}%`}
    else if(lang === 'Es') {humidity.innerHTML = `humedad: ${data.main.humidity}%`}
    else{humidity.innerHTML = `humidité: ${data.main.humidity}%`}
    
    //windspeed display -- handles 3 available languages
    if(lang === 'En'){windSpeed.innerHTML = `Wind speed : ${data.wind.speed} km/h`}
    else if(lang === 'Es'){windSpeed.innerHTML = `velocidad del viento : ${data.wind.speed} km/h`}
    else{windSpeed.innerHTML = `vitesse du vent: ${data.wind.speed} km/h`}
    
   
    
    
    
})
.catch((err) => {
    console.log(`${err} :  unable to load data`)
    document.querySelector('.city').innerText = `Please select a valid city`
    document.querySelector('.icon').src = ``
    document.querySelector('.temp h1').innerText = `- `
    document.querySelector('.description').innerHTML = `-`
    document.querySelector('.humidity').innerHTML = `-`
    document.querySelector('.windspeed').innerHTML = `Double check spelling`

})


    
}


//logic for search bar submits via submit button only
let searchButton = document.querySelector('.searchButton')
    
searchButton.addEventListener('click', () => {
        let searchBar = document.querySelector('.search-bar')
        displayData(searchBar.value)
    })
    
//logic for search bar, submits via enter keypress
    let searchBar = document.querySelector('.search-bar')

    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            displayData(searchBar.value)
        }
    });
    

     // logic for language selection 

     //spanish

     document.querySelector('.spanishButton').addEventListener('click', () =>{
        lang = 'Es'
        displayData(searchBar.value)
        
    })
     //french

    document.querySelector('.frenchButton').addEventListener('click', () =>{
        lang = 'Fr'
        displayData(searchBar.value)
        
    })
       // english
    document.querySelector('.englishButton').addEventListener('click', () =>{
        lang = 'En'
        displayData(searchBar.value)
        
    })


    //Logic for unit of measurment selection



     // event listner for imperial button
    document.querySelector('#imperialBtn').addEventListener('click', ()=>{
        unit= 'imperial'
        displayData(searchBar.value)
    })
     

    // event listner for metric button
    document.querySelector('#metricBtn').addEventListener('click', ()=>{
        unit= 'metric'
        displayData(searchBar.value)
    })