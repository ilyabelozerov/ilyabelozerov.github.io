# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<div style="height:600px; width:100%">
  <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
    <l-marker :lat-lng="coordinates"> 
      <l-popup> Hi! I'm staying<a href='www.google.de'>link</a> here on this location! </l-popup>
    </l-marker>
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    >
    </l-tile-layer>
  </l-map>
</div>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  data() {
    return {
      zoom: 6,
      coordinates: [47.41322, -1.219482] as L.LatLngExpression,
    };
  },
};

//Further here: https://github.com/vue-leaflet/vue-leaflet
</script>
