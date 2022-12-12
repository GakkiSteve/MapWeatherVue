<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";

export default {
  components: {
    FooterGuide,
  },
};
</script>
<style lang="less" scoped>
#app {
  height: 100vh;
  width: 100vw;
  background-image: url(assets/sea.png);
}
</style>
