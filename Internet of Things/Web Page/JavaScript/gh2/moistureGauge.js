var moisturePlantzoneUrl="http://shed.kent.ac.uk/device/gh2_plantzone_1_moisture/hour";
var moistureMainsUrl = "http://shed.kent.ac.uk/device/gh2_mains_moisture/hour";

function drawMoisturePlantZoneGH2(){


    $.get(moisturePlantzoneUrl, function (data) {
        var moistureReading = data.moisture_value;
        var lastData = moistureReading[moistureReading.length-1][1];

        console.log(lastData);

        var mdata = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Moisture  (%vwc)', lastData]
        ]);


        var options = {
            width: 400, height: 120,
            greenFrom: localStorage._gh2moistureMin, greenTo:localStorage._gh2moistureMax,
            minorTicks: 5,
            max: 50,
            min: 0
        };

        var chart = new google.visualization.Gauge(document.getElementById('gh2MoistureGuage1'));

        chart.draw(mdata, options);

        setInterval(function(){
          $.get(moisturePlantzoneUrl,function(ndata){
            var moistureReading = ndata.moisture_value;
            var lastMoistureData = moistureReading[moistureReading.length-1][1];

            console.log(lastMoistureData);
            if(lastMoistureData != null){
              mdata.setValue(0, 1,lastMoistureData);
              chart.draw(mdata, options);
            }

          },"JSON");
        }
          ,5000);


    }, "JSON");
}

function drawMoistureMainsGH2(){


        $.get(moistureMainsUrl, function (data) {
            var moistureReading = data.moisture_value;
            var lastData = moistureReading[moistureReading.length-1][1];

            console.log(lastData);

            var mdata = google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ['Moisture  (%vwc)', lastData]
            ]);


            var options = {
                width: 400, height: 120,
                greenFrom: localStorage._gh2moistureMin, greenTo:localStorage._gh2moistureMax,
                minorTicks: 5,
                max: 50,
                min: 0
            };

            var chart = new google.visualization.Gauge(document.getElementById('gh2MoistureGuage2'));

            chart.draw(mdata, options);

            setInterval(function(){
              $.get(moistureMainsUrl,function(ndata){
                var moistureReading = ndata.moisture_value;
                var lastMoistureData = moistureReading[moistureReading.length-1][1];

                console.log(lastMoistureData);
                if(lastMoistureData != null){
                  mdata.setValue(0, 1,lastMoistureData);
                  chart.draw(mdata, options);
                }

              },"JSON");
            }
              ,5000);


        }, "JSON");
    }
