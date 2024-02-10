<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';

export default {
  mounted() {
    // Initialize the map
    const map = L.map('map').setView([40.878211506103426, -73.8778849381153], 13);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([40.878211506103426, -73.8778849381153]).addTo(map);
  }
};
</script>

<style>
#map {
  height: 100vh;
}
</style>



