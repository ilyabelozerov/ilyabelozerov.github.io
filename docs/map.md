# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<div style="height: 500px; width: 100%">
  <l-map :useGlobalLeaflet="false" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="page in pages" :lat-lng="page.frontmatter.coordinates">
        <l-popup>
          <router-link :to="page.path">
            {{ page.title }}
          </router-link>
        </l-popup>
      </l-marker>
  </l-map>
</div>

<script lang="ts">

import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { usePages } from '@temp/planned'

console.log(usePages());

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 6,
      center: [49.41220, 8.70995],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      markerLatLng: [47.41322, -1.219482],
      pages: usePages()
    };
  }
};


//Further here: https://github.com/vue-leaflet/vue-leaflet
</script>
