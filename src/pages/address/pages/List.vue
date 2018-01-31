<template>
    <div class="sub-page">
      <div class="title">
        这是subNView模式选项卡中的第1个子页面，该页面展示一个支持单webview模式的下拉刷新、上拉加载的消息列表
      </div>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell" v-for="(li,index) in list">
          <a href="" class="mui-navigate-right">Item {{li}}</a>
        </li>

      </ul>
    </div>
</template>

<script>
  export default {
    name: "list",
    data(){
      return {
        count:0,
        list:[
          1,2,3,4,5,6,7,8
        ]
      }
    },
    methods:{
      pulldownRefresh(){
        var vm=this;
        setTimeout(() => {
          vm.list.splice(0,0,...[9,10,11]);
          mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
          mui.toast('下拉刷新成功');
        }, 1000);
      },
      pullupRefresh(){
        var vm=this;
        setTimeout(() => {
          mui('#pullrefresh').pullRefresh().endPullupToRefresh((++this.count > 2)); //参数为true代表没有更多数据了。
          vm.list.push(...[12,13,15,14])
        }, 1000);
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  html,
  body {
    background-color: #efeff4;
  }

  .title {
    padding: 20px 15px 10px;
    color: #6d6d72;
    font-size: 15px;
    background-color: #fff;
  }
</style>
