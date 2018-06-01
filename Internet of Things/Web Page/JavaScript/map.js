function initMap() {
   //setLatAndLng();
    var gh1 = {lat: 51.307599, lng: 1.103018};
    var gh2 = {lat: 51.308181, lng: 1.100135};
    var gh3 = {lat: 51.309179, lng: 1.103636};
    var rootCrops = {lat: 51.307491, lng: 1.105889}
    var storeRoom = {lat: 51.308328, lng: 1.106745}
    var muckHeap = {lat: 51.307847, lng: 1.105880}
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: gh3,
    mapTypeId:google.maps.MapTypeId.HYBRID
  });

    function setLatAndLng(){
        var url = "http://shed.kent.ac.uk/sites";
        $.get(url,function(data){

        for (i in data) {
            console.log(data[i].name);
            if(data[i].name == 'Greenhouse 2'){
                //console.log(data[i].lat);
                gh2 = {lat: data[i].lat, lng: data[i].lon};
            }
            else if(data[i].name == 'Greenhouse 1'){
                gh1 = {lat: 51.307599, lng: 1.103018};
            }
    }
        },"JSON");
    }
  // add markers to each of the green houses
  var gh1Marker = new google.maps.Marker({
    position: gh1,
    map: map,
    icon: "Photos/green_MarkerA.png"
  });

  var gh2Marker = new google.maps.Marker({
    position: gh2,
    map: map,
    icon: "Photos/green_MarkerB.png"
  });

  var gh3Marker = new google.maps.Marker({
    position: gh3,
    map: map,
    icon: "Photos/green_MarkerC.png"
  });
  var rootCropsMarker = new google.maps.Marker({
    position: rootCrops,
    map: map,
    icon: "Photos/yellow_MarkerC.png"
  });

  var storeRoomMarker = new google.maps.Marker({
    position: storeRoom,
    map: map,
    icon: "Photos/yellow_MarkerA.png"
  });

  var muckHeapMarker = new google.maps.Marker({
    position: muckHeap,
    map: map,
    icon: "Photos/yellow_MarkerB.png"
  });

  // add info window
  var gh1Info = new google.maps.InfoWindow({
    content:"Green House 1- Ornamental Catcus"
  });
  gh1Marker.addListener('click',function(){
    gh1Info.open(map,gh1Marker);
    toggle_visibility('popup-greenHouse1');

  });

  var gh2Info = new google.maps.InfoWindow({
    content:"Green House 2- Lettuce Fields"
  });
  gh2Marker.addListener('click',function(){
    gh2Info.open(map,gh2Marker);
    toggle_visibility('popup-greenHouse2');
  });

  var gh3Info = new google.maps.InfoWindow({
    content:"Green House 3- Seedlings"
  });
  gh3Marker.addListener('click',function(){
    gh3Info.open(map,gh3Marker);
    toggle_visibility('popup-greenHouse3');
  });

  var rootCropsInfo = new google.maps.InfoWindow({
    content:"Root Crops"
  });
  rootCropsMarker.addListener('click',function(){
    rootCropsInfo.open(map,rootCropsMarker);
    toggle_visibility('popup-rootCrops');
  });

  var storeRoomMarkerInfo = new google.maps.InfoWindow({
    content:"Store Room"
  });
  storeRoomMarker.addListener('click',function(){
    storeRoomMarkerInfo.open(map,storeRoomMarker);
    toggle_visibility('popup-storeRoom');
  });

  var muckHeapMarkerInfo = new google.maps.InfoWindow({
    content:"Muck Heap"
  });
  muckHeapMarker.addListener('click',function(){
    muckHeapMarkerInfo.open(map,muckHeapMarker);
    toggle_visibility('popup-muckHeap');
  });
}
