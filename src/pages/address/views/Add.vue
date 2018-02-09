<template>
  <top-content :scroll-style="{background:'#f2f2f2'}">
    <nav-bar slot="page-header" nb-title="新增地址" :nb-left="nbLeft"/>
    <bottom-btn bb-name="保存" slot="page-footer" @active="save()" />
    <form class="mt-15">
      <div class="mui-input-group">
        <div class="mui-input-row contact">
          <label class="mui-tab-label">收货人</label>
          <input type="text" class="mui-input-clear" placeholder="您的姓名">
        </div>
        <div class="mui-input-row">
            <radio-group class="sex" :rg-data="sexData" />
        </div>
        <div class="mui-input-row">
          <label class="mui-tab-label">联系方式</label>
          <input type="text" class="mui-input-clear" placeholder="配送人员联系您的电话">
        </div>
        <div class="mui-input-row">
          <label class="mui-tab-label">所在区域</label>
          <input type="text" :class="cityArea?'':'city-input-right'" placeholder="请选择" readonly id="showCityPicker3" @tap.stop="getCityData()" v-model="cityArea">
          <span class="mui-icon mui-icon-arrowright"></span>
        </div>
        <div class="mui-input-row">
          <label class="mui-tab-label">详细地址</label>
          <input type="text" class="mui-input-clear" placeholder="请输入门牌号等详细信息">
        </div>
        <div class="mui-input-row">
          <radio class="sn-radio-right" :radio-data.sync="defaultAddr" />
        </div>
      </div>

    </form>
  </top-content>
</template>

<script>
  import TopContent from "../../../containers/topContent";
  import NavBar from "../../../components/NavBar";
  import BottomBtn from "../../../components/BottomBtn";
  import Radio from "../../../components/Radio";
  import cityData3 from "../../../utils/city.data-3"
  import RadioGroup from "../../../components/RadioGroup";

  require("../../../assets/css/mui.picker.all.css");
  require("../../../utils/mui.picker.all.js");
  export default {
    components: {
      RadioGroup,
      Radio,
      BottomBtn,
      NavBar,
      TopContent
    },
    name: "add",
    data() {
      return {
        nbLeft: {
          icon: 'mui-icon-left-nav',
          text: '返回',
          clickFn() {
            mui.back();
          }
        },
        sex: "male",
        cityArea:"",
        defaultAddr:{
          selected:false,
          text:"设为默认地址"
        },
        sexData:[
          {selected:true,text:'先生',value:'male'},
          {selected:false,text:'女士',value:'female'}
        ]
      }
    },
    computed:{
      cityPicker3(){
        let pp=new mui.PopPicker({layer:3});
        pp.setData(cityData3);
        return pp;
      }
    },
    methods: {
      save() {
        console.log("save")
      },
      _getParam(obj,param){
        return obj[param] || '';
      },
      getCityData(){
        var that=this;
        this.cityPicker3.show(function(items) {
          console.log(items);
          that.cityArea=that._getParam(items[0], 'text') + " " + that._getParam(items[1], 'text') + " " + that._getParam(items[2], 'text');
          console.log("你选择的城市是:" + that.city);
          //返回 false 可以阻止选择框的关闭
          //return false;
        });
      }
    },
    mounted(){
      //点击清除输入框时需同时置空vue model
      mui(".mui-input-row").on("tap", ".mui-icon-clear", (e) => {
        let input = e.target.previousSibling;
        input.dispatchEvent(new Event("input"));
      });
    },
    beforeDestroy(){
      mui(".mui-input-row").off("tap");
    }
  }
</script>

<style scoped>
  .mui-input-group .mui-input-row{
    height:auto;
    padding:8px 0;
  }
  .mui-input-group .mui-input-row:after{
    left:0;
  }
  .mui-input-group .mui-input-row.contact:after{
    width:65%;
    left:35%;
  }

  .mui-icon.mui-icon-arrowright{
    position:absolute;
    right: 5px;
    top: 12px;
    color: #999;
    font-size: 30px;
  }
  .city-input-right{
    text-align: right;
    padding-right:35px;
  }
  .sn-radio-right{
    text-align: right;
    padding:10px 15px;
  }
</style>
<style>
  .mui-input-row .mui-input-clear ~ .mui-icon-clear{
    top:17px;
  }
  .sex{
    margin-left:35%;
    text-align: left;
    padding:10px 0;
  }
  .sex > div{
    display:inline-block;
    vertical-align: middle;
  }
  .sex > div:first-child{
    margin-right:10%;
  }
  .mui-pciker-list li{
    font-size:14px;
    color:#999;
  }
  .mui-pciker-list li.highlight{
    color:#333;
  }
  .mui-poppicker-header {
    background: #fff;
  }
  .mui-poppicker-header .mui-btn{
    color:#007aff;
    border:none;
    background:none;
    font-size: 16px;
  }
</style>
