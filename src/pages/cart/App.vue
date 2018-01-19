<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <header v-if="gList.length>0" class="mui-bar mui-bar-nav" slot="page-header">
      <a class="mui-btn mui-btn-link mui-btn-nav mui-pull-left" @tap.stop.prevent="chooseAll">
        <selecter-icon :selected="isAll"/>
        全选</a>
      <a class="mui-btn mui-btn-link mui-btn-nav mui-pull-right" @tap.stop="menuBtn()">
        <span class="mui-icon"></span>{{isEdit?'完成':'编辑'}}</a>
    </header>

    <!--<footer v-if="gList.length>0" class="mui-bar mui-table" slot="page-footer">-->
      <!--<p v-show="!isEdit" class="mui-table-cell mui-col-xs-8 goods-total" :class="{'mui-text-right':total===0}">-->
        <!--<span>合计：</span>￥{{total | keep2Decimal | miliFormat}}<span class="mui-tab-label" v-show="total>0">不含邮费</span>-->
      <!--</p>-->
      <!--<a v-show="!isEdit" class="mui-table-cell mui-col-xs-4 cart-btn-important" :class="{'disabled':selected===0}">去结算({{selected}})</a>-->
      <!--<a v-show="isEdit" class="mui-table-cell mui-col-xs-6 cart-btn-important2" :class="{'disabled':selected===0}"-->
         <!--@tap.stop="goodsEditBtn('fav')">移至收藏夹</a>-->
      <!--<a v-show="isEdit" class="mui-table-cell mui-col-xs-6 cart-btn-important" :class="{'disabled':selected===0}"-->
         <!--@tap.stop="goodsEditBtn('del')">删除</a>-->
    <!--</footer>-->
    <two-btns class="mui-bar" v-if="gList.length>0" :btns="[{name:'移至收藏夹',disabled:selected===0},{name:'删除',disabled:selected===0}]" @active="goodsEditBtn" slot="page-footer" />

    <ul v-show="gList.length>0" class="mui-table-view">
      <li class="mui-table-view-cell" v-for="(li,index) in cartList" :key="index" :class="{'disabled':li.state>0}">
        <div class="mui-slider-right mui-disabled" v-if="isEdit">
          <a class="mui-btn goods-delete-btn" @tap.stop="deleteBtn($event,index)">删除</a>
        </div>
        <div :class="{'mui-slider-handle':isEdit}">
          <p class="goods-state" v-if="li.state>0">该商品已{{showGoods(li.state)}}</p>
          <goods-cell :goodsData="li" :isEdit="isEdit"/>
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

  import TopContent from "../../containers/topContent";
  import SelecterIcon from "../../components/selecterIcon";
  import GoodsCell from "../../components/goodsCell";
  import {keep2Decimal, miliFormat} from "../../utils/filter";
  import TwoBtns from "../../components/twoBtns";


  export default {
    components: {
      TwoBtns,
      GoodsCell,
      SelecterIcon,
      TopContent
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

      deleteBtn(e, index) {
        let li = e.target.parentElement.parentElement;
        mui.confirm("", "是否确定要删除此商品?", ["确定", "取消"], (e) => {
          if (e.index === 0) {
            this.gList.splice(index, 1);
          }
          mui.swipeoutClose(li);
        }, "div");

      },
      //编辑||完成
      menuBtn() {
        this.isEdit = !this.isEdit;
        if (!this.isEdit) {
          mui.each(mui(".mui-slider-handle[style]"), (i, v) => {
            v.removeAttribute("style");
          });
        }
        mui.each(this.gList, (i, v) => {
          v.selected = !1;
        });
      },

      goodsEditBtn(type) {
        let len = this.goodsValidLen, list = [...this.gList], i = len - 1, ids = [], li;
        debugger;
        if (this.selected === 0) {
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
        let num = +li.buyNum;
        if (num >= 9999999) return;
        li.buyNum = num + 1;
      },
      minusNum(li) {
        if (li.buyNum > 1) {
          li.buyNum = +li.buyNum - 1;
        }
      }
    },
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
          state: 0,
          oldPrice: 53.99
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


</style>
<style>
  .mui-bar.mui-table ~ .mui-content {
    padding-bottom: 50px;
  }

  .mui-popup {
    border-radius: 5px;
  }

  .mui-popup-inner {
    border-radius: 5px 5px 0 0;
    padding: 30px 15px;
  }

  .mui-popup-button:first-child {
    border-radius: 0 0 0 5px;
    color: #fff;
    background: #f90101;
  }

  .mui-popup-button:last-child {
    border-radius: 0 0 5px 0;
    color: #333;
  }

  .mui-popup-button.mui-popup-button-bold {
    font-weight: 400;
  }

  .mui-popup-title {
    font-weight: 400;
    font-size: 16px;
    color: #333;
  }
</style>
