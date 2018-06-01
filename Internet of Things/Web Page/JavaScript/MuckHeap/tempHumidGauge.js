var muckHeapTempHumidUrl ="http://shed.kent.ac.uk/device/outside_heap_temp/10minute";

function drawTempGaugeMuckHeap(){
  $.get(muckHeapTempHumidUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      console.log(lastData);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:35, greenTo: 40,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('muckHeapTempGauge'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(muckHeapTempHumidUrl,function(ndata){
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
function drawHUmidGaugeMuckHeap(){
  $.get(muckHeapTempHumidUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidDataPlantZone = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity(%)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom: 75, greenTo: 85,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('muckHeaphumidGauge'));

      chart.draw(humidDataPlantZone, options);
      setInterval(function(){
        $.get(muckHeapTempHumidUrl,function(ndata){
          var humidiityReading = ndata.humidity_value;
          var lastHumidData = humidityReading[humidityReading.length-1][1];

          console.log(lastHumidData);
          if(lastHumidData != null){
            humidDataPlantZone.setValue(0, 1,lastHumidData);
            chart.draw(humidDataPlantZone, options);
          }

        },"JSON");
      }
        ,5000);


  }, "JSON");
}
