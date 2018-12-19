<template>
  <div class="home">
    asdjkaksdjaklsdkalsdk
    <!--<img src="../../assets/img/bg.png" class="img" alt="">-->
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    你好啊兄弟
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'HomeView',
  };
</script>

<style type="text/less" lang="less" scoped>
  .home {
    color: white;
    overflow: auto;
    .img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
    }
  }
</style>
<style type="text/less" lang="less">
  @import (less) '~@/css/vars.less';

  html {
    width: 100%;
    height: 100%;
    background: #333 url(@BG-URI) no-repeat right bottom;
    background-attachment: fixed;
    background-size: 100% auto;

    body {
      background-attachment: fixed;
      background-repeat: no-repeat,no-repeat;
      background-position: left top, right top;
      background-color: rgba(255, 0, 0, 0.15);
      @media all and (max-width: 480px) {
        background-image: url(@BG1-URI) , url(@BG2-URI);
        background-size: 10% 100%;
      }
      @media all and (min-width: 480px) {
        background-image: url(@BG1-URI) , url(@BG2-URI);
        background-size: 30% auto;
      }
      @media all and (min-width: 992px) {
        background-image: url(@BG1-URI) , url(@BG2-URI);
        background-size: 30% auto;
      }

      @media all and (min-width: 1200px) {
        background-image: url(@BG1-URI) , url(@BG2-URI);
        background-size: 20% auto;
      }
    }
  }


</style>
