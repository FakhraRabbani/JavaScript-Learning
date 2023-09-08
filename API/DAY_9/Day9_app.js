
//Quran Cloud API :  http://api.alquran.cloud/v1/ayah/262

/*
//XML Http Request object

//Step1: Initialize
const request = new XMLHttpRequest();

//Step 2: Request
//Open Method
request.open("GET", 'http://api.alquran.cloud/v1/ayah/262');

//Step 3: Send
request.send();

//Step 4: Get Response
request.addEventListener('load', function () {
    //console.log(this.responseText);
    const response = JSON.parse(this.responseText);
    //console.log(response);
    const ayah = response.data.text;
    //console.log(ayah);
    document.getElementById('output').innerText = ayah;
})
*/





const submitBtn = document.getElementById('submit');
const input = document.getElementById('searchInput');
const output = document.getElementById('output');
const outputT = document.getElementById('outputT');
const btnT = document.getElementById('translationBtn');
const reciteBtn = document.getElementById('audio');

function reciteAyah(ayahNo) {
    const request = new XMLHttpRequest();
    request.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNo}/ar.alafasy`);
    request.send();
    request.addEventListener('load', function () {
        const response = JSON.parse(this.responseText);
        const audio = response.data.audio;
        
    })
}

reciteBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const ayahNo = input.value;
    reciteAyah(ayahNo);
})

function getAyah(ayahNo) {

    const request = new XMLHttpRequest();
    request.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNo}`);
    request.send();
    request.addEventListener('load', function () {
        const response = JSON.parse(this.responseText);
        const ayah = response.data.text;      
        document.getElementById('output').innerText = ayah;
    })
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const ayahNumber = input.value;
    getAyah(ayahNumber);
})

function getTranslation(ayahNo) {

    const request = new XMLHttpRequest();
    request.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNo}/en.asad`);
    request.send();
    request.addEventListener('load', function () {
        const response = JSON.parse(this.responseText);
        const ayahT = response.data.text;
        document.getElementById('outputT').innerText = ayahT;
    })
}

btnT.addEventListener('click', function (e) {
    e.preventDefault();
    const ayahNumber = input.value;
    getTranslation(ayahNumber);
})

input.addEventListener('mouseup', function (e) {
    document.getElementById('outputT').innerText = '';
    document.getElementById('output').innerText = '';
})