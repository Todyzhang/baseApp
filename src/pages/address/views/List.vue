<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <nav-bar slot="page-header" nb-title="神农集市" :nb-left="nbLeft"/>
    <bottom-btn bb-name="新增地址" slot="page-footer" @active="linkTo('./address.html#/add')" />
  </top-content>
</template>

<script>
  import TopContent from "../../../containers/topContent";
  import NavBar from "../../../components/NavBar";
  import BottomBtn from "../../../components/BottomBtn";
  export default {
    name: "list",
    components:{
      TopContent,
      NavBar,
      BottomBtn
    },
    data(){
      return {
        nbLeft: {
          icon: 'mui-icon-left-nav',
          text: '返回',
          clickFn() {
            mui.back();
          }
        }
      }
    },
    methods:{
      linkTo(url){
        // mui.openWindow({
        //   url:url,
        //   id:url
        // });
        this.$router.push('add');
        console.log("new",url)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  html,
  body {
    background-color: #efeff4;
  }

  .title {
    padding: 20px 15px 10px;
    color: #6d6d72;
    font-size: 15px;
    background-color: #fff;
  }
</style>
