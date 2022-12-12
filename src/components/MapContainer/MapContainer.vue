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
      searchPlaceInput: "",
      auto: null,
      placeSearch: null,
      district: null,
      polygons: [],
    };
  },
  created() {
    bus.$on("shareUserInput", (val) => {
      console.log(11);

      console.log(val.userInput);
      this.autoOptions.input = val.inputId;
      this.searchPlaceInput = val.userInput;
    });
  },
  watch: {
    searchPlaceInput(newValue) {
      if (newValue != null) {
        // console.log(newValue);
        this.placeSearch.search(newValue);
        this.drawBounds(newValue);
      }
    },
  },
  methods: {
    drawBounds(newValue) {
      //加载行政区划插件
      if (!this.district) {
        //实例化DistrictSearch
        var opts = {
          subdistrict: 0, //获取边界不需要返回下级行政区
          extensions: "all", //返回行政区边界坐标组等具体信息
          level: "district", //查询行政级别为 市
        };

        this.map.plugin(["AMap.DistrictSearch"], () => {
          this.district = new AMap.DistrictSearch(opts);
        });
        // this.district = new AMap.DistrictSearch(opts)
      }
      //行政区查询
      this.district.search(newValue, (status, result) => {
        if (result != null) {
          this.successFeedBack("search operation success", "success");
          if (this.polygons != null) {
            this.map.remove(this.polygons); //清除上次结果
            this.polygons = [];
          }
          var bounds = result.districtList[0].boundaries;
          if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
              //生成行政区划polygon
              var polygon = new AMap.Polygon({
                strokeWeight: 1,
                path: bounds[i],
                fillOpacity: 0.4,
                fillColor: "#80d8ff",
                strokeColor: "#0091ea",
              });
              this.polygons.push(polygon);
            }
          }
          this.map.add(this.polygons);
          this.map.setFitView(this.polygons); //视口自适应
        } else {
          this.feedBackType("search operation fail", "fail");
        }
      });
    },

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
          this.placeSearch = new AMap.PlaceSearch({
            map: this.map,
          }); //构造地点查询类
          this.auto.on("select", this.select);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    select(e) {
      //e is 回调
      //e.poi.adcode is id of city

      this.placeSearch.setCity(e.poi.adcode);
      this.placeSearch.search(e.poi.name); //关键字查询查询
    },
    successFeedBack(msg, feedBackType) {
      this.$message({
        showClose: true,
        message: msg,
        type: feedBackType,
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
