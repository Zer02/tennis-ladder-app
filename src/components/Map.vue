<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import marker from '../assets/marker-icon.png';

// const customIcon = new Icon({
//   iconUrl: marker,
//   iconSize: [38, 38]
// })

var customIcon = L.icon({
  iconUrl: marker,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default {
  mounted() {
    // Initialize the map
    const map = L.map('map').setView([40.878211506103426, -73.8778849381153], 17);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // var marker = L.marker([40.878211506103426, -73.8778849381153]).addTo(map);

    L.marker([40.8780201293451, -73.87799157367265], { icon: customIcon }).addTo(map).bindPopup("Williamsbridge Oval Tennis Courts");

  }
};
</script>

<style>
#map {
  height: 100vh;
}
</style>



