
//PROMISE

/*
const response = fetch('http://api.alquran.cloud/v1/ayah/262');
console.log(response);

response
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response.data.text);
    })
    .catch((error) => {
        console.log(error);
    })
    */


//Open weather api
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//44d8add5b5bccfdce2b6662d2ae7c490
//https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=44d8add5b5bccfdce2b6662d2ae7c490&units=metric


const output = document.getElementById('output');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submitBtn');

const getTemperature = (cityName) => {
    const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=44d8add5b5bccfdce2b6662d2ae7c490&units=metric`);

    promise
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            const { main } = response;
            output.innerText = main.feels_like;

    })
}


submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const cityName = input.value;
    getTemperature(cityName);
})