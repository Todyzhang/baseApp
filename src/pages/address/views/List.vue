<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <nav-bar slot="page-header" nb-title="神农集市" :nb-left="nbLeft"/>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="mui-text-right"><span class="mui-pull-left">王先生</span>18032115432</p>
          <p>北京市朝阳区 紫檀大厦A座6层</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <a class="mui-btn mui-btn-link edit-btn" @tap.stop="linkTo('add')">编辑</a>
          <a class="mui-btn mui-btn-link delete-btn" @tap.stop="delAddr()">删除</a>
        </div>
        <radio :radio-data="{selected:false,text:'设为默认'}" />
      </div>
    </div>
    <div class="mui-card mt-15">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="mui-text-right"><span class="mui-pull-left">王先生</span>18032115432</p>
          <p>北京市朝阳区 紫檀大厦A座6层</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <a class="mui-btn mui-btn-link edit-btn" @tap.stop="linkTo('add')">编辑</a>
          <a class="mui-btn mui-btn-link delete-btn" @tap.stop="delAddr()">删除</a>
        </div>
        <radio :radio-data="{selected:false,text:'设为默认'}" />
      </div>
    </div>
    <div class="mui-card mt-15">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="mui-text-right"><span class="mui-pull-left">王先生</span>18032115432</p>
          <p>北京市朝阳区 紫檀大厦A座6层</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <a class="mui-btn mui-btn-link edit-btn" @tap.stop="linkTo('add')">编辑</a>
          <a class="mui-btn mui-btn-link delete-btn" @tap.stop="delAddr()">删除</a>
        </div>
        <radio :radio-data="{selected:false,text:'设为默认'}" />
      </div>
    </div>
    <div class="mui-card mt-15">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="mui-text-right"><span class="mui-pull-left">王先生</span>18032115432</p>
          <p>北京市朝阳区 紫檀大厦A座6层</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <a class="mui-btn mui-btn-link edit-btn" @tap.stop="linkTo('add')">编辑</a>
          <a class="mui-btn mui-btn-link delete-btn" @tap.stop="delAddr()">删除</a>
        </div>
        <radio :radio-data="{selected:false,text:'设为默认'}" />
      </div>
    </div>
    <div class="mui-card mt-15">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="mui-text-right"><span class="mui-pull-left">王先生</span>18032115432</p>
          <p>北京市朝阳区 紫檀大厦A座6层</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <a class="mui-btn mui-btn-link edit-btn" @tap.stop="linkTo('add')">编辑</a>
          <a class="mui-btn mui-btn-link delete-btn" @tap.stop="delAddr()">删除</a>
        </div>
        <radio :radio-data="{selected:false,text:'设为默认'}" />
      </div>
    </div>
    <div class="mui-card mt-15">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="mui-text-right"><span class="mui-pull-left">王先生</span>18032115432</p>
          <p>北京市朝阳区 紫檀大厦A座6层</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <a class="mui-btn mui-btn-link edit-btn" @tap.stop="linkTo('add')">编辑</a>
          <a class="mui-btn mui-btn-link delete-btn" @tap.stop="delAddr()">删除</a>
        </div>
        <radio :radio-data="{selected:false,text:'设为默认'}" />
      </div>
    </div>
    <bottom-btn bb-name="新增地址" slot="page-footer" @active="linkTo('add')" />
  </top-content>
</template>

<script>
  import TopContent from "../../../containers/topContent";
  import NavBar from "../../../components/NavBar";
  import BottomBtn from "../../../components/BottomBtn";
  import Radio from "../../../components/Radio";
  export default {
    name: "list",
    components:{
      Radio,
      TopContent,
      NavBar,
      BottomBtn
    },
    data(){
      return {
        nbLeft: {
          icon: 'mui-icon-left-nav',
          text: '返回',
          clickFn() {
            mui.back();
          }
        }
      }
    },
    methods:{
      linkTo(route){
        this.$router.push(route);
      },
      delAddr(){

      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .mui-card{
    margin:0;
    box-shadow:none;
    border-bottom:1px solid #e1e1e1;
  }

  .mui-card-content-inner{
    color:#666;
    text-align: left;
  }
  .mui-card-content-inner p{
    font-size:16px;
    margin-bottom:0;
  }
  .mui-card-content-inner p.mui-text-right{
    margin-bottom:15px;
  }
  .mui-card-content-inner p>span{
    color:#333;
    font-size:20px;
  }
  .mui-btn{
    color:#666;
    padding-left:2em;
    letter-spacing: 2px;
  }
  .edit-btn{
    background: url("../imgs/edit.png") no-repeat left center;
    background-size: 1.75em;
  }
  .delete-btn{
    background: url("../imgs/delete.png") no-repeat left center;
    background-size: 1.75em;
  }
</style>
