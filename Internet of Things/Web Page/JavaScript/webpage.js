function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
       e.style.display = 'none';
        
   else
      e.style.display = 'block';
}

function getWeatherData(){
    init();
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(51.307599%2C1.103018)%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        $.get(url,function(data){
        var forecast = data.query.results.channel.item.forecast;
        var sunrise = data.query.results.channel.astronomy.sunrise;
        var sunset = data.query.results.channel.astronomy.sunset;
        for(var x = 0;x<7;x++){
            var celcuisH = (forecast[x].high-32) * (5 / 9);
            var celcuisHRound = Math.round(celcuisH);
            var celcuisL = (forecast[x].low-32) * (5 / 9);
            var celcuisLRound = Math.round(celcuisL);
            var weatherLogo;
            if(forecast[x].text == 'Cloudy'||forecast[x].text == 'Partly Cloudy'||forecast[x].text == 'Mostly Cloudy'){
                weatherLogo = 'Photos/cloudy.png';
            }
            else if(forecast[x].text == 'Rain'||forecast[x].text == 'Showers'|| forecast[x].text == 'Scattered Showers'){
                weatherLogo = 'Photos/rain.png';
            }
            else if(forecast[x].text == 'Breezy'){
                weatherLogo = 'Photos/windy.png';
            }
            else if(forecast[x].text == 'Mostly Sunny'|| forecast[x].text == 'Sunny'){
                weatherLogo = 'Photos/sunny.png';
            }
            else if(forecast[x].text == 'Rain And Snow'|| forecast[x].text == 'Snow'){
                weatherLogo = 'Photos/Snow.png';
            }
            else{
                weatherLogo = 'Photos/weather.png';
            }
            document.getElementById('weatherRow').innerHTML += '<td><img src="'+weatherLogo+'" width="50px;"><p>'+forecast[x].day+' '+forecast[x].date+'</p><p><b>'+forecast[x].text+'</b></p><p>High: '+celcuisHRound+'&#8451 Low: '+celcuisLRound+'&#8451</p></td>';
         }
        },"JSON");
    getSunRiseOrSet();
    }

function getSunRiseOrSet(){
    
    var urlTod = 'https://api.sunrise-sunset.org/json?lat=51.307599&lng=1.103018&date=today';
    var urlTom = 'https://api.sunrise-sunset.org/json?lat=51.307599&lng=1.103018&date=tomorrow';
    
    $.get(urlTod,function(data1){
        document.getElementById("todaySunTitle").innerHTML='<b>Today</b>';
        document.getElementById("sunRiseTod").innerHTML= 'Sunrise: '+ data1.results.sunrise;
            document.getElementById("sunSetTod").innerHTML= 'Sunset: '+ data1.results.sunset;
    },"JSON");
    $.get(urlTom,function(data2){
        document.getElementById("tomorSunTitle").innerHTML='<b>Tomorrow</b>';
        document.getElementById("sunRiseTom").innerHTML= 'Sunrise: '+ data2.results.sunrise;
            document.getElementById("sunSetTom").innerHTML= 'Sunset: '+ data2.results.sunset;
    },"JSON");
}

function openGH1Window(){
    toggle_visibility('popup-greenHouse1');
}