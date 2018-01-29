<template>
  <div class="mui-table-view mt-15">
    <div class="mui-table-view-cell" v-for="(li,index) in icList" :key="index">
      <div class="mui-input-row">
        <label>{{li.label}}</label>
        <input type="text" class="mui-input-clear" :placeholder="li.placeholder">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "input-cell",
    props: {
      icList:{
        type:Array,
        require:true
      }
    }
  }
</script>

<style scoped>
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
</style>
