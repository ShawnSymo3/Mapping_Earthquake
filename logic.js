// Add console.log to check to see if our code is working.
console.log("working");


  var map = L.map('map').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
//var map = L.map('mapid').setView([40.7, -94.5], 4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/streets-v11',
 //   tileSize: 512,
 //   zoomOffset: -1,
 //   accessToken: 'pk.eyJ1Ijoic2hhd25zeW1vIiwiYSI6ImNsMWI5cXZkNDA0aTEzY292ZnoyMHVkaXQifQ.2CBnd3XEx2UiYE03Wyi7Eg'
//}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
