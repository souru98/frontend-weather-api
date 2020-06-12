var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=721f1bf7346d1594961b9f09569d150a')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            // var iconcode = data['weather'][0]['icon'];


            main.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = tempValue;
            // $('#wicon').attr('src', iconurl);
            input.value = "";

        })

    .catch(err => alert("Wrong city name!"));
})