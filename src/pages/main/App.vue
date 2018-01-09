<template>
  <top-content :bg-color="'#fff'">
    <nav-tab slot="page-footer"/>
  </top-content>
</template>

<script>

  import NavTab from "../../components/NavTab";
  import TopContent from "../../containers/topContent";
  import NavBar from "../../components/NavBar";

  export default {
    components: {
      NavBar,
      TopContent,
      NavTab},
    name: "app",

    mounted(){
      mui.init();
    }
  }
</script>

<style>

</style>
