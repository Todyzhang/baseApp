<template>
  <top-content :scroll-style="{background:'#fff'}" :is-init-scroll="0">
    <slider :s-imgs="sliderImgs" :s-delay="5" s-indicator="num" />
    <searcher />
    <goods-list :g-list="gList" :g-bgc="'#efefef'"/>
    <div class="sn-hot-goods">
      <h3><span class="bar-before"></span>热销产品<span class="bar-after"></span></h3>
      <goods-list :g-list="hotList" :g-bgc="'#f3eee8'"/>
    </div>
  </top-content>
</template>

<script>

  import Slider from "../../components/Slider";
  import TopContent from "../../containers/topContent";
  import Searcher from "../../components/Seacher";
  import GoodsList from "../../components/GoodsList";

  export default {
    components: {
      GoodsList,
      Searcher,
      TopContent,
      Slider
    },
    name: "app",
    data(){
      return {
        sliderImgs:[
          {img:require("./imgs/slider-img-1.jpg")},
          {img:require("./imgs/slider-img-2.jpg")}
        ],
        gList: [
          {id:1,img:require("./imgs/sy-icon-1.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"人气",price:"48000"},
          {id:2,img:require("./imgs/sy-icon-2.png"),info:"超级大芒果",icon:"清仓",price:"4800"},
          {id:3,img:require("./imgs/sy-icon-3.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"},
          {id:4,img:require("./imgs/sy-icon-4.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",icon:"",price:"48"}
        ],
        hotList: [
          {id:5,img:require("./imgs/sy-icon-5.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",price:"48000"},
          {id:6,img:require("./imgs/sy-icon-6.png"),info:"超级大芒果",price:"4800"},
          {id:7,img:require("./imgs/sy-icon-7.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",price:"48"},
          {id:8,img:require("./imgs/sy-icon-8.png"),info:"攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",price:"48"}
        ]
      }
    },
    mounted(){
      let vm = this;
      this.$nextTick(function(){
        mui.init({
          swipeBack: false,
          pullRefresh: {
            container: '.mui-scroll-wrapper',
            down: {
              style: 'circle',
              callback: vm.pulldownRefresh
            }
          }
        });
      });
    },
    methods:{
      pulldownRefresh(){
        console.info("pull down refresh");
        //可ajax更新页面
        setTimeout(()=>{
          mui(".mui-scroll-wrapper").pullRefresh().endPulldownToRefresh();
        },1500);
      }
    }
  }
</script>

<style scoped>
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
