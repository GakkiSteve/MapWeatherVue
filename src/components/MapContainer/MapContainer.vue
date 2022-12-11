<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import bus from "@/bus/bus";

window._AMapSecurityConfig = {
  securityJsCode: "f965aa88544a7daeb6261f25441c63cb",
};
export default {
  data() {
    return {
      map: null,
      autoOptions: {
        input: "",
      },
      auto: null,
    };
  },
  created() {
    bus.$on("shareUserInput", (val) => {
      this.autoOptions.input = val.inputId;
    });
  },

  methods: {
    initMap() {
      AMapLoader.load({
        key: "6e17f2599c612493f573c3e50ce81b48", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.MapType",
          "AMap.Geolocation",
          "AMap.AutoComplete",
          "AMap.PlaceSearch",
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等 // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 10, //初始化地图级别
            center: [121.473667, 31.230525], //初始化地图中心点位置
          });
          this.map.addControl(new AMap.Scale());
          this.map.addControl(new AMap.ToolBar());
          this.map.addControl(new AMap.HawkEye());
          this.map.addControl(new AMap.MapType());
          this.map.addControl(new AMap.Geolocation());
          this.auto = new AMap.AutoComplete(this.autoOptions);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};
</script>

<style lang="less">
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
