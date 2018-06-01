


function storeOptimalConditionsGreenHouse1() {
    console.log("GH1 STORE");
    var sensorOptions = document.getElementById("sensors");
    var sensorOptionsValue = sensorOptions.options[sensorOptions.selectedIndex].value;
    var minValueGh1 = document.getElementById("txtMinValueGh1").value;
    var maxValueGh1 = document.getElementById("txtMaxValueGh1").value;


    if (sensorOptionsValue == "Gas") {
        localStorage._gh1gasMin = txtMinValueGh1;
        localStorage._gh1gasMax = maxValueGh1;
        minValueGh1 = "";
        maxValueGh1 = "";
        alert("Please refresh the page to view the saved preferences");
    }
    else if (sensorOptionsValue == "Temperature") {
        localStorage._gh1tempMin = minValueGh1;
        localStorage._gh1tempMax = maxValueGh1;
        minValueGh1 = "";
        maxValueGh1 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValue == "Humidity") {
        localStorage._gh1humidMin = minValueGh1;
        localStorage._gh1humidMax = maxValueGh1;
        minValueGh1 = "";
        maxValueGh1 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValue == "Moisture") {
        localStorage._gh1moistureMin = minValueGh1;
        localStorage._gh1moistureMax = maxValueGh1;
        minValueGh1 = "";
        maxValueGh1 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValue == "Lumosity") {
        localStorage._gh1luxMin = minValueGh1;
        localStorage._gh1luxMax = maxValueGh1;
        minValueGh1 = "";
        maxValueGh1 = "";
        alert("Please refresh the page to view the saved preferences");

    }

}

function storeOptimalConditionsGreenHouse2() {
    var sensorOptionsgh2 = document.getElementById("sensorsgh2");
    var sensorOptionsValuegh2 = sensorOptionsgh2.options[sensorOptionsgh2.selectedIndex].value;
    var minValueGh2 = document.getElementById("txtMinValueGh2").value;
    var maxValueGh2 = document.getElementById("txtMaxValueGh2").value;


    if (sensorOptionsValuegh2 == "Gas") {
        localStorage._gh2gasMin = minValueGh2;
        localStorage._gh2gasMax = maxValueGh2;
        minValueGh2 = "";
        maxValueGh2 = "";
        alert("Please refresh the page to view the saved preferences");
    }
    else if (sensorOptionsValuegh2 == "Temperature") {
        localStorage._gh2tempMin = minValueGh2;
        localStorage._gh2tempMax = maxValueGh2;
        minValueGh2 = "";
        maxValueGh2 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValuegh2 == "Humidity") {
        localStorage._gh2humidMin = minValueGh2;
        localStorage._gh2humidMax = maxValueGh2;
        minValueGh2 = "";
        maxValueGh2 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValuegh2 == "Moisture") {
        localStorage._gh2moistureMin = minValueGh2;
        localStorage._gh2moistureMax = maxValueGh2;
        minValueGh2 = "";
        maxValueGh2 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValuegh2 == "Lumosity") {
        localStorage._gh2luxMin = minValueGh2;
        localStorage._gh2luxMax = maxValueGh2;
        minValueGh2 = "";
        maxValueGh2 = "";
        alert("Please refresh the page to view the saved preferences");

    }

}

function storeOptimalConditionsGreenHouse3() {
    var sensorOptionsgh3 = document.getElementById("sensorsgh3");
    var sensorOptionsValuegh3 = sensorOptionsgh3.options[sensorOptionsgh3.selectedIndex].value;
    var minValueGh3 = document.getElementById("txtMinValueGh3").value;
    var maxValueGh3 = document.getElementById("txtMaxValueGh3").value;
    var output = document.getElementById("output");

    if (sensorOptionsValuegh3 == "Gas") {
        localStorage._gh3gasMin = minValueGh3;
        localStorage._gh3gasMax = maxValueGh3;
        minValueGh3 = "";
        maxValueGh3 = "";
        alert("Please refresh the page to view the saved preferences");
    }
    else if (sensorOptionsValuegh3 == "Temperature") {
        localStorage._gh3tempMin = minValueGh3;
        localStorage._gh3tempMax = maxValueGh3;
        minValueGh3 = "";
        maxValueGh3 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValuegh3 == "Humidity") {
        localStorage._gh3humidMin = minValueGh3;
        localStorage._gh3humidMax = maxValueGh3;
        minValueGh3 = "";
        maxValueGh3 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValuegh3 == "Moisture") {
        localStorage._gh3moistureMin = minValueGh3;
        localStorage._gh3moistureMax = maxValueGh3;
        minValueGh3 = "";
        maxValueGh3 = "";
        alert("Please refresh the page to view the saved preferences");

    }
    else if (sensorOptionsValuegh3 == "Lumosity") {
        localStorage._gh3luxMin = minValueGh3;
        localStorage._gh3luxMax = maxValueGh3;
        minValueGh3 = "";
        maxValueGh3 = "";
        alert("Please refresh the page to view the saved preferences");

    }

}

function loadPreferencesGreenHouse1() {
    var outputGh1 = document.getElementById("outputGh1");
    //var openGH1 = 0;
    var gh1ViewPreferences = document.getElementById("prefButtonGh1");

    if (gh1ViewPreferences.value == "View preferences") {
        prefButtonGh1.value = 'Hide preferences';

        outputGh1.innerHTML = "Gas Min: " + localStorage._gh1gasMin + " Gas max:" + localStorage._gh1gasMax + " <br>" +
            "Temp Min: " + localStorage._gh1tempMin + " C Temp Max:" + localStorage._gh1tempMax + " C <br>" +
            "Humid Min: " + localStorage._gh1humidMin + " % Humid Max: " + localStorage._gh1humidMax + "% <br>" +
            "Moisture min: " + localStorage._gh1moistureMin + " C Moisture Max:" + localStorage._gh1moistureMax + " C <br>" +
            "Lumosity min: " + localStorage._gh1luxMin + " Lux Lumosity max:" + localStorage._gh1luxMax + " Lux <br>";


    }
    else {
        prefButtonGh1.value = 'View preferences';
        outputGh1.innerHTML = '';

    }
}

function loadPreferencesGreenHouse2() {

    var outputGh2 = document.getElementById("outputGh2");
    var gh2ViewPreferences = document.getElementById("prefButtonGh2");

    if (gh2ViewPreferences.value == "View preferences") {
        gh2ViewPreferences.value = 'Hide preferences';

        outputGh2.innerHTML = "Gas Min: " + localStorage._gh2gasMin + " Gas max:" + localStorage._gh2gasMax + " <br>" +
            "Temp Min: " + localStorage._gh2tempMin + " C Temp Max:" + localStorage._gh2tempMax + " C <br>" +
            "Humid Min: " + localStorage._gh2humidMin + " % Humid Max: " + localStorage._gh2humidMax + "% <br>" +
            "Moisture min: " + localStorage._gh2moistureMin + " C Moisture Max:" + localStorage._gh2moistureMax + " C <br>" +
            "Lumosity min: " + localStorage._gh2luxMin + " Lux Lumosity max:" + localStorage._gh2luxMax + " Lux <br>";
        openGH2 = 1;
    }
    else {
        gh2ViewPreferences.value = 'View preferences';
        outputGh2.innerHTML = '';
        openGH2 = 0;
    }
}

function loadPreferencesGreenHouse3() {

    var outputGh3 = document.getElementById("outputGh3");
    var gh3ViewPreferences = document.getElementById("prefButtonGh3");

    if (gh3ViewPreferences.value == "View preferences") {
        gh3ViewPreferences.value = 'Hide preferences';

        outputGh3.innerHTML = "Gas Min: " + localStorage._gh3gasMin + " Gas max:" + localStorage._gh3gasMax + " <br>" +
            "Temp Min: " + localStorage._gh3tempMin + " C Temp Max:" + localStorage._gh3tempMax + " C <br>" +
            "Humid Min: " + localStorage._gh3humidMin + " % Humid Max: " + localStorage._gh3humidMax + "% <br>" +
            "Moisture min: " + localStorage._gh3moistureMin + " C Moisture Max:" + localStorage._gh3moistureMax + " C <br>" +
            "Lumosity min: " + localStorage._gh3luxMin + " Lux Lumosity max:" + localStorage._gh3luxMax + " Lux <br>";
        openGH3 = 1;
    }
    else {
        gh3ViewPreferences.value = 'View preferences';
        outputGh3.innerHTML = '';
        openGH3 = 0;
    }
}
