var gh1GasGaugeUrl ="http://shed.kent.ac.uk/device/gh1_co2Production_gas/hour";

function drawGasGaugeGH1(){
  $.get(gh1GasGaugeUrl, function (data) {
      var gasReading = data.gas_values;
      var lastData = gasReading[gasReading.length-1][1];

      console.log(lastData);

      var gasData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['(ppm)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh1gasMin, greenTo: localStorage._gh1gasMax,
          minorTicks: 5,
          max: 10000,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh1GasGauge'));

      chart.draw(gasData, options);
      setInterval(function(){
        $.get(gh1GasGaugeUrl,function(ndata){
          var gasReading = ndata.gas_values;
          var lastGasData = gasReading[gasReading.length-1][1];

          console.log(lastGasData);
          if(lastGasData != null){
            gasData.setValue(0, 1,lastGasData);
            chart.draw(gasData, options);
          }

        },"JSON");
      }
        ,5000);


},"JSON");
}
