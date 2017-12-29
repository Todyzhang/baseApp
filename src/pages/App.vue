<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>

  export default {
    name: "app",
    mounted(){
      console.log("store",this.$store.state.user);
      mui.init();
    }
  }
</script>

<style>
  @import "../../static/lib/css/mui.min.css";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
