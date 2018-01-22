<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <info-btn class="mui-bar"
               :ib-btn="{name:'提交订单'}"
               :ib-info-class="{'mui-text-right':total===0}"
               @ib-active=""
               slot="page-footer">
      <span class="goods-total">合计：</span>￥{{total | keep2Decimal | miliFormat}}<span class="mui-tab-label" v-show="total>0">不含邮费</span>
    </info-btn>
    <div class="mui-table-view">
      <div class="mui-table-view-cell">
        <a class="mui-navigate-right mui-text-left">
          <p class="title"><span>王先生</span> 18032115432</p>
          <p class="info">北京市朝阳区紫檀大厦A座6层</p>
        </a>
      </div>
    </div>
    <ul class="mui-table-view mt-15">
      <li class="mui-table-view-cell" v-for="(li,index) in gList" :key="index">
        <goods-cell :goodsData="li" :need1stCell="false" />
      </li>
    </ul>

  </top-content>
</template>

<script>

  import NavTab from "../../components/NavTab";
  import Slider from "../../components/Slider";
  import TopContent from "../../containers/topContent";
  import Searcher from "../../components/Seacher";
  import NavBar from "../../components/NavBar";
  import GoodsCell from "../../components/goodsCell";
  import InfoBtn from "../../components/infoBtn";

  export default {
    components: {
      InfoBtn,
      GoodsCell,
      NavBar,
      Searcher,
      TopContent,
      NavTab,
      Slider},
    name: "app",
    data(){
      return {
        total:100,
        gList:[
          {
            id: 1,
            img: require("../index/imgs/sy-icon-1.png"),
            info: "英得新鲜无花果3斤装 英得新鲜无花果3斤装 英得新鲜无花果3斤装",
            spec: "3斤装",
            price: "48000.01",
            buyNum: 10,
            state: 0  //0-正常；1-下架；2-售罄
          },
          {
            id: 8,
            img: require("../index/imgs/sy-icon-6.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: 48.99,
            buyNum: 1,
            state: 0,
            oldPrice: 53.99
          }
        ]
      }
    },
    mounted(){
      mui.init();
    }
  }
</script>

<style scoped>
  .mui-navigate-right:after{
    font-size:30px;
    color:#999;
    right:6px;
  }
  .mui-navigate-right > .title > span{
    color:#333;
    font-size:18px;
  }


</style>
