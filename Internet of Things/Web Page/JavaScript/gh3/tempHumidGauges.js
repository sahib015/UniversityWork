var tempHumidSeedUrl = "http://shed.kent.ac.uk/device/gh3_seed_temp/10minute";
var tempHumidEastDoorUrl = "http://shed.kent.ac.uk/device/gh3_east_door_temp/10minute";
var tempHumidWestDoorUrl = "http://shed.kent.ac.uk/device/gh3_west_door_temp/10minute";

function drawTempGaugeEastDoorGH3(){

  $.get(tempHumidEastDoorUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      console.log(lastData);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3tempMin, greenTo: localStorage._gh3tempMax,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3tempGauge1'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(tempHumidEastDoorUrl,function(ndata){
          var temperatureReading = ndata.temperature_value;
          var lastTempData = temperatureReading[temperatureReading.length-1][1];

          console.log(lastTempData);
          if(lastTempData != null){
            tempdata.setValue(0, 1,lastTempData);
            chart.draw(tempdata, options);

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}

function drawTempGaugeSeedsGH3(){
  $.get(tempHumidSeedUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      // convert last data from kelvin to celcius

      var convertedVal =lastData-273.15;

      console.log(convertedVal);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', convertedVal]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3tempMin, greenTo: localStorage._gh3tempMax,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3tempGauge2'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(tempHumidSeedUrl,function(ndata){
          var temperatureReading = ndata.temperature_value;
          var lastTempData = temperatureReading[temperatureReading.length-1][1];
          var refreshedConvertedVal = lastTempData -273.15
          console.log(refreshedConvertedVal);
          if(lastTempData != null){
            tempdata.setValue(0, 1,refreshedConvertedVal);
            chart.draw(tempdata, options);

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}

function drawTempGaugeWestDoorGH3(){
  $.get(tempHumidWestDoorUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      console.log(lastData);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3tempMin, greenTo: localStorage._gh3tempMax,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3tempGauge3'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(tempHumidWestDoorUrl,function(ndata){
          var temperatureReading = ndata.temperature_value;
          var lastTempData = temperatureReading[temperatureReading.length-1][1];

          console.log(lastTempData);
          if(lastTempData != null){
            tempdata.setValue(0, 1,lastTempData);
            chart.draw(tempdata, options);

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}

function drawHumidGaugeEastDoorGH3(){
  $.get(tempHumidEastDoorUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity (%)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3humidMin, greenTo: localStorage._gh3humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3humidGauge1'));

      chart.draw(humidData, options);

      setInterval(function(){
        $.get(tempHumidEastDoorUrl,function(ndata){
          var humidityReading = ndata.humidity_value;
          var lastHumidData = humidityReading[humidityReading.length-1][1];

          console.log(lastHumidData);
          if(lastHumidData != null){
            humidData.setValue(0, 1,lastHumidData);
            chart.draw(humidData, options)
            ;

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}

function drawHumidGaugeSeedsGH3(){

  $.get(tempHumidSeedUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity (%)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3humidMin, greenTo: localStorage._gh3humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3humidGauge2'));

      chart.draw(humidData, options);

      setInterval(function(){
        $.get(tempHumidSeedUrl,function(ndata){
          var humidityReading = ndata.humidity_value;
          var lastHumidData = humidityReading[humidityReading.length-1][1];

          console.log(lastHumidData);
          if(lastHumidData != null){
            humidData.setValue(0, 1,lastHumidData);
            chart.draw(humidData, options)
            ;

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}

function drawHumidGaugeWestDoorGH3(){
  $.get(tempHumidWestDoorUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity(%)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3humidMin, greenTo: localStorage._gh3humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3humidGauge3'));

      chart.draw(humidData, options);

      setInterval(function(){
        $.get(tempHumidWestDoorUrl,function(ndata){
          var humidityReading = ndata.humidity_value;
          var lastHumidData = humidityReading[humidityReading.length-1][1];

          console.log(lastHumidData);
          if(lastHumidData != null){
            humidData.setValue(0, 1,lastHumidData);
            chart.draw(humidData, options)
            ;

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}
