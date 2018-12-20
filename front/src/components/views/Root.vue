<template>
  <div class="root">
    <nav class="root-nav ">
      <ul>
        <li class="root-nav-home">
          <router-link :to="{name: 'view home'}"></router-link>
        </li>
        <li class="root-nav-work">
          <router-link :to="{name: 'view work'}"></router-link>
        </li>
        <li class="root-nav-our">
          <router-link :to="{name: 'view our'}"></router-link>
        </li>
        <li class="root-nav-know ">
          <router-link :to="{name: 'view know'}"></router-link>
        </li>
        <li class="root-nav-join">
          <router-link :to="{name: 'view join'}"></router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style type="text/less" lang="less" scoped>
  @import "~@/css/vars.less";

  .root {
    &-nav {
      position: fixed;
      right: 0;
      top: 50%;
      margin-right: 20px;
      transform: translateY(-50%);

      li{
        width: 40px;
        height: 40px;
        border: 2px solid white;
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        margin-top: 10px;
        background-color: black;
        a {
          width: 23px;
          height: 23px;
          margin-top: 6px;
          display: inline-block;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }

      &-home {
        animation: bounceInRight .5s;
        a {
          background-image: url(@NAV-HOME-URI);
        }
        a:hover, .router-link-active {
          background-image: url(@NAV-HOME-ACTIVE-URI);
        }
      }
      &-work {
        animation: bounceInRight .8s;
        a {
          background-image: url(@NAV-WORK-URI);
        }
        a:hover, .router-link-active {
          background-image: url(@NAV-WORK-ACTIVE-URI);
        }
      }
      &-our {
        animation: bounceInRight 1.1s;
        a {
          background-image: url(@NAV-OUR-URI);
        }
        a:hover, .router-link-active {
          background-image: url(@NAV-OUR-ACTIVE-URI);
        }
      }
      &-know {
        animation: bounceInRight 1.4s;
        a {
          background-image: url(@NAV-KNOW-URI);
        }
        a:hover, .router-link-active {
          background-image: url(@NAV-KNOW-ACTIVE-URI);
        }
      }
      &-join {
        animation: bounceInRight 1.7s;
        a {
          background-image: url(@NAV-JOIN-URI);
        }
        a:hover, .router-link-active {
          background-image: url(@NAV-JOIN-ACTIVE-URI);
        }
      }
    }
  }
</style>
