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
    <l-marker v-for="page in posts.planned" :lat-lng="page.coordinates">
      <l-icon :icon-url="iconUrl" :icon-size="iconSize" :icon-anchor="iconAnchor"/>
      <l-popup v-for="link in page.links">
        <a :href="link.url">
          {{ link.title }}
        </a>
      </l-popup>
    </l-marker>
    <l-marker v-for="page in posts.trips" :lat-lng="page.coordinates">
      <l-popup>
        <a v-for="link in page.links" :href="link.url">
          {{ link.title }} <br>
        </a>
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
  import postsData from './posts.json'

  //Group posts by coordinates
  let groupByCoordinates = function(arr){
    return arr.reduce((acc,cur)=>{
      var found = acc.find(el => JSON.stringify(el.coordinates) == JSON.stringify(cur.coordinates))
      if(found){
        found.links.push({
          title: cur.title,
          url: cur.link
        })
      } else {
        acc.push({
          coordinates: cur.coordinates,
          links: [
            {
              title: cur.title,
              url: cur.link
            }
          ]
        })
      }
      return acc
    }, [])
  }

  let postsDataGrouped = {
    trips: groupByCoordinates(postsData.trips),
    planned: groupByCoordinates(postsData.planned)
  }

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
        posts: postsDataGrouped
      };
    },
    computed: {
      iconUrl() {
        return 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';
      },
      iconSize(): L.PointExpression {
        return [25, 40];
      },
      iconAnchor() {
        return [12, 40];
      }
    } 
  };

  //Further here: https://github.com/vue-leaflet/vue-leaflet
</script>
