var currentMin;
    var array = [];
    var gh1Array = [];
    var gh2Array = [];
    var gh3Array = [];
    var houseArray = [];
    var outsideArray = [];
    var lastButtonText;
    function init(){
        var url = 'http://shed.kent.ac.uk/devices';
    $.get(url,function(data){
        for(var x = 0;x<data.gas.length;x++){
           array.push(data.gas[x]);
        }
        for(var x = 0;x<data.solar.length;x++){
           array.push(data.solar[x]);
       }
        for(var x = 0;x<data.hydrometer.length;x++){
           array.push(data.hydrometer[x]);
       }
        for(var x = 0;x<data.tempHumid.length;x++){
           array.push(data.tempHumid[x]);
       }
        for(j=0;j<array.length;j++){
            url2 = 'http://shed.kent.ac.uk/device/'+array[j];
            $.get(url2,function(data1){
                getTime();
                var minLC = parseInt(data1.last_connection.substring(14, 16));
            //console.log(data1.site_id);
                if(data1.site_id == 'gh1'){
                    if(currentMin - minLC < 2){
                    gh1Array.push(data1.name);
                    }
                    else{
                        gh1Array.push(data1.name + ' - ' + data1.last_connection);
                    }
                }
                else if(data1.site_id == 'gh2'){
                    if(currentMin - minLC < 2){
                    gh2Array.push(data1.name);
                    }
                    else{
                        gh2Array.push(data1.name + ' - ' + data1.last_connection);
                    }
                }
                else if(data1.site_id == 'gh3'){
                    if(currentMin - minLC < 2){
                    gh3Array.push(data1.name);
                    }
                    else{
                        gh3Array.push(data1.name + ' - ' + data1.last_connection);
                    }
                }
                else if(data1.site_id == 'house'){
                    if(currentMin - minLC < 2){
                    houseArray.push(data1.name);
                    }
                    else{
                        houseArray.push(data1.name + ' - ' + data1.last_connection);
                    }
                }
                else if(data1.site_id == 'outside'){
                    if(currentMin - minLC < 2){
                    outsideArray.push(data1.name);
                    }
                    else{
                        outsideArray.push(data1.name + ' - ' + data1.last_connection);
                    }
                }
        },"JSON");
        }
                  
    },"JSON");
    }
    
    function getTime(){
        var today = new Date();
        currentMin = today.getMinutes();
    }
    
    function showData(ele){
        console.log(ele.text);
        console.log(lastButtonText);
        
        if(lastButtonText == ele.text){
            lastButtonText = 'new';
            $('#sensorsList > li').remove();
        }
        else{
        $('#sensorsList > li').remove();
        var currentArray;
        var items ='';
        
        if(ele.text == 'Greenhouse 1'){
            currentArray = gh1Array;
        }
        else if(ele.text == 'Greenhouse 2'){
            currentArray = gh2Array;
        }
        else if(ele.text == 'Greenhouse 3'){
            currentArray = gh3Array;
        }
        else if(ele.text == 'House'){
            currentArray = houseArray;
        }
        else if(ele.text == 'Outside'){
            currentArray = outsideArray;
        }
        for(k=0;k<currentArray.length;k++){
            if(currentArray[k].length<32){
                items +='<li style="color:green;">'+currentArray[k]+'</td>';
            }
            else{
                items +='<li style="color:red;">'+currentArray[k]+'</td>';
            }
                }
        $("#sensorsList").append(items);
        
        lastButtonText = ele.text;
        }
    }
    