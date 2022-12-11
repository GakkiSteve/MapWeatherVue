<template>
  <div id="search_container">
    <input
      type="text"
      placeholder="请输入"
      :id="inputObject.inputId"
      v-model="inputObject.userInput"
    />
    <button id="searchBtn" @click="send">search</button>
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
    },
  },
  mounted() {
    this.send();
  },
};
</script>

<style lang="less" scoped>
#search_container {
  height: 100%;
  width: 100%;
  display: flex;

  input {
    height: 30px;
    width: 500px;
  }
  #searchBtn {
    height: 36px;
    width: 120px;
  }
}
</style>
