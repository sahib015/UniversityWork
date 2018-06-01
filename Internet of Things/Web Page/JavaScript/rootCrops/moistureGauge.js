var moistureRootCropsUrl="http://shed.kent.ac.uk/device/outside_field_moisture/hour";

function drawMoistureGaugeRootCrops(){


    $.get(moistureRootCropsUrl, function (data) {
        var moistureReading = data.moisture_value;
        var lastData = moistureReading[moistureReading.length-1][1];

        console.log(lastData);

        var mdata = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Moisture  (%vwc)', lastData]
        ]);


        var options = {
            width: 400, height: 120,
            greenFrom: 60, greenTo:75,
            minorTicks: 5,
            max: 100,
            min: 0
        };

        var chart = new google.visualization.Gauge(document.getElementById('rootCropsMoistureGauge'));

        chart.draw(mdata, options);

        setInterval(function(){
          $.get(moistureRootCropsUrl,function(ndata){
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
