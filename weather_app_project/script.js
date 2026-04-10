async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "0c535f73a6f1d67f627a99d77d9fd6bd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        document.getElementById("result").innerHTML = 
        `Temprature: ${data.main.temp}°C <br>
        Weather : ${data.weather[0].main}`;

    }catch(error){
        console.log(error);
    }
}