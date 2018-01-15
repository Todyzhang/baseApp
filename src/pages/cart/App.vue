<template>
  <top-content :scroll-style="{background:'#fff'}">
    <header class="mui-bar mui-bar-nav" slot="page-header">
      <a class="mui-btn mui-btn-link mui-btn-nav mui-pull-left" @tap.stop="chooseAll">
        <span class="mui-icon cart-list-select-icon" :class="{'selected':isAll}"></span>全选</a>
      <a class="mui-btn mui-btn-link mui-btn-nav mui-pull-right">
        <span class="mui-icon"></span>编辑</a>
    </header>
    <footer class="mui-bar mui-table" slot="page-footer">
      <p class="mui-table-cell mui-col-xs-8 goods-total" :class="{'mui-text-right':total===0}">
        <span>合计：</span>￥{{total | keep2Decimal | miliFormat}}<span class="mui-tab-label" v-show="total>0">不含邮费</span>
      </p>
      <a class="mui-table-cell mui-col-xs-4 cart-settle" :class="{'disabled':selected===0}">去结算({{selected}})</a>
    </footer>
    <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
      <li class="mui-table-view-cell" v-for="(li,index) in cartList" :key="index" :class="{'disabled':li.state>0}">
        <p class="goods-state" v-if="li.state>0">该商品已{{showGoods(li.state)}}</p>
        <div class="mui-table">
          <div class="mui-table-cell mui-col-xs-2" @tap="chooseGoods(li)">
            <span :class="[li.selected?'selected':'',li.state>0?'goods-invalid':'mui-icon cart-list-select-icon']"></span>
          </div>
          <div class="mui-table-cell mui-col-xs-3 cart-item-goods-img">
            <img :src="li.img"/>
          </div>
          <div class="mui-table-cell mui-col-xs-7 mui-text-left cart-item-goods-info">
            <h4 class="mui-ellipsis-2">{{li.info}}</h4>
            <p class="goods-spec">规格：{{li.spec}}</p>
            <p class="goods-price-wrap">￥<span class="goods-price">{{parseInt(li.price)}}</span>.{{li.price |
              twoDecimal}}<span v-if="li.state===0"
                class="mui-pull-right">×{{li.buyNum}}</span></p>
          </div>
        </div>
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
  import GoodsList from "../../components/GoodsList";

  require("@/utils/filter");

  export default {
    components: {
      GoodsList,
      NavBar,
      Searcher,
      TopContent,
      NavTab,
      Slider
    },
    name: "app",
    data() {
      return {
        gList: [
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
            id: 2,
            img: require("../index/imgs/sy-icon-2.png"),
            info: "超级大芒果",
            spec: "2kg",
            price: "4800",
            buyNum: 2,
            state: 1
          },
          {
            id: 3,
            img: require("../index/imgs/sy-icon-3.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: "48",
            buyNum: 100,
            state: 2
          },
          {
            id: 4,
            img: require("../index/imgs/sy-icon-2.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: "48",
            buyNum: 9999999,
            state: 0
          },
          {
            id: 5,
            img: require("../index/imgs/sy-icon-3.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: "48",
            buyNum: 1,
            state: 0
          },
          {
            id: 6,
            img: require("../index/imgs/sy-icon-8.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: 48,
            buyNum: 100,
            state: 0
          },
          {
            id: 7,
            img: require("../index/imgs/sy-icon-7.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: 48.5,
            buyNum: 1,
            state: 0
          },
          {
            id: 8,
            img: require("../index/imgs/sy-icon-6.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            spec: "2kg",
            price: 48.99,
            buyNum: 1,
            state: 0
          }
        ],
        isAll: false,
        goodsState:["","下架","售罄"],
        selected: 0 //选中个数
      }
    },
    computed: {
      cartList() {
        let list=[];
        mui.each(this.gList, (i, v) => {
          this.$set(v, "selected", false);
          list.push(v);
        });
        return list;
      },
      //选中商品金额
      total() {
        let total = 0;
        mui.each(this.cartList, (i, v) => {
          if (v.selected&&v.state===0) {
            total += v.buyNum * v.price;
          }
        });
        return total;
      },
      goodsValidLen() {
        let size=0;
        mui.each(this.gList, (i, v) => {
          if(v.state===0){
            size++;
          }
        });
        return size;
      }
    },
    methods: {
      showGoods (state){
        //0-正常；1-下架；2-售罄
        return this.goodsState[state]
      },
      chooseAll() {
        this.isAll = !this.isAll;
        mui.each(this.gList, (i, v) => {
          if(v.state===0){
            v.selected = this.isAll;
          }
        });
        this.selected = this.isAll ? this.goodsValidLen : 0;
      },
      chooseGoods(goods) {
        if(goods.state>0) return;
        goods.selected = !goods.selected;
        this.selected += goods.selected ? 1 : -1;
        this.isAll = this.selected === this.goodsValidLen;
      }
    }
    ,
    mounted() {
      mui.init();
    }
  }
</script>

<style scoped>
  .mui-pager li {
    display: block;
  }

  .mui-bar {
    padding: 0 3%;
  }

  .mui-bar .mui-btn-nav.mui-pull-right {
    margin-right: 0;
    color: #333;
  }

  .mui-bar .mui-btn-nav.mui-pull-left {
    margin-left: 0;
    color: #333;
  }

  .mui-bar .mui-btn .mui-icon {
    margin-right: 10px;
  }

  .cart-list-select-icon {
    background: url("./imgs/checkbox.png") no-repeat center;
    width: 1em;
    height: 1em;
    background-size: 1em;
    vertical-align: sub;
  }

  .cart-list-select-icon.selected {
    background-image: url("./imgs/checkbox_on.png");
  }

  .mui-pager li > a {
    display: block;
    padding: 0;
    border: none;
    border-bottom: 1px solid #e1e1e1;
    border-radius: 0;
    background-color: #fff;
    background-clip: padding-box;
  }

  .mui-table-view-cell {
    padding: 10px 3%;
  }
  .mui-table-view-cell.disabled{
    background:#f2f2f2;
  }

  .mui-table-cell {
    vertical-align: middle;
  }

  .mui-table-cell.cart-item-goods-img {
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 3px;
    background:#fff;
  }

  .mui-table-cell.cart-item-goods-img > img {
    display: block;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #000;
  }

  .cart-item-goods-info {
    padding-left: 10px;
  }

  .cart-item-goods-info > h4 {
    height: 2.5em;
    line-height: 1.25;
    color: #333;
  }
  .disabled .cart-item-goods-info > h4,
  .disabled .goods-price-wrap{
    color:#999;
  }
  .goods-state{
    line-height:3;
    font-size:16px;
    border-bottom:1px solid #e1e1e1;
    margin: -10px -3% 10px -3%;
    text-align: left;
    padding-left: 3%;
    color:#666;
  }

  .goods-spec {
    color: #999;
    font-size: 16px;
  }
  .goods-invalid{

    font-size:12px;
  }
  .goods-invalid:after{
    content:"无效";
    display:inline-block;
    background:#a8a8a8;
    border-radius:3px;
    padding: 0 5px;
    color:#fff;
  }

  .goods-price-wrap {
    color: #f90101;
    font-size: 16px;
    margin-left: -3px;
    margin-top: 15px;
  }

  .goods-price-wrap > .goods-price {
    font-size: 20px;
  }

  .goods-price-wrap > .mui-pull-right {
    color: #999;
  }

  .mui-table-view-cell:after {
    left: 0;
    color: #e1e1e1;
  }

  .mui-bar.mui-table {
    bottom: 0;
    padding: 0;
    height: 50px;
  }

  .goods-total {
    color: #000;
    font-size: 16px;
  }

  .goods-total > span:first-child {
    font-size: 20px;
  }

  .goods-total > span:last-child {
    font-size: 14px;
    display: inline-block;
    padding-left: 15px;
  }
  .goods-total.mui-text-right{
    padding-right:15px;
  }

  .cart-settle {
    background: #f90101;
    color: #fff;
    height: 50px;
    display: block;
    width: 100%;
    line-height: 50px;
  }

  .cart-settle:active {
    background: #e00000;
  }

  .cart-settle.disabled {
    background: #999;
  }

  .cart-settle.disabled:active {
    background: #999;
  }


</style>
<style>
  .mui-bar.mui-table ~ .mui-content {
    padding-bottom: 50px;
  }
</style>
