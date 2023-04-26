# Map

Places where I have been (or plan to be) with my DinghyGo boat.

<l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
  <l-tile-layer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    layer-type="base"
    name="OpenStreetMap"
  ></l-tile-layer>
</l-map>

<script lang="ts">
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import 'leaflet/dist/leaflet.css';

import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
  Default: true,
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
      return {
        zoom: 8,
        iconWidth: 21,
        iconHeight: 42,
      };
    },
    computed: {
      iconUrl() {
        return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
      },
      iconSize(): L.PointExpression {
        return [this.iconWidth, this.iconHeight];
      },
    },
    methods: {
      changeIcon() {
        this.iconWidth += 1;
        if (this.iconWidth > this.iconHeight) {
          this.iconWidth = Math.floor(this.iconHeight / 2);
        }
      },
    },
  };
//Further here: https://github.com/vue-leaflet/vue-leaflet
</script>
