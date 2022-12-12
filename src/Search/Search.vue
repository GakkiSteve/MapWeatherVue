<template>
  <div id="search_container">
    <el-input
      type="text"
      placeholder="请输入"
      :id="inputObject.inputId"
      v-model="inputObject.userInput"
    />
    <!-- <button id="searchBtn" @click="send">search</button> -->
    <el-button type="primary" id="searchBtn" @click="send">search</el-button>
  </div>
</template>

<script>
import bus from "@/bus/bus.js";
export default {
  data() {
    return {
      inputObject: {
        userInput: "",
        inputId: "searchInput",
      },
    };
  },

  methods: {
    send() {
      bus.$emit("shareUserInput", this.inputObject);
      // console.log(this.inputObject);
    },
  },
  mounted() {
    this.send();
  },
};
</script>

<style lang="less" scoped>
#search_container {
  height: 400px;
  width: 350px;
  top: 20%;
  display: flex;
  position: absolute;
  input {
    height: 30px;
    width: 300px;
  }
  #searchBtn {
    height: 36px;
    width: 140px;
  }
}
</style>
