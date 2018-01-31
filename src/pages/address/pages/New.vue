<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <nav-bar slot="page-header" nb-title="新增地址" :nb-left="nbLeft"/>
    <div class="mui-bar mui-table" slot="page-footer">
      <a class="mui-block mui-btn mui-btn-default ">保存</a>
    </div>

  </top-content>
</template>

<script>
  import TopContent from "../../../containers/topContent";
  import NavBar from "../../../components/NavBar";

  export default {
    components: {
      NavBar,
      TopContent
    },
    name: "new",
    data(){
      return {
        nbLeft:{
          icon: 'mui-icon-left-nav',
          text: '返回',
          clickFn() {
            mui.back();
          }
        }
      }
  }
  }
</script>

<style scoped>

</style>
