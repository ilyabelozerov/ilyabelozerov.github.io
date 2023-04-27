# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<div style="height: 500px; width: 100%">
  <l-map :useGlobalLeaflet="false" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</div>

<script lang="ts">

import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 13,
      center: [47.41322, -1.219482],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      markerLatLng: [47.41322, -1.219482],
    };
  },
};
//Further here: https://github.com/vue-leaflet/vue-leaflet
</script>
