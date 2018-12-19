<template>
  <div class="begin">
    <el-carousel indicator-position="none" :height="bodyClientHeight" :autoplay="!isAnimate"
      arrow="never" :interval="2000">
      <el-carousel-item v-for="(url,index) in beginImgs" :key="index">
        <img :src="url" :class="['begin-bg',{'begin-bg-animate':isAnimate}]">
      </el-carousel-item>
    </el-carousel>
    <div :class="['begin-action',{'begin-action-animate':isAnimate}]">
      <h1 class="begin-action-title">ORCA 实验室</h1>
      <el-button type="primary" round icon="el-icon-success" @click="handleBegin"
        class="begin-action-btn">现在开始
      </el-button>
    </div>
    <div class="begin-animate" v-if="isAnimate">
      <img class="begin-animate-bg" src="@/assets/img/blackHole.png"/>
    </div>
    <!--用于覆盖播放的图片，这样使el-carousel不能触发hover事件，解决一hover就停止自动播放-->
    <div class="begin-solve"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  const BEGIN_IMGS = ['/img/mountain.jpg', '/img/climb.jpg', '/img/uav.jpg'];
  export default {
    name: 'BeginView',
    data() {
      return {
        isAnimate: false
      };
    },
    computed: {
      bodyClientHeight() {
        return `${window.innerHeight}px`;
      },
      beginImgs() {
        return BEGIN_IMGS;
      }
    },
    methods: {
      handleBegin() {
        this.isAnimate = true;
        setTimeout(() => this.$router.push({name: 'view home'}), 4000);
      }
    }
  };
</script>

<style type="text/less" lang="less">
  .begin {
    overflow: hidden;
    &-solve {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index:50;
    }

    &-bg {
      width: 100%;
      min-height: 100%;
      &-animate {
        @keyframes bg-animate {
          from {
            z-index: 400;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%) scale(1) ;
          }
          to {
            position: absolute;
            left: 50%;
            top: 50%;
            transform:translateY(-50%) translateX(-50%) scale(0) ;
          }
        }
        animation: bg-animate 4s;
      }
    }

    &-action {
      position: absolute;
      z-index: 100;
      left: 50%;
      top: 50%;
      text-align: center;
      transform: translateX(-50%) translateY(-50%);
      &-animate {
        @keyframes action-animate {
          from {
            z-index: 400;
            transform:translateX(-50%) translateY(-50%) scale(1);
          }
          to {
            transform:translateX(-50%) translateY(-50%) scale(0);
          }
        }
        animation: action-animate 4s;
      }

      &-title {
        white-space: nowrap;
        font-size: 80px;
        color: white;
        outline: none;
        @media(max-width: 768px){
          font-size: 50px;
        }
      }
    }

    &-animate {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 100;
      @keyframes animate {
        0% {
          transform: rotate(0deg);
          width: 0;
          height: 0;
        }
        50% {
          width: 800px;
          height: 800px;
        }
        100% {
          width: 0;
          height: 0;
          transform: rotate(360deg);
        }
      }

      &-bg {
        animation: animate 5s;
      }
    }
  }
</style>

<style>
  body {
    overflow: hidden;
    /*font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;*/
  }
</style>
