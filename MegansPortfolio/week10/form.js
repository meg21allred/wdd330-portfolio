
const weatherBtn = document.getElementById('weatherBtn')
const weatherDiv = document.getElementById('weatherDiv')
let city = document.getElementById('city')


weatherBtn.addEventListener('click', (e) => {
    let site = 'https://api.openweathermap.org/data/2.5/weather?q='
    let yourCity = city.value;
    let country = ',us'
    let key =  '&APPID=10994d88b138ff61dc357f1be323c887'
    fetch(site + yourCity + country + key)
    .then(function(res) {
        return res.json()
    }).then(function(res){
        console.log(res)
        let weather1 = res.weather[0].main
        let weather2 = res.weather[0].description
        
        weatherDiv.innerHTML = ("the weather is: " + weather1 + " with  " + weather2);
    })


})