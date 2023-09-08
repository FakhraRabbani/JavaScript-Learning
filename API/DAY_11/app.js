

//Open weather api
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//44d8add5b5bccfdce2b6662d2ae7c490
//https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=44d8add5b5bccfdce2b6662d2ae7c490&units=metric




//Async and await

async function getData(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=44d8add5b5bccfdce2b6662d2ae7c490&units=metric`);
        const weatherData = await response.json();
        console.log('hello');
        console.log(weatherData);
    }
    catch (error) {
        console.log(error);
    }
    
    
}

getData('Lahore');
console.log('hi');
