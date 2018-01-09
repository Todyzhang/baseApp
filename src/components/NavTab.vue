<template>
  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item" v-for="(item,index) in items" @tap="showPage(item,index+1)"
       :class="{'mui-active':tabActive===index+1}">
      <span class="mui-icon" :class="item.className"></span>
      <span class="mui-tab-label">{{item.label}}</span>
    </a>
  </nav>
</template>

<script>

  export default {
    name: "nav-tab",
    data() {
      return {
        items: [
          {url: "index.html", label: "首页", className: "icon-home", is1stShow: !0},
          {url: "list.html", label: "全部商品", className: "icon-goods", is1stShow: !1},
          {url: "cart.html", label: "购物车", className: "icon-cart", is1stShow: !1},
          {url: "person.html", label: "个人中心", className: "icon-person", is1stShow: !1}
        ],
        tabActive:1
      }
    },
    computed: {
      itemsLen() {
        return this.items.length;
      }
    },
    methods: {
      showPage(page, num) {
        if (num === this.tabActive) {
          return;
        }
        //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "tabActive"


        //若为iOS平台或非首次显示，则直接显示
        if (mui.os.ios || !page.is1stShow) {
          plus.webview.show(page.url);
        } else {
          //否则，使用fade-in动画，且保存变量
          plus.webview.show(page.url, "fade-in", 300);
        }
        //隐藏当前;
        plus.webview.hide(this.items[this.tabActive - 1].url);
        this.tabActive = num;
      }
    },
    mounted() {
      let vm = this;

      //创建子页面，首个选项卡页面显示，其它均隐藏；
      mui.plusReady(function () {
        let self = plus.webview.currentWebview();
        let pageUrl, sub;
        for (let i = 0; i < vm.itemsLen; i++) {
          pageUrl = vm.items[i].url;
          sub = plus.webview.create(pageUrl, pageUrl, {
            bottom: '61px',
            top: '0px'
          });
          if (i > 0) {
            sub.hide();
          }
          self.append(sub);
        }
      });
    }
  }
</script>

<style scoped>
  .mui-bar {
    background-color: #fff;
  }

  .mui-tab-item .mui-icon {
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .mui-bar-tab .mui-tab-item.mui-active {
    color: #f90101;
  }

  .mui-bar-tab .mui-tab-item .mui-icon:active {
    background-size: 100% 100%;
  }

  .mui-icon.icon-home {
    background-image: url(../assets/home.png);
  }

  .mui-active .mui-icon.icon-home {
    background-image: url(../assets/home-on.png);
  }

  .mui-icon.icon-goods {
    background-image: url(../assets/goods.png);
  }

  .mui-active .mui-icon.icon-goods {
    background-image: url(../assets/goods-on.png);
  }

  .mui-icon.icon-cart {
    background-image: url(../assets/cart.png);
  }

  .mui-active .mui-icon.icon-cart {
    background-image: url(../assets/cart-on.png);
  }

  .mui-icon.icon-person {
    background-image: url(../assets/person.png);
  }

  .mui-active .mui-icon.icon-person {
    background-image: url(../assets/person-on.png);
  }
</style>
