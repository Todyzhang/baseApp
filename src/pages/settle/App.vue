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
    <cell-list class="mt-15" :cl-list="[{title:'新增配送地址',icon:'add-address',arrow:true}]"/>
    <cell-list class="mt-15" :cl-list="[{title:'<span>王先生</span> 18032115432',titleClass:'address',
    info:'北京市朝阳区紫檀大厦A座6层',infoClass:'',arrow:true,type:'twoRow'}]"/>
    <ul class="mui-table-view mt-15">
      <li class="mui-table-view-cell" v-for="(li,index) in gList" :key="index">
        <goods-cell :goodsData="li" :need1stCell="false"/>
      </li>
    </ul>
    <cell-list class="mt-15" :cl-list="[{title:'支付方式',infoClass:'pay-type'}]"/>
    <input-cell class="mt-15" :ic-list="icList"/>
    <cell-list class="mt-15" :cl-list="clList"/>


  </top-content>
</template>

<script>

  import TopContent from "../../containers/topContent";
  import GoodsCell from "../../components/GoodsCell";
  import InfoBtn from "../../components/InfoBtn";
  import NavBar from "../../components/NavBar";
  import {keep2Decimal} from "../../utils/tool";
  import CellList from "../../components/CellList";
  import InputCell from "../../components/InputCell";

  export default {
    components: {
      InputCell,
      CellList,
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
        freight: 0,
        remark: ""
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
      },
      clList() {
        return [
          {
            title: "商品总额",
            info: "￥" + keep2Decimal(this.goodsTotal),
            infoClass: "default-color"
          },
          {
            title: "运费",
            info: "￥" + keep2Decimal(this.freight),
            infoClass: "default-color"
          }
        ]
      },
      icList() {
        return [{label: '留言备注', placeholder: '选填（50字以内）', model: this.remark, limit: 50}]
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


</style>
<style>
  .mui-input-row .mui-input-clear ~ .mui-icon-clear {
    top: 6px;
  }

  .add-address {
    background: url("./imgs/add_address.png") no-repeat left center;
    background-size: 1.75em;
    padding-left: 2.5em;
    font-size: 16px;
    color: #333;
  }

  .address {
    color: #666;
  }

  .address > span {
    color: #333;
    font-size: 18px;
  }

  .pay-type {
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

  .default-color {
    color: #f90101;
  }
</style>
