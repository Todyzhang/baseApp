<template>
  <div class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">

    </div>
  </div>
</template>

<script>

  export default {
    name: "app",
    mounted(){
      // mui.init();
    }
  }
</script>

<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
