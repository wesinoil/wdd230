const apikey = '1e92c2f0f176d6aa961e863c91cfffdd';
const cityid = "524901";


const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${apikey}`;
fetch(apiURL)
    .then((response) => response.json())
        if (response.ok) {
            console.log('Success')
        } else {
            console.log("Not Successful")
        }
    .then((jsObject) => {
        console.log(jsObject)
        .catch(error => console.log ('ERROR'));

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#current-temp').textContent = jsObject.main.temp;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;

    });


