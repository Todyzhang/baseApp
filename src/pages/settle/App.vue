<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <nav-bar slot="page-header" nb-title="神农集市" :nb-left="nbLeft"/>
    <info-btn class="mui-bar"
              :ib-btn="{name:'提交订单'}"
              :ib-info-class="{'mui-text-right':goodsLen===0}"
              @ib-active=""
              slot="page-footer">
      <span class="goods-info">共 {{goodsLen}} 件，实付款：</span><span class="goods-total">￥{{total | keep2Decimal | miliFormat}}</span>
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
        <goods-cell :goodsData="li" :need1stCell="false"/>
      </li>
    </ul>
    <div class="mui-table-view mt-15">
      <div class="mui-table-view-cell">
        <p class="pay-type">支付方式</p>
      </div>
    </div>
    <div class="mui-table-view mt-15">
      <div class="mui-table-view-cell">
        <div class="mui-input-row">
          <label>留言备注</label>
          <input type="text" class="mui-input-clear" placeholder="选填（50字以内）">
        </div>
      </div>
    </div>
    <ul class="mui-table-view mt-15">
      <li class="mui-table-view-cell">
        <p class="mui-text-left goods-price">
          商品总额<span>￥{{goodsTotal | keep2Decimal}}</span>
        </p>
      </li>
      <li class="mui-table-view-cell">
        <p class="mui-text-left goods-price">
          运费<span>￥{{freight | keep2Decimal}}</span>
        </p>
      </li>
    </ul>


  </top-content>
</template>

<script>

  import TopContent from "../../containers/topContent";
  import GoodsCell from "../../components/GoodsCell";
  import InfoBtn from "../../components/InfoBtn";
  import NavBar from "../../components/NavBar";
  import {keep2Decimal, miliFormat} from "../../utils/filter";

  export default {
    components: {
      InfoBtn,
      GoodsCell,
      NavBar,
      TopContent
    },
    name: "app",
    data() {
      return {
        gList: [],
        nbLeft: {
          icon: 'mui-icon-left-nav',
          text: '返回',
          clickFn() {
            mui.back();
          }
        },
        freight: 0
      }
    },
    computed: {
      goodsTotal() {
        let total = 0;
        mui.each(this.gList, (i, v) => {
          if (v.state === 0) {
            total += v.price * v.buyNum;
          }
        });
        return total;
      },
      total() {
        return this.goodsTotal + this.freight;
      },
      goodsLen() {
        return this.gList.length;
      }
    },
    mounted() {
      mui.init();
      mui.plusReady(() => {
        this.gList = plus.webview.currentWebview().data;
      });
    }
  }
</script>

<style scoped>
  .goods-info {
    color: #333;
  }

  .goods-total {
    color: #f90101;
    font-size: 20px;
    display: inline-block;
  }

  .mui-navigate-right:after {
    font-size: 30px;
    color: #999;
    right: 6px;
  }

  .mui-navigate-right > p{
    line-height: 2;
  }
  .mui-navigate-right > .title > span {
    color: #333;
    font-size: 18px;
  }

  .pay-type,
  .goods-price {
    color: #333;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
    position: relative;
    line-height: 2;
  }

  .pay-type:after {
    content: "";
    background: url("../../assets/wxpay.png") no-repeat center;
    background-size: contain;
    height: 2em;
    width: 7em;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  .mui-input-row label {
    float: initial;
    width: 5em;
    position: absolute;
    left: 0;
    top: 2px;
    padding: 6px 0;
    text-align: left;
    font-size: 16px;
    line-height: 1;
    color: #333;
  }

  .mui-input-row label ~ input {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 1.5em 6px 5em;
    height: auto;
    line-height: 1;
  }

  .goods-price > span {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: #f90101;
  }


</style>
<style>
  .mui-input-row .mui-input-clear ~ .mui-icon-clear {
    top: 6px;
  }
</style>
