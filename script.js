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
    
    if(document.getElementById("weatherapi-weather-widget-3")){
        document.getElementById("weatherapi-weather-widget-3").remove();
    }

    var newDiv = document.createElement('newDiv');
    newDiv.id='weatherapi-weather-widget-3';

    var scrpt = document.createElement('script');
    scrpt.id='widget';

    const checkTheme = document.querySelector('#chkboxTheme');
    const checkC = document.querySelector('#chkboxC');
    if(!checkTheme.checked){
        if (checkC.checked){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";
        }
    }else{
        if (checkC.checked){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=1&div=weatherapi-weather-widget-3";
        }
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

    const checkTheme = document.querySelector('#chkboxTheme');
    const checkC = document.querySelector('#chkboxC');
    
    if(!checkTheme.checked){
        if (checkC.checked){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";
        }
    }else{
        if (checkC.checked){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=1&div=weatherapi-weather-widget-3";
        }
    }

    var top = document.getElementById('section');
    top.appendChild(scrpt);
    
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

    const checkTheme = document.querySelector('#chkboxTheme');
    const checkC = document.querySelector('#chkboxC');
    
    if(!checkTheme.checked){
        if (checkC.checked){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=3&tu=1&div=weatherapi-weather-widget-3";
        }
    }else{
        if (checkC.checked){
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=2&div=weatherapi-weather-widget-3";
        }else{
            scrpt.src = "https://www.weatherapi.com/weather/widget.ashx?q="+search+"&wid=4&tu=1&div=weatherapi-weather-widget-3";
        }
    }

    var top = document.getElementById('section');
    top.appendChild(scrpt);
    
}

function loadCities(){
    var textElement = document.getElementById("txt");

    var ul = document.getElementById("unOrderList");
    ul.innerHTML = '';

    let cities = [];

    fetch('http://api.weatherapi.com/v1/search.json?key=3d2ffea9e0ad46138b383037231405&q='+(textElement.value))
    .then(response =>response.json())
    .then(json => {
        cities = json;

        cities.forEach((city,index)=>{
            console.log(index+" = "+city.name+" - "+city.region+" - "+city.country);
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.className="dropdown-item";
            a.innerHTML = city.name+", "+city.region+", "+city.country;
            li.appendChild(a);

            ul.appendChild(li);

            
        });
    });

    var city_selected = document.querySelector('#unOrderList');
    city_selected.addEventListener('click', function (e) {

        textElement.value = e.target.innerText
        search();
    });

    
}