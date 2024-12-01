const apiKey="c367411383d98f82c2189ede40837014";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const imageeIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiURL+ city +`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    var data = await response.json();


    // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    if(data.weather[0].main=="Clouds"){
        imageeIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        imageeIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        imageeIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        imageeIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        imageeIcon.src="images/mist.png"
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"

}

searchBtn.addEventListener("Enter",()=>{
    checkWeather(searchBox.value);

})
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})