# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<div style="height: 500px; width: 100%">
  <l-map :useGlobalLeaflet="false" 
         v-model="zoom"
         v-model:zoom="zoom" 
         :center="center"
         style="z-index: 0;">
    <l-tile-layer :url="url"  
                  :attribution="attribution" 
                  layer-type="base"
                  name="OpenStreetMap">
    </l-tile-layer>
  </l-map>
</div>


**Markers color meaning:**

:blue_heart: - Trip report<br/>
:green_heart: - Planned trip<br/>


<script lang="ts">

  import 'leaflet/dist/leaflet.css';
  import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "@vue-leaflet/vue-leaflet";

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
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
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
