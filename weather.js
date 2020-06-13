$(document).ready(function() {
    $("#btn").click(weather);

    function weather() {
        var text = $("#txt1").val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" +
                text +
                "&units=metric" +
                "&APPID=721f1bf7346d1594961b9f09569d150a",
            type: "GET",
            datatype: "jsonp",
            success: function(data) {
                console.log(data);
                document.getElementById("show").innerHTML = data.main.temp + " &#8451;";

                document.getElementById("show2").innerHTML =
                    text + "," + data.sys.country;

                document.getElementById("show3").innerHTML =
                    data.weather[0].description;
                var icon =
                    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                document.getElementById("icon").src = icon;
                time();
            },
        });
    }
});

function time() {
    //time function
    var today = new Date(); //time object
    var weekday = new Array(7); // to get day
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[today.getDay()];
    var h = today.getHours(); //hour
    var m = today.getMinutes(); //minutes
    var s = today.getSeconds(); //sec
    var z = today.getDay();
    var x = today.getMonth();
    var y = today.getFullYear();
    m = checkTime(m); //to add zero when value is below 10
    s = checkTime(s); //          ""
    document.getElementById("show1").innerHTML =
        n + " , " + h + ":" + m + ":" + s; //time and day
    var t = setTimeout(time, 500);
} //
function checkTime(i) {
    //to add zero when value is below 10
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Alternative

// var input = document.querySelector(".input_text");
// var main = document.querySelector("#name");
// var temp = document.querySelector(".temp");
// var desc = document.querySelector(".desc");
// var clouds = document.querySelector(".clouds");
// var button = document.querySelector(".submit");
// // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

// button.addEventListener("click", function(name) {
//     fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q=" +
//             input.value +
//             "&appid=721f1bf7346d1594961b9f09569d150a"
//         )
//         .then((response) => response.json())
//         .then((data) => {
//             var tempValue = data["main"]["temp"];
//             var nameValue = data["name"];
//             var descValue = data["weather"][0]["description"];
//             // var iconcode = data['weather'][0]['icon'];

//             main.innerHTML = nameValue;
//             desc.innerHTML = descValue;
//             temp.innerHTML = tempValue;
//             // $('#wicon').attr('src', iconurl);
//             input.value = "";
//         })

//     .catch((err) => alert("Wrong city name!"));
// });