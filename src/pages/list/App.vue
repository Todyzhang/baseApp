<template>
  <top-content :bg-color="'#fff'">
    <searcher />
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active">
        <span class="mui-tab-label">推荐</span>
      </a>
      <a class="mui-tab-item mui-active">
        <span class="mui-tab-label">热销</span>
      </a>
      <a class="mui-tab-item mui-active">
        <span class="mui-tab-label">最新</span>
      </a>
      <a class="mui-tab-item mui-active">
        <span class="mui-tab-label">价格</span>
      </a>
    </nav>
    <goods-list :g-list="gList" :g-bgc="'#efefef'"/>
  </top-content>
</template>

<script>

  import NavTab from "../../components/NavTab";
  import Slider from "../../components/Slider";
  import TopContent from "../../containers/topContent";
  import Searcher from "../../components/Seacher";
  import NavBar from "../../components/NavBar";
  import GoodsList from "../../components/GoodsList";

  export default {
    components: {
      GoodsList,
      NavBar,
      Searcher,
      TopContent,
      NavTab,
      Slider},
    name: "app",
    data(){
      return {
        gList: [
          {id:1,img:require("../index/imgs/sy-icon-1.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"人气",price:"48000"},
          {id:2,img:require("../index/imgs/sy-icon-2.png"),info:"超级大芒果",icon:"清仓",price:"4800"},
          {id:3,img:require("../index/imgs/sy-icon-3.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"},
          {id:4,img:require("../index/imgs/sy-icon-4.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"},
          {id:5,img:require("../index/imgs/sy-icon-4.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"},
          {id:6,img:require("../index/imgs/sy-icon-4.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"},
          {id:7,img:require("../index/imgs/sy-icon-4.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"},
          {id:8,img:require("../index/imgs/sy-icon-4.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"}
        ]
      }
    },
    mounted(){
      mui.init();
    }
  }
</script>

<style>
  .sn-hot-goods{
    background-color:#f3eee8;
  }
  .sn-hot-goods > h3{
    color:#000;
    margin:0;
    padding: 5.32% 2.66% 2.66% 2.66%;
    position:relative;
  }
  .sn-hot-goods > h3 .bar-before,
  .sn-hot-goods > h3 .bar-after{
    display: inline-block;
    vertical-align: middle;
    position:relative;
    width:2em;
    height:1px;
    margin:0 10px;
    background-color:#cdcdcd;
  }
  .sn-hot-goods > h3 .bar-before:after,
  .sn-hot-goods > h3 .bar-after:before{
    content:"";
    display: inline-block;
    position:absolute;
    width:0.5em;
    height:2px;
    background-color:#000;
  }
  .sn-hot-goods > h3 .bar-before:after{
    right:0
  }
  .sn-hot-goods > h3 .bar-after:before{
    left:0;
  }

</style>
