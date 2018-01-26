<template>
  <ul class="mui-table-view mt-15">
    <li class="mui-table-view-cell" v-for="(li,index) in clList" :key="index" @tap.stop="li.active||emptyFn">
      <p class="mui-text-left goods-price">
        商品总额<span>￥{{goodsTotal | keep2Decimal}}</span>
      </p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "cell-list",
    props() {
      return {
        clList: {
          type:Array,
          require:true
        }
      }
    },
    data(){
      return {
        clList:[
          {leftClass}
        ]
      }
    },
    methods: {
      emptyFn(){}
    }
  }
</script>

<style scoped>

</style>
