// const key = 'bd46a268c8e5e6bd7778516a6f3f569c'
// let cityName = 'auckland'


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
// .then((res) => {
//     if(res.status !== 200){
//         throw new Error(res.status)
//     }
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
//     console.log(data.name)
//     console.log(` Temp is currently : ${data.main.temp}C`)
//     console.log(`conditions : ${data.weather[0].description}`)
//     console.log(` wind speed : ${data.wind.speed}`)
// })
// .catch((err) => {
//     console.log(`${err} :  unable to load data`)
// })