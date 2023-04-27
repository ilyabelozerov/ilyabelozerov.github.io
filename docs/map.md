# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<div style="height: 500px; width: 100%">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</div>

<script lang="ts">

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from 'vue-leaflet';

import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetinaUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
});

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
