<template>
  <div>
    <nav-bar nb-title="神农集市"/>
    <nav-tab />
  </div>
</template>

<script>

  import NavTab from "../../components/NavTab";
  import NavBar from "../../components/NavBar";

  export default {
    components: {
      NavBar,
      NavTab
    },
    name: "app",
    mounted() {
      mui.init();
    }
  }
</script>

<style>
  .mui-pull-top-pocket {
    top: 45px;
  }
</style>
