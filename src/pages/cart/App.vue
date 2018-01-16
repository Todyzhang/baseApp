<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <header v-if="gList.length>0" class="mui-bar mui-bar-nav" slot="page-header">
      <a class="mui-btn mui-btn-link mui-btn-nav mui-pull-left" @tap.stop="chooseAll">
        <span class="mui-icon cart-list-select-icon" :class="{'selected':isAll}"></span>全选</a>
      <a class="mui-btn mui-btn-link mui-btn-nav mui-pull-right" @tap.stop="menuBtn()">
        <span class="mui-icon"></span>{{isEdit?'完成':'编辑'}}</a>
    </header>
    <footer v-if="gList.length>0" class="mui-bar mui-table" slot="page-footer">
      <p v-show="!isEdit" class="mui-table-cell mui-col-xs-8 goods-total" :class="{'mui-text-right':total===0}">
        <span>合计：</span>￥{{total | keep2Decimal | miliFormat}}<span class="mui-tab-label" v-show="total>0">不含邮费</span>
      </p>
      <a v-show="!isEdit" class="mui-table-cell mui-col-xs-4 cart-btn-important" :class="{'disabled':selected===0}">去结算({{selected}})</a>
      <a v-show="isEdit" class="mui-table-cell mui-col-xs-6 cart-btn-important2" :class="{'disabled':selected===0}"
         @tap.stop="goodsEditBtn('fav')">移至收藏夹</a>
      <a v-show="isEdit" class="mui-table-cell mui-col-xs-6 cart-btn-important" :class="{'disabled':selected===0}"
         @tap.stop="goodsEditBtn('del')">删除</a>
    </footer>
    <ul v-show="gList.length>0" class="mui-table-view mui-table-view-striped mui-table-view-condensed">
      <li class="mui-table-view-cell" v-for="(li,index) in cartList" :key="index" :class="{'disabled':li.state>0}">
        <div class="mui-slider-right mui-disabled" v-if="isEdit">
          <a class="mui-btn goods-delete-btn" @tap.stop="deleteBtn($event,index)">删除</a>
        </div>
        <div :class="{'mui-slider-handle':isEdit}">
          <p class="goods-state" v-if="li.state>0">该商品已{{showGoods(li.state)}}</p>
          <div class="mui-table">
            <div class="mui-table-cell mui-col-xs-1" @tap.stop="chooseGoods(li)">
              <span
                :class="[li.selected?'selected':'',li.state>0&&!isEdit?'goods-invalid':'mui-icon cart-list-select-icon']"></span>
            </div>
            <div class="mui-table-cell mui-col-xs-3 cart-item-goods-img">
              <img :src="li.img"/>
            </div>
            <div class="mui-table-cell mui-col-xs-8 mui-text-left cart-item-goods-info">
              <h4 class="mui-ellipsis-2">{{li.info}}</h4>
              <p class="goods-spec">规格：{{li.spec}}</p>
              <p class="goods-price-wrap" v-show="!isEdit">￥<span class="goods-price">{{parseInt(li.price)}}</span>.{{li.price |
                twoDecimal}}<span v-show="li.state===0" class="mui-pull-right">×{{li.buyNum}}</span></p>
              <p v-show="isEdit && li.state===0" class="goods-edit-num">
                <a class="minus-num" @tap.stop="minusNum(li)"></a>
                <input type="number" v-model="li.buyNum" :style="{'width':(li.buyNum.toString().length*0.5+0.25)+'em'}" />
                <a class="add-num" @tap.stop="addNum(li)"></a>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div v-show="gList.length===0" class="cart-empty">
      <figure>
        <img src="./imgs/empty_cart.png"/>
        <figcaption>您的购物车内还没有商品</figcaption>
        <a class="mui-btn">立即逛逛</a>
      </figure>
    </div>

  </top-content>
</template>

<script>

  import NavTab from "../../components/NavTab";
  import TopContent from "../../containers/topContent";
  import Searcher from "../../components/Seacher";
  import NavBar from "../../components/NavBar";
  import * as _ from "@/utils/tool";

  require("@/utils/filter");

  export default {
    components: {
      NavBar,
      Searcher,
      TopContent,
      NavTab
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
          }

        ],
        isEdit: !1,
        goodsState: ["", "下架", "售罄"],
        sliderLi: null
      }
    },
    computed: {
      cartList() {
        mui.each(this.gList, (i, v) => {
          if (v.selected === undefined) {
            this.$set(v, "selected", false);
          }
        });
        return this.gList;
      },
      //选中商品金额
      total() {
        let total = 0;
        mui.each(this.cartList, (i, v) => {
          if (v.selected && v.state === 0) {
            total += v.buyNum * v.price;
          }
        });
        return total;
      },
      goodsValidLen() {
        let size = 0;
        mui.each(this.gList, (i, v) => {
          if (v.state === 0) {
            size++;
          }
        });
        return this.isEdit ? this.gList.length : size;
      },
      isAll() {
        return this.selected === this.goodsValidLen;
      },
      selected() {
        //选中个数
        let selected = 0;
        mui.each(this.cartList, (i, v) => {
          if (v.selected) {
            selected++;
          }
        });
        return selected;
      },
      getScroller() {
        return mui(".mui-scroll-wrapper").scroll();
      }
    },
    methods: {
      showGoods(state) {
        //0-正常；1-下架；2-售罄
        return this.goodsState[state]
      },
      chooseAll() {
        let selected = !this.isAll;
        mui.each(this.gList, (i, v) => {
          if (v.state === 0 || this.isEdit) {
            v.selected = selected;
          }
        });
      },
      chooseGoods(goods) {
        if (goods.state > 0 && !this.isEdit) return;
        goods.selected = !goods.selected;
      },
      deleteBtn(e, index) {
        let li = e.target.parentElement.parentElement;
        mui.swipeoutClose(li);
        this.gList.splice(index, 1);
      },
      menuBtn() {
        this.isEdit = !this.isEdit;
        mui.each(this.gList, (i, v) => {
          v.selected = !1;
        });
      },

      goodsEditBtn(type) {
        let len = this.goodsValidLen, list = [...this.gList], i = len - 1, ids = [], li;
        if (this.selected === 0) {
          //_.alert("请选择要操作的商品","提示");
          return;
        }
        for (; i >= 0; i--) {
          li = list[i];
          if (li.selected) {
            list.splice(i, 1);
            ids.push(li.id);
          }
        }
        this.gList = list;
        //更新滚动条位置
        setTimeout(() => {
          this.getScroller.refresh();
        }, 0);
        //todo 移到收藏夹及删除ajax操作
        console.log(type, ids);
      },
      addNum(li) {
        li.buyNum++;
      },
      minusNum(li){
        li.buyNum--;
      }
    }
    ,
    mounted() {
      mui.init();
      setTimeout(() => {
        this.gList.push({
          id: 8,
          img: require("../index/imgs/sy-icon-6.png"),
          info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
          spec: "2kg",
          price: 48.99,
          buyNum: 1,
          state: 0
        })
      }, 2000)
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

  .mui-table-view-cell.disabled,
  .mui-table-view-cell.disabled .mui-slider-handle {
    background: #f2f2f2;
  }

  .mui-table-cell {
    vertical-align: middle;
  }

  .mui-table-cell.cart-item-goods-img {
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 3px;
    background: #fff;
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
  .disabled .goods-price-wrap {
    color: #999;
  }

  .goods-state {
    line-height: 3;
    font-size: 16px;
    border-bottom: 1px solid #e1e1e1;
    margin: -10px -3% 10px -3%;
    text-align: left;
    padding-left: 3%;
    color: #666;
  }

  .goods-spec {
    color: #999;
    font-size: 16px;
  }

  .goods-invalid {
    font-size: 12px;
  }

  .goods-invalid:after {
    content: "无效";
    display: block;
    background: #a8a8a8;
    border-radius: 3px;
    color: #fff;
    font-size: 10px;
    white-space: nowrap;
    transform: scale(.8)
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

  .goods-total.mui-text-right {
    padding-right: 15px;
  }

  .cart-btn-important {
    background: #f90101;
    color: #fff;
    height: 50px;
    line-height: 50px;
  }

  .cart-btn-important:active {
    background: #e00000;
  }

  .cart-btn-important.disabled,
  .cart-btn-important2.disabled {
    background: #999;
  }

  .cart-btn-important.disabled:active,
  .cart-btn-important2.disabled:active {
    background: #999;
  }

  .cart-btn-important2.disabled ~ .disabled {
    border-left: 1px solid #e1e1e1;
  }

  .cart-btn-important2 {
    background: #ff9600;
    color: #fff;
    height: 50px;
    line-height: 50px;
  }

  .cart-btn-important2:active {
    background: #f08d00;
  }

  .mui-btn.goods-delete-btn {
    background: #f90101;
    color: #fff;
    font-size: 16px;
  }

  .mui-table-view-cell > .mui-slider-right > .mui-btn {
    padding: 0 15px;
  }

  .mui-pager .mui-disabled > a {
    opacity: 1;
  }

  .cart-empty {
    display: table;
    width: 100%;
    min-height: 80vh;
  }

  .cart-empty > figure {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
  }

  .cart-empty > figure > img {
    width: 30%;
  }

  .cart-empty > figure > figcaption {
    color: #333;
    margin: 20px 0;
  }

  .cart-empty > figure > .mui-btn {
    background: #f90101;
    border: 1px solid #f90101;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    padding: 6px 20px;
  }
  .goods-edit-num{
    margin-top:15px;
    height:2em;
    line-height:2em;
  }
  .goods-edit-num>a{
    display: inline-block;
    width:2em;
    height:2em;
    background:url("./imgs/minus.png") no-repeat center;
    background-size:1.5em;
    vertical-align: middle;
  }
  .goods-edit-num>a.add-num{
    background-image:url("./imgs/add.png");
  }
  .goods-edit-num>input{
    margin:0;
    padding:0;
    border:none;
    height:2em;
    line-height:2em;
  }
</style>
<style>
  .mui-bar.mui-table ~ .mui-content {
    padding-bottom: 50px;
  }
</style>
