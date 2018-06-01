var solarUrl = "http://shed.kent.ac.uk/device/outside_shed_solar/hour";

function drawSolar(){
  $.get(solarUrl, function (data) {
      var lightReading = data.solar_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Watts', lastData]
      ]);


      var options = {
          width: 100, height: 100,
          redFrom:0, redTo:50,
          yellowFrom:50, yellowTo:150,
          greenFrom:150, greenTo:2500,
          minorTicks: 5,
          max: 2500,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('solarLightGauge'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(solarUrl,function(ndata){
          var lightReading = ndata.solar_value;
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
