var lightPlantzoneUrl ="http://shed.kent.ac.uk/device/gh2_plantzone_1_lux/10minute";
var lightNorthDoorUrl = "http://shed.kent.ac.uk/device/gh2_north_door_lux/10minute";
var lightMainsUrl ="http://shed.kent.ac.uk/device/gh2_mains_lux/10minute";
var lightSouthDoorUrl = "http://shed.kent.ac.uk/device/gh2_south_door_lux/10minute";

function drawLightPlantzoneGH2(){
  $.get(lightPlantzoneUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh2luxMin, greenTo:localStorage._gh2luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh2lightGauge1'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightPlantzoneUrl,function(ndata){
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

function drawNorthDoorGH2(){

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
            greenFrom: localStorage._gh2luxMin, greenTo:localStorage._gh2luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh2lightGauge2'));

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

function drawLightMainsGH2(){
  $.get(lightMainsUrl, function (data) {
      var lightReading = data.light_value;
      var lastData = lightReading[lightReading.length-1][1];

      console.log(lastData);

      var lightData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Lux', lastData]
      ]);


      var options = {
          width: 400, height: 120,
            greenFrom: localStorage._gh2luxMin, greenTo:localStorage._gh2luxMax,
          minorTicks: 5,
          max: 25000,
          min: 100
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh2lightGauge3'));

      chart.draw(lightData, options);
      setInterval(function(){
        $.get(lightMainsUrl,function(ndata){
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

function drawLightSouthDoorGH2(){
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
              greenFrom: localStorage._gh2luxMin, greenTo:localStorage._gh2luxMax,
            minorTicks: 5,
            max: 25000,
            min: 100
        };

        var chart = new google.visualization.Gauge(document.getElementById('gh2lightGauge4'));

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
