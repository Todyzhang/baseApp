<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import mui from "mui"

  export default {
    name: "app",
    mounted(){
      console.log("store",this.$store.state.user)
      mui.init()
    }
  }
</script>

<style>
  @import "../../static/lib/css/mui.min.css";
</style>
