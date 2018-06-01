
var tempHumidPlantZoneUrl = "http://shed.kent.ac.uk/device/gh1_plantzone_1_temp/10minute";
var tempHumidCO2ProdcutionUrl = "http://shed.kent.ac.uk/device/gh1_co2Production_temp/10minute";
var tempHumidSouthDoorUrl = "http://shed.kent.ac.uk/device/gh1_south_door_temp/10minute";
var tempHumidNorthDoorUrl = "http://shed.kent.ac.uk/device/gh1_north_door_temp/10minute";

function drawTempGaugePlantZoneGH1() {

    $.get(tempHumidPlantZoneUrl, function (data) {
        var temperatureReading = data.temperature_value;
        var lastData = temperatureReading[temperatureReading.length-1][1];

        console.log(lastData);

        var tempdata = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Temp (C)', lastData]
        ]);


        var options = {
            width: 400, height: 120,
            greenFrom:localStorage._gh1tempMin, greenTo: localStorage._gh1tempMax,
            minorTicks: 5,
            max: 50,
            min: 0
        };

        var chart = new google.visualization.Gauge(document.getElementById('gh1tempGauge1'));

        chart.draw(tempdata, options);

        setInterval(function(){
          $.get(tempHumidPlantZoneUrl,function(ndata){
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


function drawTempGaugeCO2ProductionGH1() {

    $.get(tempHumidCO2ProdcutionUrl, function (data) {
        var temperatureReading = data.temperature_value;
        var lastData = temperatureReading[temperatureReading.length-1][1];

        console.log(lastData);

        var tempdata = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Temp (C)', lastData]
        ]);


        var options = {
            width: 400, height: 120,

            greenFrom:localStorage._gh1tempMin, greenTo: localStorage._gh1tempMax,
            minorTicks: 5,
            max: 50,
            min: 0
        };

        var chart = new google.visualization.Gauge(document.getElementById('gh1tempGauge2'));

        chart.draw(tempdata, options);

        setInterval(function(){
          $.get(tempHumidCO2ProdcutionUrl,function(ndata){
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

function drawTempGaugeSouthDoorGH1(){
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

          greenFrom:localStorage._gh1tempMin, greenTo: localStorage._gh1tempMax,
          minorTicks: 5,
          max: 50,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1tempGauge3'));

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


function drawTempGaugeNorthDoorGH1(){
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
          greenFrom:localStorage._gh1tempMin, greenTo: localStorage._gh1tempMax,
          minorTicks: 5,
          max: 50,
          min:0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1tempGauge4'));

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

function drawHumidGaugePlantZoneGH1(){

  $.get(tempHumidPlantZoneUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidDataPlantZone = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity(%)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
        greenFrom: localStorage._gh1humidMin, greenTo: localStorage._gh1humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1humidGauge1'));

      chart.draw(humidDataPlantZone, options);

      setInterval(function(){
        $.get(tempHumidPlantZoneUrl,function(ndata){
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

function drawHumidGaugeCO2ProductionGH1(){

  $.get(tempHumidPlantZoneUrl, function (data) {
      var humidityReading = data.humidity_value;
      var lastData = humidityReading[humidityReading.length-1][1];

      console.log(lastData);

      var humidDataPlantZone = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity(%)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom: localStorage._gh1humidMin, greenTo: localStorage._gh1humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1humidGauge2'));

      chart.draw(humidDataPlantZone, options);

      setInterval(function(){
        $.get(tempHumidCO2ProdcutionUrl,function(ndata){
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

function drawHumidGaugeSouthDoorGH1(){
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
          greenFrom: localStorage._gh1humidMin, greenTo: localStorage._gh1humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1humidGauge3'));


            chart.draw(humidDataPlantZone, options);

            setInterval(function(){
              $.get(tempHumidSouthDoorUrl,function(ndata){
                var humidiityReading = ndata.humidity_value;
                var lastHumidData = humidityReading[humidityReading.length-1][1];

                console.log(lastHumidData);
                if(lastHumidData != null){
                  humidDataPlantZone.setValue(0, 1,lastHumidData);
                  chart.draw(humidDataPlantZone, options);
                }else{

                }

              },"JSON");
            }
              ,5000);

  }, "JSON");
}


function drawHumidGaugeNorthDoorGH1(){
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
          greenFrom: localStorage._gh1humidMin, greenTo: localStorage._gh1humidMax,
          minorTicks: 5,
          max: 100,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1humidGauge4'));

      chart.draw(humidDataPlantZone, options);
      setInterval(function(){
        $.get(tempHumidNorthDoorUrl,function(ndata){
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
