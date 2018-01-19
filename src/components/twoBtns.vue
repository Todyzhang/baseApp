<template>
  <div class="mui-table">
    <a class="mui-table-cell mui-col-xs-6 goods-btn"
       v-for="(btn,index) in btns" :class="{'disabled':btn.disabled}"
       @tap.stop="btnClickFn(index)">{{btn.name}}</a>
  </div>
</template>

<script>
  export default {
    name: "two-btns",
    props: {
      btns: {
        type: Array,
        require:true
      }
    },
    methods: {
      btnClickFn(index) {
        this.$emit("active",index);
      }
    }
  }
</script>

<style scoped>
  .goods-btn {
    background: #f90101;
    color: #fff;
    height: 50px;
    line-height: 50px;
  }

  .goods-btn:active {
    background: #e00000;
  }

  .disabled ~ .disabled {
    border-left: 1px solid #e1e1e1;
  }

  .mui-table>.goods-btn:last-child {
    background: #ff9600;
  }

  .mui-table>.goods-btn:last-child:active {
    background: #f08d00;
  }
  .mui-table>.goods-btn.disabled,
  .mui-table>.goods-btn.disabled:active{
    background: #999;
  }
</style>
