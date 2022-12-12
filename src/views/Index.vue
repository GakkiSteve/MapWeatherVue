<template>
  <div id="index_container">
    <div id="search_wrap">
      <Search></Search>
    </div>
    <div id="map_wrap">
      <map-container></map-container>
    </div>
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer/MapContainer.vue";
import Search from "@/Search/Search.vue";
export default {
  components: { MapContainer, Search },
};
</script>

<style lang="less" scoped>
#index_container {
  height: 100%;
  width: 100%;
  position: relative;
  #map_wrap {
    height: 60%;
    width: 60%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  #search_wrap {
    position: absolute;
    top: 15%;
    left: 40%;
    height: 60px;
    width: 200px;
    // background-color: aliceblue;
  }
}
</style>
