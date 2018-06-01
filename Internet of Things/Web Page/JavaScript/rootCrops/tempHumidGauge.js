var outsideTempHumidUrl = "http://shed.kent.ac.uk/device/outside_field_temp/10minute";

function drawTempGaugeRootCrops(){
  $.get(outsideTempHumidUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      console.log(lastData);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:13, greenTo: 23,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('outsideTempGauge'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(outsideTempHumidUrl,function(ndata){
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

function drawHumidGaugeRootCrops(){
  $.get(outsideTempHumidUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:47, greenTo: 67,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('outsideHumidGauge'));

      chart.draw(humidData, options);

      setInterval(function(){
        $.get(outsideTempHumidUrl,function(ndata){
          var humidityReading = ndata.humidity_value;
          var lastHumidData = humidityReading[humidityReading.length-1][1];

          console.log(lastHumidData);
          if(lastHumidData != null){
            humidData.setValue(0, 1,lastHumidData);
            chart.draw(humidData, options);

          }
        },"JSON");
      }
        ,5000);

  }, "JSON");
}
