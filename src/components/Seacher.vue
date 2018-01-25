<template>
  <form>
    <div class="mui-input-row sn-search">
      <span class="mui-icon mui-icon-list sn-icon-list"></span>
      <div class="search-inner-wrap">
        <span class="mui-icon mui-icon-search"></span>
        <input type="text" class="mui-input-clear" placeholder="搜索" v-model="keyword">
      </div>

    </div>
  </form>
</template>

<script>
  export default {
    name: "searcher",
    data() {
      return {
        keyword: ""
      }
    }
  }
</script>

<style scoped>
  .sn-search {
    padding: 10px 2.66%;
    position: relative;
  }

  .sn-search .mui-icon {
    padding-top: 8px;
    padding-left: 15px;
    position: absolute;
    left: 0;
  }

  .search-inner-wrap {
    padding-left: 38px;
    position: relative;
    width: 100%;
  }

  .sn-search .search-inner-wrap > .mui-icon {
    margin-left: 30px;
  }

  .search-inner-wrap > input {
    padding-left: 34px;
    font-size: 15px;
    width: 100%;
    border: 0;
    margin-bottom: 0;
    background-color: #efefef;
    border-radius: 5px;
  }

  .mui-icon.sn-icon-list {
    color: transparent;
  }

  .mui-icon.sn-icon-list:before {
    background: url("../assets/list.png") no-repeat center;
    background-size: 80%;
  }
</style>
