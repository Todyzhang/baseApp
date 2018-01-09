<template>
  <div class="mui-pager">
    <slot name="page-header"></slot>
    <slot name="page-footer"></slot>
    <div :id="scrollId" class="mui-content mui-scroll-wrapper" :style="getBgColor">
      <div class="mui-scroll" :style="scrollType">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "top-content",
      props: {
        scrollType: {
          type: Object
        },
        bgColor: {
          type: String
        }
      },
      data() {
        return {
          scrollId: "scroll"+(+new Date)
        }
      },
      computed: {
        getBgColor() {
          return {backgroundColor:this.bgColor}
        }
      },
      mounted() {
        // mui("#"+this.scrollId).scroll();
      }
    }
</script>

<style scoped>
  .mui-scroll{
    min-height: 80%;
  }
</style>
