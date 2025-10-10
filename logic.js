const apiKey = '93138dae08af0c58ba13bf23c589d50c'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='


const searchBox = document.querySelector('.search input')
const searchBnt = document.querySelector('.search button')



async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        
        let data = await response.json()
        console.log(data);
        document.querySelector('.city').innerHTML=data.name
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+'°c'
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%'
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'
        document.querySelector('.weather-icon').src = `images/${data.weather[0].main}.png`
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.weather').style.display = 'block'
        
    }

    
}


searchBnt.addEventListener('click', () => {
    checkWeather(searchBox.value)
    
})
