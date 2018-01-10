<template>
  <top-content :scroll-style="{top:'106px'}" :is-init-scroll="0">
    <div slot="page-header">
      <searcher style="background:#fff;"/>
      <nav class="sn-tab-bar" :class="isTabShow">
        <a v-for="(tab,index) in typeItems" :key="index" :class="{active:index===tabActive}"
           @tap="tabItemClick(index,tab)">
          <span :class="{'icon':tab.icon,'up':tab.up}">{{tab.text}}</span>
        </a>
      </nav>
    </div>
    <goods-list :g-list="gList" :g-bgc="'#efefef'"/>
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
    data() {
      return {
        typeItems: [
          {text: "推荐"},
          {text: "热销"},
          {text: "最新"},
          {text: "价格", icon: !0, up: ""}
        ],
        tabActive: 0,
        lastTab: 3,
        pullRefresher: null,
        isTabShow:"",
        gList: [
          {
            id: 1,
            img: require("../index/imgs/sy-icon-1.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "人气",
            price: "48000"
          },
          {id: 2, img: require("../index/imgs/sy-icon-2.png"), info: "超级大芒果", icon: "清仓", price: "4800"},
          {
            id: 3,
            img: require("../index/imgs/sy-icon-3.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "",
            price: "48"
          },
          {
            id: 4,
            img: require("../index/imgs/sy-icon-4.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "",
            price: "48"
          },
          {
            id: 5,
            img: require("../index/imgs/sy-icon-5.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "",
            price: "48"
          },
          {
            id: 6,
            img: require("../index/imgs/sy-icon-6.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "",
            price: "48"
          },
          {
            id: 7,
            img: require("../index/imgs/sy-icon-7.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "",
            price: "48"
          },
          {
            id: 8,
            img: require("../index/imgs/sy-icon-8.png"),
            info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
            icon: "",
            price: "48"
          }
        ]
      }
    },
    methods: {
      tabItemClick(index, tab) {
        if (this.tabActive === index && index !== this.lastTab) return;
        this.tabActive = index;
        if (index === this.lastTab) {
          if (tab.up === "") {
            tab.up = !1;
          } else
            tab.up = !tab.up;
        } else {
          this.typeItems[this.lastTab].up = "";
        }
      },
      getPullRefresher() {
        if (!this.pullRefresher) {
          this.pullRefresher = mui(".mui-scroll-wrapper").pullRefresh();
        }
        return this.pullRefresher;
      },
      //下拉刷新页面
      pulldownRefresh() {
        let vm = this;
        console.info("pull down refresh");
        setTimeout(() => {
          this.gList = [
            {
              id: 4,
              img: require("../index/imgs/sy-icon-4.png"),
              info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
              icon: "",
              price: "48"
            },
            {
              id: 5,
              img: require("../index/imgs/sy-icon-5.png"),
              info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
              icon: "",
              price: "48"
            },
            {
              id: 6,
              img: require("../index/imgs/sy-icon-6.png"),
              info: "攀枝花凯特超级大芒果2kg/2-4个青芒果 大芒果2kg/2-4个青芒果",
              icon: "",
              price: "48"
            }
          ];
          this.getPullRefresher().endPulldownToRefresh();
        }, 1500);
      },
      //上拉加载更多
      pullupRefresh() {
      },
      handleScroll(e) {
        var y = window.scrollY;
        if (mui.os.plus && e && e.detail) {
          y = -e.detail.y;
        }
        console.log(y);
        this.isTabShow=y>60?"mui-bar mui-bar-tab":"";
      }
    },
    mounted() {
      mui.init({
        swipeBack: false,
        pullRefresh: {
          container: '.mui-scroll-wrapper',
          down: {
            style: 'circle',
            callback: this.pulldownRefresh
          },
          up: {
            contentrefresh: '正在加载...',
            callback: this.pullupRefresh
          }
        }
      });
      console.log("isPlus",mui.os.plus);

      if (mui.os.plus) {
        document.addEventListener('touchmove', this.handleScroll);
      } else {
        mui(".mui-scroll-wrapper")[0].addEventListener("scroll", this.handleScroll);
      }
    }
  }
</script>

<style scoped>
  .mui-bar.mui-bar-tab{
    top:0;
    bottom:auto;
    position:fixed;
  }
  .sn-tab-bar {
    background: #fff;
    display: table;
    width: 100%;
    border-top: 1px solid #e1e1e1;
  }

  .sn-tab-bar > a {
    display: table-cell;
    color: #333;
    padding: 12px;
  }

  .sn-tab-bar > a.active {
    color: #f90101
  }

  .sn-tab-bar > a > span.icon {
    background: url("./imgs/arrow_u_d.png") no-repeat right;
    padding-right: 15px;
    background-size: 10px;
  }

  .sn-tab-bar > a.active > span.icon {
    background-image: url("./imgs/arrow_u_d1.png");
  }

  .sn-tab-bar > a.active > span.icon.up {
    background-image: url("./imgs/arrow_u_d2.png");
  }
</style>
