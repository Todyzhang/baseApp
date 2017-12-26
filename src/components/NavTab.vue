<!--
<template>
  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item mui-active">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item">
      <span class="mui-icon mui-icon-phone"></span>
      <span class="mui-tab-label">电话</span>
    </a>
    <a class="mui-tab-item">
      <span class="mui-icon mui-icon-email"></span>
      <span class="mui-tab-label">邮件</span>
    </a>
    <a class="mui-tab-item">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">设置</span>
    </a>
  </nav>
</template>
-->

<script>
  import mui from "mui"

  export default {
    name: "nav-bar",
    props: {
      ntItems: {
        type: Array,
        required: true
      }
    },
    render(createElement) {
      let createIcon = function (icon) {
        return createElement(
          "span",
          {
            "class": ["mui-icon",icon]
          }
        )
      };
      let createText = function (text) {
        return createElement(
          "span",
          {
            "class": "mui-tab-label",
            "domProps": {
              innerHTML: text
            }
          }
        )
      };
      let createItem = function (data) {
        return createElement(
          "a",
          {
            "class": "mui-tab-item"
          },
          [
            createIcon(data.icon),
            createText(data.text)
          ]
        )
      };

      return createElement(
        "nav",
        {
          "class": ["mui-bar","mui-bar-tab"]
        },
        this.ntItems.map(function (aDom) {
          return createItem(aDom)
        })
      )
    },
    computed:{

    }
  }
</script>

<style scoped>

</style>
