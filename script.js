let count = 0;
let changeCount = 0;
let changeCToFCount = 0;
function search(){
    var search = document.getElementById("txt").value;
    let size = 12;
    if (search == null || search == ""){
        search = "Sri Lanka";
    }

    if (search == "Sri Lanka" || search == "sri lanka" || search == "srilanka" || search == "sl" || search == "SL" ){
        size = 8;
    }

    var map = document.getElementById("gmap_canvas");

    var widget = document.getElementById('widget');
    widget.remove();

    var top = document.getElementById('section');
       
    map.src = "https://maps.google.com/maps?q="+search+"&t=&z="+size+"&ie=UTF8&iwloc=&output=embed";
    
    if (count>0){
        var element = document.getElementById("weatherapi-weather-widget-3");
        element.remove();
    }
    count++;

    var newDiv = document.createElement('newDiv');
    newDiv.id='weatherapi-weather-widget-3';

    var scrpt = document.createElement('script');
    scrpt.id='widget';
    if(changeCount%2 == 0){
        scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";
    }else{
        scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=1&div=weatherapi-weather-widget-3";
    }

    top.appendChild(scrpt);
    top.appendChild(newDiv);
}

function changeTheme(){
    var element = document.getElementById("main");
    element.classList.toggle("body-light");

    var search = document.getElementById("txt").value;
    let size = 12;
    if (search == null || search == ""){
        search = "Sri Lanka";
    }

    if (search == "Sri Lanka" || search == "sri lanka" || search == "srilanka" || search == "sl" || search == "SL" ){
        size = 8;
    }


    var scrpt =  document.getElementById("widget");
    scrpt.remove();
    scrpt = document.createElement("script");
    scrpt.id = "widget";
    if(changeCount%2 == 1){
        if (changeCToFCount%2 == 1){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";
        }
    }else{
        if (changeCToFCount%2 == 1){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=1&div=weatherapi-weather-widget-3";
        }
    }

    var top = document.getElementById('section');
    top.appendChild(scrpt);
    changeCount++;
}
function changeCToF(){
    var search = document.getElementById("txt").value;
    let size = 12;
    if (search == null || search == ""){
        search = "Sri Lanka";
    }

    if (search == "Sri Lanka" || search == "sri lanka" || search == "srilanka" || search == "sl" || search == "SL" ){
        size = 8;
    }


    var scrpt =  document.getElementById("widget");
    scrpt.remove();
    scrpt = document.createElement("script");
    scrpt.id = "widget";
    if(changeCount%2 == 0){
        if (changeCToFCount%2 == 0){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";
        }
    }else{
        if (changeCToFCount%2 == 0){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=1&div=weatherapi-weather-widget-3";
        }
    }

    var top = document.getElementById('section');
    top.appendChild(scrpt);
    changeCToFCount++;
}