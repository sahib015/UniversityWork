var tempHumidMainsUrl = "http://shed.kent.ac.uk/device/gh2_mains_temp/10minute";
var tempHumidNorthDoorUrl = "http://shed.kent.ac.uk/device/gh2_north_door_temp/10minute";
var tempHumidSouthDoorUrl = "http://shed.kent.ac.uk/device/gh2_south_door_temp/10minute";
var tempHumidPlantzoneUrl = "http://shed.kent.ac.uk/device/gh2_plantzone_1_temp/10minute";

function drawTempGaugeMainsGH2(){

  $.get(tempHumidMainsUrl, function (data) {
      var temperatureReading = data.temperature_value;
      var lastData = temperatureReading[temperatureReading.length-1][1];

      console.log(lastData);

      var tempdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp (C)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh2tempMin, greenTo: localStorage._gh2tempMax,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh2tempGauge1'));

      chart.draw(tempdata, options);

      setInterval(function(){
        $.get(tempHumidMainsUrl,function(ndata){
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

function drawTempGaugeNorthDoorGH2(){
    
      $.get(tempHumidNorthDoorUrl, function (data) {
          var temperatureReading = data.temperature_value;
          var lastData = temperatureReading[temperatureReading.length-1][1];
    
          console.log(lastData);
    
          var tempdata = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['Temp (C)', lastData]
          ]);
    
    
          var options = {
              width: 400, height: 120,
              greenFrom:localStorage._gh2tempMin, greenTo: localStorage._gh2tempMax,
              minorTicks: 5,
              max: 50,
              min: 0
          };
    
          var chart = new google.visualization.Gauge(document.getElementById('gh2tempGauge2'));
    
          chart.draw(tempdata, options);
    
          setInterval(function(){
            $.get(tempHumidNorthDoorUrl,function(ndata){
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

function drawTempGaugeSouthDoorGH2(){
    
      $.get(tempHumidSouthDoorUrl, function (data) {
          var temperatureReading = data.temperature_value;
          var lastData = temperatureReading[temperatureReading.length-1][1];
    
          console.log(lastData);
    
          var tempdata = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['Temp (C)', lastData]
          ]);
    
    
          var options = {
              width: 400, height: 120,
              greenFrom:localStorage._gh2tempMin, greenTo: localStorage._gh2tempMax,
              minorTicks: 5,
              max: 50,
              min: 0
          };
    
          var chart = new google.visualization.Gauge(document.getElementById('gh2tempGauge3'));
    
          chart.draw(tempdata, options);
    
          setInterval(function(){
            $.get(tempHumidSouthDoorUrl,function(ndata){
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

function drawTempGaugePlantzoneGH2(){
    
      $.get(tempHumidPlantzoneUrl, function (data) {
          var temperatureReading = data.temperature_value;
          var lastData = temperatureReading[temperatureReading.length-1][1];
    
          console.log(lastData);
    
          var tempdata = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['Temp (C)', lastData]
          ]);
    
    
          var options = {
              width: 400, height: 120,
              greenFrom:localStorage._gh2tempMin, greenTo: localStorage._gh2tempMax,
              minorTicks: 5,
              max: 50,
              min: 0
          };
    
          var chart = new google.visualization.Gauge(document.getElementById('gh2tempGauge4'));
    
          chart.draw(tempdata, options);
    
          setInterval(function(){
            $.get(tempHumidPlantzoneUrl,function(ndata){
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

function drawHumidGaugeMainsGH2(){
  
    $.get(tempHumidMainsUrl, function (data) {
        var humidityReading = data.humidity_value;
        var lastData = humidityReading[humidityReading.length-1][1];
  
        console.log(lastData);
  
        var humidDataPlantZone = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Humidity(%)', lastData]
        ]);
  
  
        var options = {
            width: 400, height: 120,
          greenFrom: localStorage._gh2humidMin, greenTo: localStorage._gh2humidMax,
            minorTicks: 5,
            max: 100,
            min: 0
        };
  
        var chart = new google.visualization.Gauge(document.getElementById('gh2humidGauge1'));
  
        chart.draw(humidDataPlantZone, options);
  
        setInterval(function(){
          $.get(tempHumidMainsUrl,function(ndata){
            var humidiityReading = ndata.humidity_value;
            var lastHumidData = humidityReading[humidityReading.length-1][1];
  
            console.log(lastHumidData);
            if(lastHumidData !=null){
              humidDataPlantZone.setValue(0, 1,lastHumidData);
              chart.draw(humidDataPlantZone, options);
            }
  
          },"JSON");
        }
          ,5000);
  
    }, "JSON");
}

function drawHumidGaugeNorthDoorGH2(){
  
    $.get(tempHumidNorthDoorUrl, function (data) {
        var humidityReading = data.humidity_value;
        var lastData = humidityReading[humidityReading.length-1][1];
  
        console.log(lastData);
  
        var humidDataPlantZone = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Humidity(%)', lastData]
        ]);
  
  
        var options = {
            width: 400, height: 120,
          greenFrom: localStorage._gh2humidMin, greenTo: localStorage._gh2humidMax,
            minorTicks: 5,
            max: 100,
            min: 0
        };
  
        var chart = new google.visualization.Gauge(document.getElementById('gh2humidGauge2'));
  
        chart.draw(humidDataPlantZone, options);
  
        setInterval(function(){
          $.get(tempHumidNorthDoorUrl,function(ndata){
            var humidiityReading = ndata.humidity_value;
            var lastHumidData = humidityReading[humidityReading.length-1][1];
  
            console.log(lastHumidData);
            if(lastHumidData !=null){
              humidDataPlantZone.setValue(0, 1,lastHumidData);
              chart.draw(humidDataPlantZone, options);
            }
  
          },"JSON");
        }
          ,5000);
  
    }, "JSON");
}

function drawHumidGaugeSouthDoorGH2(){
  
    $.get(tempHumidSouthDoorUrl, function (data) {
        var humidityReading = data.humidity_value;
        var lastData = humidityReading[humidityReading.length-1][1];
  
        console.log(lastData);
  
        var humidDataPlantZone = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Humidity(%)', lastData]
        ]);
  
  
        var options = {
            width: 400, height: 120,
          greenFrom: localStorage._gh2humidMin, greenTo: localStorage._gh2humidMax,
            minorTicks: 5,
            max: 100,
            min: 0
        };
  
        var chart = new google.visualization.Gauge(document.getElementById('gh2humidGauge3'));
  
        chart.draw(humidDataPlantZone, options);
  
        setInterval(function(){
          $.get(tempHumidSouthDoorUrl,function(ndata){
            var humidiityReading = ndata.humidity_value;
            var lastHumidData = humidityReading[humidityReading.length-1][1];
  
            console.log(lastHumidData);
            if(lastHumidData !=null){
              humidDataPlantZone.setValue(0, 1,lastHumidData);
              chart.draw(humidDataPlantZone, options);
            }
  
          },"JSON");
        }
          ,5000);
  
    }, "JSON");
}

function drawHumidGaugePlantzoneGH2(){
  
    $.get(tempHumidPlantzoneUrl, function (data) {
        var humidityReading = data.humidity_value;
        var lastData = humidityReading[humidityReading.length-1][1];
  
        console.log(lastData);
  
        var humidDataPlantZone = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Humidity(%)', lastData]
        ]);
  
  
        var options = {
            width: 400, height: 120,
          greenFrom: localStorage._gh2humidMin, greenTo: localStorage._gh2humidMax,
            minorTicks: 5,
            max: 100,
            min: 0
        };
  
        var chart = new google.visualization.Gauge(document.getElementById('gh2humidGauge4'));
  
        chart.draw(humidDataPlantZone, options);
  
        setInterval(function(){
          $.get(tempHumidPlantzoneUrl,function(ndata){
            var humidiityReading = ndata.humidity_value;
            var lastHumidData = humidityReading[humidityReading.length-1][1];
  
            console.log(lastHumidData);
            if(lastHumidData !=null){
              humidDataPlantZone.setValue(0, 1,lastHumidData);
              chart.draw(humidDataPlantZone, options);
            }
  
          },"JSON");
        }
          ,5000);
  
    }, "JSON");
}