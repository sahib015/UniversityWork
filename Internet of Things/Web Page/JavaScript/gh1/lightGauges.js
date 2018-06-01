var lightPlantZoneUrl = "http://shed.kent.ac.uk/device/gh1_plantzone_1_lux/10minute";
var lightSouthDoorUrl = "http://shed.kent.ac.uk/device/gh1_south_door_lux/10minute";
var lightNorthDoorUrl = "http://shed.kent.ac.uk/device/gh1_north_door_lux/10minute";


function drawLightPlantZoneGH1(){
  $.get(lightPlantZoneUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh1luxMin, greenTo:localStorage._gh1luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1lightGauge1'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightPlantZoneUrl,function(ndata){
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

function drawLightSouthDoorGH1(){
  $.get(lightSouthDoorUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh1luxMin, greenTo:localStorage._gh1luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1lightGauge2'));

      chart.draw(lightData, options);

      setInterval(function(){
        $.get(lightSouthDoorUrl,function(ndata){
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

function drawLightNorthDoorGH1(){
  $.get(lightNorthDoorUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom: localStorage._gh1luxMin, greenTo:localStorage._gh1luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1lightGauge3'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightNorthDoorUrl,function(ndata){
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
