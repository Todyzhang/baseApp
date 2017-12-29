<template>
  <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
    <!--侧滑菜单部分-->
    <aside id="offCanvasSide" class="mui-off-canvas-left">
      <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <div class="title">侧滑导航</div>
          <div class="content">
            这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; 3.点击如下红色按钮
            <span class="android-only">；4.Android手机按back键；5.Android手机按menu键
							</span>。
            <p style="margin: 10px 15px;">
              <button type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;" @click="toLogin">登录</button>
            </p>

          </div>
          <div class="title" style="margin-bottom: 25px;">侧滑列表示例</div>
          <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 1
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 2
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 3
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 4
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 5
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                Item 6
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <!--主界面部分-->
    <div class="mui-inner-wrap">
      <nav-bar nb-title="div模式右滑菜单" :nb-left="nbLeft" :nb-right="nbRight" />
      <nav-tab :nt-items="ntItems" />
      <router-view />

      <!-- off-canvas backdrop -->
      <div class="mui-off-canvas-backdrop"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import NavTab from "../components/NavTab";

import fetch from "../fetch"

export default {
  components: {
    NavBar,NavTab },
  name: "index",
  data () {
    return {
      title:"导航条",
      nbLeft:{
        icon:"mui-icon-bars",
        clickFn(){
          mui('#offCanvasWrapper').offCanvas().show();
        }
      },
      nbRight:{
        icon:"mui-action-back",
        text:"关闭"
      },
      ntItems: [
        {icon:"mui-icon-home",text:"首页"},
        {icon:"mui-icon-phone",text:"电话"},
        {icon:"mui-icon-email",text:"邮件"},
        {icon:"mui-icon-gear",text:"设置"}
      ]
    }
  },
  methods:{
    showMenu(){
      mui('#offCanvasWrapper').offCanvas().show();
    },
    toLogin(){
      this.$router.push("login");
    }
  },
  mounted(){
    //主界面和侧滑菜单界面均支持区域滚动；
    mui('#offCanvasSideScroll').scroll();

    //实现ios平台原生侧滑关闭页面；
    if (mui.os.plus && mui.os.ios) {
      mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
        plus.webview.currentWebview().setStyle({
          'popGesture': 'none'
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,
  body {
    background-color: #efeff4;
  }
  p {
    text-indent: 22px;
  }
  span.mui-icon {
    font-size: 14px;
    color: #007aff;
    margin-left: -15px;
    padding-right: 10px;
  }
  .mui-off-canvas-left {
    color: #fff;
  }
  .title {
    margin: 35px 15px 10px;
  }
  .title+.content {
    margin: 10px 15px 35px;
    color: #bbb;
    text-indent: 1em;
    font-size: 14px;
    line-height: 24px;
  }
  input {
    color: #000;
  }
  .mui-bar-tab{
    height: 60px;
  }
  .mui-bar-tab~.mui-content {
    padding-bottom: 60px;
  }
</style>
