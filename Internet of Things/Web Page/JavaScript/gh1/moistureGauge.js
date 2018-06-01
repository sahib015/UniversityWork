var moistureGh1Url="http://shed.kent.ac.uk/device/gh1_plantzone_1_moisture/hour";

function drawMoistureGaugeGH1(){


    $.get(moistureGh1Url, function (data) {
        var moistureReading = data.moisture_value;
        var lastData = moistureReading[moistureReading.length-1][1];

        console.log(lastData);

        var mdata = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Moisture  (%vwc)', lastData]
        ]);


        var options = {
            width: 400, height: 120,
            greenFrom: localStorage._gh1moistureMin, greenTo:localStorage._gh1moistureMax,
            minorTicks: 5,
            max: 50,
            min: 0
        };

        var chart = new google.visualization.Gauge(document.getElementById('gh1MoustureGuage'));

        chart.draw(mdata, options);

        setInterval(function(){
          $.get(moistureGh1Url,function(ndata){
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
