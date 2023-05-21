let count = 0;
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
    scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";

    top.appendChild(scrpt);
    top.appendChild(newDiv);
}

function changeTheme(){
    var element = document.getElementById("main");
    element.classList.toggle("body-light");
}