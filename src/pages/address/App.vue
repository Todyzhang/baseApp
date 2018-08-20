<template>
  <transition name="slide-left">
    <router-view></router-view>
  </transition>
</template>

<script>

  export default {
    name: "app",
    mounted(){
      mui.addBack({name:'self',index:2,handle:function(){console.log('back');}});
    }
  }
</script>

<style scoped>
  /*渐变动效*/
  /*.slide-left-enter-active,*/
  /*.slide-left-leave-active {*/
    /*transition: all .1s ease-in;*/
    /*opacity: 1;*/
  /*}*/

  /*.slide-left-enter,*/
  /*.slide-left-leave-active {*/
    /*opacity: 0;*/
  /*}*/

  /*左滑动效*/
  .slide-left-enter-active {
    animation: slideLeft 1s;
  }
  .slide-left-leave-active{
    animation:slideRight .3s;
  }

  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0
    }
  }
</style>

