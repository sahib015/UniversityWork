var storeTempHumidUrl ="http://shed.kent.ac.uk/device/house_store_temp/10minute";

function drawStoreRoomTempGauge(){
  $.get(storeTempHumidUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      console.log(lastData);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._storeRoomtempMin, greenTo: localStorage._storeRoomtempMax,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('storeRoomtempHumidGauge'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(storeTempHumidUrl,function(ndata){
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

function drawStoreRoomHumidGauge(){
  $.get(storeTempHumidUrl, function (data) {
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

      var chart = new google.visualization.Gauge(document.getElementById('storeRoomhumidGauge'));

      chart.draw(humidData, options);

      setInterval(function(){
        $.get(storeTempHumidUrl,function(ndata){
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
