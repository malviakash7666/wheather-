const inputBox = document.querySelector(".input-box");
const searchBtn=document.getElementById('searchBtn');
const weather_img =document.querySelector('.Wheather-img');
const temerature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed =document.getElementById('wind-speed');
const weather_body = document.querySelector('.wheather-body');
const location_not_found= document.querySelector('.location-not-found');



async function checkWeather(city){
    const api_key = '64ba367eb5e2930b070911818e722e49';
    const url =` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(response=>response.json());


if(weather_data.cod === '404'){
    // console.log("error");
    location_not_found.style.display ='flex';
    weather_body.style.display='none';

    return;
}
location_not_found.style.display ='none';
weather_body.style.display='flex';

    temerature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
    switch(weather_data.weather[0].main){
        case 'Cloud':
            weather_img.src="cloud.png";
            break;
            case 'Clear':
                weather_img.src='clear.png';
                break;
                case 'Rain':
                    weather_img.src='rain.png'
                    break;
                    case 'Snow':
                    weather_img.src='snow.png';
                        case 'Mist':
                        weather_img.src='mist.png';
                        break;

    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});