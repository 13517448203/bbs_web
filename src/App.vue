<template>
  <div id="app">
    <main-tab-bar/>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  .main-content {
    width: 100%;
    max-width: 1920px;
    margin-top: 1px;
  }

</style>
