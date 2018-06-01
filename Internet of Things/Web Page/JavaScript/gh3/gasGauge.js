var gh3GasGaugeUrl ="http://shed.kent.ac.uk/device/gh3_co2Production_gas/hour";


function drawGasGaugeGH3(){
  $.get(gh3GasGaugeUrl, function (data) {
      var gasReading = data.gas_values;
      var lastData = gasReading[gasReading.length-1][1];

      console.log(lastData);

      var gasData = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['(ppm)', lastData]
      ]);


      var options = {
          width: 400, height: 120,
          greenFrom:localStorage._gh3gasMin, greenTo: localStorage._gh3gasMax,
          minorTicks: 5,
          max: 10000,
          min: 0
      };

      var chart = new google.visualization.Gauge(document.getElementById('gh3GasGauge'));

      chart.draw(gasData, options);
      setInterval(function(){
        $.get(gh3GasGaugeUrl,function(ndata){
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
