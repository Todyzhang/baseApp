<template>
  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item" v-for="(item,index) in items" @tap="showPage(item,index+1)"
       :class="{'mui-active':activeItem===index+1}">
      <span class="mui-icon" :class="item.className"></span>
      <span class="mui-tab-label">{{item.label}}</span>
    </a>
  </nav>
</template>

<script>

  export default {
    name: "nav-tab",
    props: {
      tabActive: {
        type: [String, Number],
        default: 1
      }
    },
    data() {
      return {
        items: [
          {url: "index.html", label: "首页", className: "icon-home", is1stShow: !1},
          {url: "list.html", label: "全部商品", className: "icon-goods", is1stShow: !1},
          {url: "cart.html", label: "购物车", className: "icon-cart", is1stShow: !1},
          {url: "person.html", label: "个人中心", className: "icon-person", is1stShow: !1}
        ],
        activeItem: this.tabActive
      }
    },
    computed: {
      itemsLen() {
        return this.items.length;
      }
    },
    methods: {
      showPage(page, num) {
        if (num === this.activeItem) {
          return;
        }

        //若为iOS平台或非首次显示，则直接显示
        if (mui.os.ios || !page.is1stShow) {
          plus.webview.show(page.url);
        } else {
          //否则，使用fade-in动画显示
          plus.webview.show(page.url, "fade-in", 300);
        }
        //隐藏当前;
        plus.webview.hide(this.items[this.activeItem - 1].url);
        this.activeItem = num;
      }
    },
    mounted() {
      //创建子页面，首个选项卡页面显示，其它均隐藏；
      mui.plusReady(() => {
        let self = plus.webview.currentWebview();
        let pageUrl, sub;
        for (let i = 0; i < this.itemsLen; i++) {
          pageUrl = this.items[i].url;
          sub = plus.webview.create(pageUrl, pageUrl, {
            bottom: '54px',
            top: '45px'
          });
          if (i > 0) {
            sub.hide();
          } else {
            this.items[i].is1stShow = !1;
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
