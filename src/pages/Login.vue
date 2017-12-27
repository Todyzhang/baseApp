<template>
  <div class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">
      <img src="../assets/logo.png" />
      <form class="mui-input-group">
        <div class="mui-input-row">
          <span class="mui-icon mui-icon-phone"></span>
          <input type="text" class="mui-input-clear" placeholder="place enter your phone">
        </div>
        <div class="mui-input-row">
          <span class="mui-icon mui-icon-locked"></span>
          <input type="text" class="mui-input-clear" placeholder="带清除按钮的输入框">
        </div>

        <div class="mui-input-row mui-plus-visible">
          <label>Input</label>
          <input type="text" class="mui-input-speech mui-input-clear" placeholder="语音输入">
        </div>
        <div class="mui-button-row">
          <button type="button" class="mui-btn mui-btn-primary">确认</button>&nbsp;&nbsp;
          <button type="button" class="mui-btn mui-btn-danger">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


    export default {
      name: "login"
    }
</script>

<style scoped>
  .mui-icon{
    padding-top:8px;
    padding-left:15px;
    position:absolute;
    left:0;
  }
  .mui-icon + input{
    padding-left: 50px;
  }
</style>
