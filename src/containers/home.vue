<template>
  <div class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">
      <slider :s-imgs="sliderImgs" :s-delay="5" s-indicator="num"/>


      <div class="mui-content-padded">
        <p>这是可拖动式右滑导航示例，主页面和菜单在一个HTML文件中， 优点是支持拖动手势（跟手），缺点是不支持菜单内容在多页面的复用； 当前页面为主界面，你可以在主界面放置任何内容； 打开侧滑菜单有多种方式： 1、在当前页面向右拖动；
          2、点击页面左上角的
          <span class="mui-icon mui-icon-bars"></span> 图标； 3、通过JS API触发（例如点击如下蓝色按钮体验）；
          <span class="android-only">4、Android手机按menu键；</span>
        </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>
        <p>这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; </p>


      </div>
    </div>
  </div>
</template>

<script>
  import Slider from "../components/Slider"
  export default {
    name: "home",
    data(){
      return {
        sliderImgs:[
          {img:require("../assets/shuijiao.jpg")},
          {img:require("../assets/muwu.jpg")},
          {img:require("../assets/cbd.jpg")},
          {img:require("../assets/yuantiao.jpg")}
        ]
      }
    },
    components:{
      Slider
    },
    mounted(){
      mui('.mui-scroll-wrapper').scroll();
    }
  }
</script>

<style scoped>

</style>
