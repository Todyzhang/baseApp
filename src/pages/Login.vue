<template>
  <div class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">
      <img class="logo" src="../assets/logo.png" />
      <form class="login-form">
        <div class="mui-input-row">
          <span class="mui-icon mui-icon-person"></span>
          <input type="text" class="mui-input-clear" placeholder="手机号/用户名" data-model="iAccout"
                 v-model="iAccout">
        </div>
        <div class="mui-input-row mui-password">
          <span class="mui-icon mui-icon-locked"></span>
          <input type="password" class="mui-input-password" placeholder="密码"
                 v-model="iPwd">
        </div>
        <button type="button" id="comfirmBtn" class="mui-btn mui-btn-block mui-btn-primary" @tap="comfirm">确认</button>
      </form>

    </div>
  </div>
</template>

<script>
  import mui from "mui"
  import fetch from "../fetch"
  import * as _ from "../utils/tool"

    export default {
      name: "login",
      data(){
        return{
          iAccout:"",
          iPwd:"",
          test:""
        }
      },
      methods:{
        comfirm(){
          if(!this.iAccout){
            _.toast("请输入帐号");
            return;
          }
          if(!this.iPwd){
            _.toast("请输入密码");
            return;
          }
          this.login();
        },
        login(){
          let btn=mui("#comfirmBtn");
          let params={user:this.iAccout,pwd:this.iPwd};

          btn.button('loading');
          fetch.Login(params)
            .then(res=>{
              this.$router.push({path: "/"})
            },err=>{
              console.log(err);
            })
            .finally(()=>btn.button('reset'))
        }
      },
      mounted(){
        mui(".mui-input-row input").input();//动态生成input框需重新设置
        //点击清除输入框时需同时置空vue model
        mui(".mui-input-row").on("tap",".mui-icon-clear",(e)=>{
          let _model=e.target.previousSibling.getAttribute("data-model");
          this[_model]="";
        });

      },
      beforeDestroy(){
        console.log("login destroy")
        mui(".mui-input-row").off();
      }
    }
</script>

<style scoped>
  .logo{
    display:block;
    margin:10px auto;
  }
  .login-form{
    padding:5%;
  }
  .mui-icon{
    padding-top:7px;
    padding-left:15px;
    position:absolute;
    left:0;
  }
  .mui-icon + input{
    padding-left: 50px;
  }
  .mui-btn-block{
    padding: 8px 0;
    margin-top: 20px;
  }
</style>
