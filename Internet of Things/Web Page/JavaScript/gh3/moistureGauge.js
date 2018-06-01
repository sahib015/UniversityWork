var moistureGh3Url="http://shed.kent.ac.uk/device/gh3_seed_moisture/hour";

function drawMoistureGaugeGH3(){


    $.get(moistureGh3Url, function (data) {
        var moistureReading = data.moisture_value;
        var lastData = moistureReading[moistureReading.length-1][1];

        console.log(lastData);

        var mdata = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Moisture  (%vwc)', lastData]
        ]);


        var options = {
            width: 400, height: 120,
            greenFrom: localStorage._gh3moistureMin, greenTo:localStorage._gh3moistureMax,
            minorTicks: 5,
            max: 50,
            min: 0
        };

        var chart = new google.visualization.Gauge(document.getElementById('gh3MoustureGuage'));

        chart.draw(mdata, options);

        setInterval(function(){
          $.get(moistureGh3Url,function(ndata){
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
