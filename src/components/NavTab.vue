<template>
  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item mui-active" @tap="goHome">
      <span class="mui-icon icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item">
      <span class="mui-icon icon-goods"></span>
      <span class="mui-tab-label">全部商品</span>
    </a>
    <a class="mui-tab-item" @tap="goList">
      <span class="mui-icon icon-cart"></span>
      <span class="mui-tab-label">购物车</span>
    </a>
    <a class="mui-tab-item">
      <span class="mui-icon icon-person"></span>
      <span class="mui-tab-label">个人中心</span>
    </a>
  </nav>
</template>

<script>

  export default {
    name: "nav-tab",
    props: {
      ntItems: {
        type: Array,
        required: true
      }
    },
    methods:{
      goList(){
        this.$router.push("/index/list")
      },
      goHome(){
        this.$router.push("/index/home")
      }
    },

    computed:{

    }
  }
</script>

<style scoped>
  .mui-tab-item .mui-icon{
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .mui-bar-tab .mui-tab-item.mui-active{
    color: #f90101;
  }
  .mui-icon.icon-home{
    background-image:url(../assets/home.png);
  }
  .mui-active .mui-icon.icon-home{
    background-image:url(../assets/home-on.png);
  }
  .mui-icon.icon-goods{
    background-image:url(../assets/goods.png);
  }
  .mui-active .mui-icon.icon-goods{
    background-image:url(../assets/goods-on.png);
  }
  .mui-icon.icon-cart{
    background-image:url(../assets/cart.png);
  }
  .mui-active .mui-icon.icon-cart{
    background-image:url(../assets/cart-on.png);
  }
  .mui-icon.icon-person{
    background-image:url(../assets/person.png);
  }
  .mui-active .mui-icon.icon-person{
    background-image:url(../assets/person-on.png);
  }
</style>
