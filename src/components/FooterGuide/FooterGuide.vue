<template>
  <!-- <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/index' === $route.path }"
        @click="goTo('/')"
      >
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/search' === $route.path }"
        @click="goTo('/search')"
      >
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/order' === $route.path }"
        @click="goTo('/order')"
      >
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/profile' === $route.path }"
        @click="goTo('/profile')"
      >
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </a> -->
  <body>
    <div class="nav">
      <ul>
        <li>
          <a
            href="javascript:;"
            class="guide_item"
            :class="{ on: '/' === $route.path }"
            @click="goTo('/')"
            >Map</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            class="guide_item"
            :class="{ on: '/Weather' === $route.path }"
            @click="goTo('/Weather')"
            >Weather</a
          >
        </li>
        <li><a href="#">Collection</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">1</a></li>
        <div class="nav-box"></div>
      </ul>
    </div>
  </body>
</template>

<script>
export default {
  name: "FooterGuide",
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>
<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  background-color: #030718;
  .nav {
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;

    top: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: #fff;
  }
  .nav ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    right: 5%;
  }
  .nav ul .nav-box {
    position: absolute;
    bottom: 0;
    left: 0;
    /* 如果导航栏就六个导航，那么每个导航的宽度都是整个导航
            的六分之一 */
    width: calc((100% / 6) * 1);
    height: 10px;
    border-radius: 2px;
    transition: 0.5s;
  }
  .nav ul li {
    width: 100%;
    text-align: center;
  }
  .nav ul li a {
    color: rgb(70, 100, 180);
    font: 100 30px "优设标题黑";
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
  }
  .nav ul li:nth-child(1):hover ~ .nav-box {
    left: calc(100% / 6 * 0);
    background-color: rgb(250, 190, 250);
  }
  .nav ul li:nth-child(2):hover ~ .nav-box {
    left: calc(100% / 6 * 1);
    background-color: red;
  }
  .nav ul li:nth-child(3):hover ~ .nav-box {
    left: calc(100% / 6 * 2);
    background-color: #d18df8;
  }
  .nav ul li:nth-child(4):hover ~ .nav-box {
    left: calc(100% / 6 * 3);
    background-color: #ffb1b1;
  }
  .nav ul li:nth-child(5):hover ~ .nav-box {
    left: calc(100% / 6 * 4);
    background-color: #8da1f8;
  }
  .nav ul li:nth-child(6):hover ~ .nav-box {
    left: calc(100% / 6 * 5);
    background-color: #7df88e;
  }
}
</style>
