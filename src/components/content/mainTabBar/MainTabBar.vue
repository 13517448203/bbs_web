<template>
  <header>
    <div class="header-top">
      <div class="header-logo">
        logo
      </div>
      <nav class="header-nav">
        <div class="tabs-nav">
          <el-menu
                  :default-active="activeIndex"
                  @select="handleSelect"
                  class="el-menu-demo"
                  mode="horizontal"
                  router
                  background-color="#393D49"
                  text-color="#fff"
                  active-text-color="#46A976">
            <el-menu-item index="/home" class="el-icon-s-home">首页</el-menu-item>
            <el-menu-item index="/specialArea" class="el-icon-reading">专区</el-menu-item>
            <el-menu-item index="/generalize" class="el-icon-thumb">推广</el-menu-item>
            <div class="demo-input-suffix search">
              <el-input
                      placeholder="请输入内容"
                      prefix-icon="el-icon-search"
                      v-model="inputSearch">
              </el-input>
            </div>
            <el-menu-item index="/login" class="login-user">
<!--              @click="loginClick('/login')"-->
              <a  class="el-icon-user-solid"></a>
            </el-menu-item>
          </el-menu>
        </div>

      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "MainTabBar",
    components: {},
    data() {
      return {
        activeIndex: '/home',
        inputSearch: '',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // loginClick(path){
      //   this.$router.replace(path)
      // }
    }
  }
</script>

<style scoped>
  header {
    position: fixed;
    width: 100%;
    height: 60px;
    max-width: 1920px;
    background: #393D49;
    line-height: 60px;
    overflow: hidden;
    z-index: 999;
  }

  .header-top {
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }

  .header-logo {
    width: 15%;
    font-size: 30px;
    color: #fff;
    float: left;
  }

  .header-nav::after, .header-nav::before {
    content: "";
    display: block;
    clear: both;

  }

  .header-nav {
    width: 85%;
    float: left;
  }

  .tabs-nav {
    width: 100%;
    float: left;
  }

  .search {
    width: 200px;
    float: left;
    line-height: 60px;
    margin: 0 20px 0 280px;
  }

  .login-user {
    color: #FFF;
    font-size: 30px;
    line-height: 60px;
  }

</style>