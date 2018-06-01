
var storeLightUrl ="http://shed.kent.ac.uk/device/house_store_lux/10minute";
function drawLightStoreRoom(){
  $.get(storeLightUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: 100, greenTo:550,
          minorTicks: 5,
          max: 1000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('storeRoomLightGauge'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(storeLightUrl,function(ndata){
          var lightReading = ndata.light_value;
          var lastLightData = lightReading[lightReading.length-1][1];

          console.log(lastLightData);
          if(lastLightData != null){
            lightData.setValue(0, 1,lastLightData);
            chart.draw(lightData, options);
          }

        },"JSON");
      }
        ,5000);
}, "JSON");
}
