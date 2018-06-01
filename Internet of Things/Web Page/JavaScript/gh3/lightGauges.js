var lightEastDoorUrl ="http://shed.kent.ac.uk/device/gh3_east_door_lux/10minute";
var lightSeedsUrl = "http://shed.kent.ac.uk/device/gh3_seed_lux/10minute";
var lightWestDoorUrl ="http://shed.kent.ac.uk/device/gh3_west_door_lux/10minute";

function drawLightEastDoorGH3(){
  $.get(lightEastDoorUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh3luxMin, greenTo:localStorage._gh3luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3lightGauge1'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightEastDoorUrl,function(ndata){
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

function drawLightSeedsGH3(){

  $.get(lightSeedsUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh3luxMin, greenTo:localStorage._gh3luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3lightGauge2'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightSeedsUrl,function(ndata){
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

function drawLightGagueWestDoorGH3(){
  $.get(lightWestDoorUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh3luxMin, greenTo:localStorage._gh3luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3lightGauge3'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightWestDoorUrl,function(ndata){
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
