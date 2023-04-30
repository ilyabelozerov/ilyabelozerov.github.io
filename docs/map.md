# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<div style="height: 500px; width: 100%">
  <l-map :useGlobalLeaflet="false" 
         v-model="zoom"
         v-model:zoom="zoom" 
         :center="center">
    <l-tile-layer :url="url"  
                  :attribution="attribution" 
                  layer-type="base"
                  name="OpenStreetMap">
    </l-tile-layer>
    <l-marker v-for="page in plannedPages" :lat-lng="page.frontmatter.coordinates">
      <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
      <l-popup>
        <router-link :to="page.path">
          {{ page.title }}
        </router-link>
      </l-popup>
    </l-marker>
    <l-marker v-for="page in tripsPages" :lat-lng="page.frontmatter.coordinates">
      <l-popup>
        <router-link :to="page.path">
          {{ page.title }}
        </router-link>
      </l-popup>
    </l-marker>      
  </l-map>
</div>

**Markers color meaning:**

:blue_heart: - Trip report<br/>
:green_heart: - Planned trip<br/>

<script lang="ts">

import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "@vue-leaflet/vue-leaflet";
import { usePages as plannedPages } from '@temp/planned'
import { usePages as tripsPages } from '@temp/trips'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon
  },
  data() {
    return {
      zoom: 5,
      center: [49.41220, 8.70995],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      markerLatLng: [47.41322, -1.219482],
      plannedPages: plannedPages(),
      tripsPages: tripsPages()
    };
  },
  computed: {
    iconUrl() {
      return 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';
    },
    iconSize(): L.PointExpression {
      return [25, 40];
    }
  } 
};

//Further here: https://github.com/vue-leaflet/vue-leaflet
</script>
