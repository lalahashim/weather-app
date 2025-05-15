const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>';
const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/></svg>';
const cloudSunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/><path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/></svg>';
const rainIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain" viewBox="0 0 16 16"><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/></svg>';
const heavyRainIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain-heavy" viewBox="0 0 16 16"><path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293m.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1"/></svg>';
const drizzleIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-drizzle" viewBox="0 0 16 16"><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/></svg>';
const snowIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-snow" viewBox="0 0 16 16"><path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973M8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1.25M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25"/></svg>';
const cloudMoonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/><path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/></svg>';
const cloudIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"><path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/></svg>';
const cloudFogIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-fog" viewBox="0 0 16 16"><path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973M8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 3"/></svg>';
const LightingIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning" viewBox="0 0 16 16"><path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724z"/></svg>';
const LightingRainIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning-rain" viewBox="0 0 16 16"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724z"/></svg>';

const searchInput = document.getElementById("city-search");
const searchSection = document.getElementById("search")
const weatherSection = document.getElementById("all-data");
const locationEndpoint = "https://raw.githubusercontent.com/lalahashim/city-country/refs/heads/main/cities.json"


searchInput.addEventListener("keydown", (event)=>{
    if (event.key === "Enter"){
        event.preventDefault();
        const cityName = searchInput.value;

        fetch(locationEndpoint)
        .then(response => {
            if (!response.ok){
                throw new Error("ошибка загрузки списка");
            }
            return response.json();
        })
        .then(cities =>{
            const city = cities.find(item => item.name.toLowerCase() === cityName.toLowerCase());
            const searchLocation = city.name;

            if(city){
                searchWeatherData(city.lat, city.lng, searchLocation);
            } else {
                alert("City not found");
            }
        })
    }
})

function searchWeatherData(latitude, longitude, location){
    searchSection.classList.add("dont-show");
    weatherSection.classList.remove("dont-show");

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunset,sunrise,temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_180m,weather_code&models=icon_seamless&current=temperature_2m,is_day,weather_code&timezone=auto`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const pageBody = document.getElementsByTagName("body");
        const isDay = data.current.is_day;
        pageBody[0].classList.remove("day");
        weatherSection.classList.remove("day");
        pageBody[0].classList.remove("night");
        weatherSection.classList.remove("night");
        if (isDay){
            pageBody[0].classList.add("day");
            weatherSection.classList.add("day");
        } else{
            pageBody[0].classList.remove("day");
            weatherSection.classList.remove("day");
            pageBody[0].classList.add("night");
            weatherSection.classList.add("night");
        }
    
    
        const currentTemperature = document.getElementById("current-temperature");
        currentTemperature.innerHTML = data.current.temperature_2m + "°";
        const todaysSunrise = document.getElementById("todays-sunrise");
        todaysSunrise.innerHTML = data.daily.sunrise[0].split("T")[1];
        const todaysSunset = document.getElementById("todays-sunset");
        todaysSunset.innerHTML =    data.daily.sunset[0].split("T")[1];
        const currentLocation = document.getElementById("current-location");
        currentLocation.innerHTML = location;
    
    
        const hourlyTimes = data.hourly.time;
        const hourlyTemps = data.hourly.temperature_180m;
        const currentHour = new Date().getHours();
        
        function formatHour(hourString) {
            return hourString.split("T")[1].slice(0, 5);
        }
    
        const firstHour = document.getElementById("first-hour");
        firstHour.innerHTML = formatHour(hourlyTimes[0 + currentHour]);
        const firstHourTemp = document.getElementById("first-hour-temp");
        firstHourTemp.innerHTML = hourlyTemps[0 + currentHour] + "°";
        
        const secondHour = document.getElementById("second-hour");
        secondHour.innerHTML = formatHour(hourlyTimes[1 + currentHour]);
        const secondHourTemp = document.getElementById("second-hour-temp");
        secondHourTemp.innerHTML = hourlyTemps[1 + currentHour] + "°";
    
        const thirdHour = document.getElementById("third-hour");
        thirdHour.innerHTML = formatHour(hourlyTimes[2 + currentHour]);
        const thirdHourTemp = document.getElementById("third-hour-temp");
        thirdHourTemp.innerHTML = hourlyTemps[2 + currentHour] + "°";
    
        const fourthHour = document.getElementById("fourth-hour");
        fourthHour.innerHTML = formatHour(hourlyTimes[3 + currentHour]);
        const fourthHourTemp = document.getElementById("fourth-hour-temp");
        fourthHourTemp.innerHTML = hourlyTemps[3 + currentHour] + "°";
    
        const fifthHour = document.getElementById("fifth-hour");
        fifthHour.innerHTML = formatHour(hourlyTimes[4 + currentHour]);
        const fifthHourTemp = document.getElementById("fifth-hour-temp");
        fifthHourTemp.innerHTML = hourlyTemps[4 + currentHour] + "°";
        
    
        const weekDaysList = document.getElementById("days-list");
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const currentDay = new Date().getDay();
        const weekDays = [];
        weekDays.push("Today")
        for (let i=1; i<7; i++){
            weekDays.push(daysOfWeek[(currentDay + i) %7])
        }
        weekDays.forEach(day =>{
            const dayListElement = document.createElement("li");
            dayListElement.textContent = day;
            weekDaysList.appendChild(dayListElement)
        })
    
    
        const highTempList = document.getElementById("high-temp");
        const lowTempList = document.getElementById("low-temp");
    
        const todaysHighTemp = document.createElement("li");
        todaysHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[0];
        highTempList.appendChild(todaysHighTemp);
        const todaysLowTemp = document.createElement("li");
        todaysLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[0];
        lowTempList.appendChild(todaysLowTemp);
    
        const tomorrowHighTemp = document.createElement("li");
        tomorrowHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[1];
        highTempList.appendChild(tomorrowHighTemp);
        const tomorrowLowTemp = document.createElement("li");
        tomorrowLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[1];
        lowTempList.appendChild(tomorrowLowTemp);
    
        const thirdDayHighTemp = document.createElement("li");
        thirdDayHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[2];
        highTempList.appendChild(thirdDayHighTemp);
        const thirdDayLowTemp = document.createElement("li");
        thirdDayLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[2];
        lowTempList.appendChild(thirdDayLowTemp);
    
        const fourthDayHighTemp = document.createElement("li");
        fourthDayHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[3];
        highTempList.appendChild(fourthDayHighTemp);
        const fourthDayLowTemp = document.createElement("li");
        fourthDayLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[3];
        lowTempList.appendChild(fourthDayLowTemp);
    
        const fifthDayHighTemp = document.createElement("li");
        fifthDayHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[4];
        highTempList.appendChild(fifthDayHighTemp);
        const fifthDayLowTemp = document.createElement("li");
        fifthDayLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[4];
        lowTempList.appendChild(fifthDayLowTemp);
    
        const sixthDayHighTemp = document.createElement("li");
        sixthDayHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[5];
        highTempList.appendChild(sixthDayHighTemp);
        const sixthDayLowTemp = document.createElement("li");
        sixthDayLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[5];
        lowTempList.appendChild(sixthDayLowTemp);
    
        const seventhDayHighTemp = document.createElement("li");
        seventhDayHighTemp.innerHTML = "H: " + data.daily.temperature_2m_max[6];
        highTempList.appendChild(seventhDayHighTemp);
        const seventhDayLowTemp = document.createElement("li");
        seventhDayLowTemp.innerHTML = "L: " + data.daily.temperature_2m_min[6];
        lowTempList.appendChild(seventhDayLowTemp);
    
    
        const currentIcon = document.getElementById("current-icon");
        const currentWeatherCode = Number(data.current.weather_code);
        if ([71, 72, 73, 77, 85, 86].includes(currentWeatherCode)) {
            currentIcon.innerHTML = snowIcon;
        } else if ([45, 48].includes(currentWeatherCode)) {
            currentIcon.innerHTML = cloudFogIcon;
        } else if ([0, 1].includes(currentWeatherCode)) {
            currentIcon.innerHTML = isDay ? sunIcon : moonIcon;
        } else if (currentWeatherCode === 2) {
            currentIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
        } else if (currentWeatherCode === 3) {
            currentIcon.innerHTML = cloudIcon;
        } else if ([51, 53, 55, 56, 57].includes(currentWeatherCode)) {
            currentIcon.innerHTML = drizzleIcon;
        } else if ([61, 63, 66, 80, 81].includes(currentWeatherCode)) {
            currentIcon.innerHTML = rainIcon;
        } else if ([65, 67, 82].includes(currentWeatherCode)) {
            currentIcon.innerHTML = heavyRainIcon;
        } else if ([95, 96, 99].includes(currentWeatherCode)) {
            currentIcon.innerHTML = LightingIcon;
        }
    
    
        const iconList = document.getElementById("icons-list");
        const dailyWeatherCodes = data.daily.weather_code;
        dailyWeatherCodes.forEach(code => {
            const dailyWeatherIcon = document.createElement("li");
        if ([71, 72, 73, 77, 85, 86].includes(code)) {
            dailyWeatherIcon.innerHTML = snowIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if ([45, 48].includes(code)) {
            dailyWeatherIcon.innerHTML = cloudFogIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if ([0, 1].includes(code)) {
            dailyWeatherIcon.innerHTML = isDay ? sunIcon : moonIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if (code === 2) {
            dailyWeatherIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if (code === 3) {
            dailyWeatherIcon.innerHTML = cloudIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if ([51, 53, 55, 56, 57].includes(code)) {
            dailyWeatherIcon.innerHTML = drizzleIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if ([61, 63, 66, 80, 81].includes(code)) {
            dailyWeatherIcon.innerHTML = rainIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if ([65, 67, 82].includes(code)) {
            dailyWeatherIcon.innerHTML = heavyRainIcon;
            iconList.appendChild(dailyWeatherIcon);
        } else if ([95, 96, 99].includes(code)) {
            dailyWeatherIcon.innerHTML = LightingIcon;
            iconList.appendChild(dailyWeatherIcon);
        }
        })
    
    
        const hourlyWeatherCode = data.hourly.weather_code;
        const firstFiveCodes = hourlyWeatherCode.slice(0, 5);
        
        const firstHourIcon = document.getElementById("first-hour-icon");
        if ([71, 72, 73, 77, 85, 86].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = snowIcon;
        } else if ([45, 48].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = cloudFogIcon;
        } else if ([0, 1].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = isDay ? sunIcon : moonIcon;
        } else if (firstFiveCodes[0] === 2) {
            firstHourIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
        } else if (firstFiveCodes[0] === 3) {
            firstHourIcon.innerHTML = cloudIcon;
        } else if ([51, 53, 55, 56, 57].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = drizzleIcon;
        } else if ([61, 63, 66, 80, 81].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = rainIcon;
        } else if ([65, 67, 82].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = heavyRainIcon;
        } else if ([95, 96, 99].includes(firstFiveCodes[0])) {
            firstHourIcon.innerHTML = LightingIcon;
        }
    
        const secondHourIcon = document.getElementById("second-hour-icon");
        if ([71, 72, 73, 77, 85, 86].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = snowIcon;
        } else if ([45, 48].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = cloudFogIcon;
        } else if ([0, 1].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = isDay ? sunIcon : moonIcon;
        } else if (firstFiveCodes[1] === 2) {
            secondHourIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
        } else if (firstFiveCodes[1] === 3) {
            secondHourIcon.innerHTML = cloudIcon;
        } else if ([51, 53, 55, 56, 57].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = drizzleIcon;
        } else if ([61, 63, 66, 80, 81].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = rainIcon;
        } else if ([65, 67, 82].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = heavyRainIcon;
        } else if ([95, 96, 99].includes(firstFiveCodes[1])) {
            secondHourIcon.innerHTML = LightingIcon;
        }
    
        const thirdHourIcon = document.getElementById("third-hour-icon");
        if ([71, 72, 73, 77, 85, 86].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = snowIcon;
        } else if ([45, 48].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = cloudFogIcon;
        } else if ([0, 1].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = isDay ? sunIcon : moonIcon;
        } else if (firstFiveCodes[2] === 2) {
            thirdHourIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
        } else if (firstFiveCodes[2] === 3) {
            thirdHourIcon.innerHTML = cloudIcon;
        } else if ([51, 53, 55, 56, 57].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = drizzleIcon;
        } else if ([61, 63, 66, 80, 81].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = rainIcon;
        } else if ([65, 67, 82].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = heavyRainIcon;
        } else if ([95, 96, 99].includes(firstFiveCodes[2])) {
            thirdHourIcon.innerHTML = LightingIcon;
        }
    
        const fourthHourIcon = document.getElementById("fourth-hour-icon");
        if ([71, 72, 73, 77, 85, 86].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = snowIcon;
        } else if ([45, 48].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = cloudFogIcon;
        } else if ([0, 1].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = isDay ? sunIcon : moonIcon;
        } else if (firstFiveCodes[3] === 2) {
            fourthHourIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
        } else if (firstFiveCodes[3] === 3) {
            fourthHourIcon.innerHTML = cloudIcon;
        } else if ([51, 53, 55, 56, 57].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = drizzleIcon;
        } else if ([61, 63, 66, 80, 81].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = rainIcon;
        } else if ([65, 67, 82].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = heavyRainIcon;
        } else if ([95, 96, 99].includes(firstFiveCodes[3])) {
            fourthHourIcon.innerHTML = LightingIcon;
        }
    
        const fifthHourIcon = document.getElementById("fifth-hour-icon");
        if ([71, 72, 73, 77, 85, 86].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = snowIcon;
        } else if ([45, 48].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = cloudFogIcon;
        } else if ([0, 1].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = isDay ? sunIcon : moonIcon;
        } else if (firstFiveCodes[4] === 2) {
            fifthHourIcon.innerHTML = isDay ? cloudSunIcon : cloudMoonIcon;
        } else if (firstFiveCodes[4] === 3) {
            fifthHourIcon.innerHTML = cloudIcon;
        } else if ([51, 53, 55, 56, 57].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = drizzleIcon;
        } else if ([61, 63, 66, 80, 81].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = rainIcon;
        } else if ([65, 67, 82].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = heavyRainIcon;
        } else if ([95, 96, 99].includes(firstFiveCodes[4])) {
            fifthHourIcon.innerHTML = LightingIcon;
        }
    })
}