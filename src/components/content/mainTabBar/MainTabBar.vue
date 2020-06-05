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
                      v-model="inputSearch" @keyup.enter.native="sub()">
              </el-input>
            </div>
            <el-menu-item v-if="flag" index="/userinfo" class="login-user">
              <!--              @click="loginClick('/userinfo')"-->
              <!--              <a class="el-icon-user-solid"></a>-->
              <el-dropdown placement="bottom-start" @command="handleCommand" style="font-size: 12px !important;">
                <span class="el-dropdown-link">
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="40" :src="userHead" style="background-size: 100%"></el-avatar>
                      <h3 style="color: white;font-family:'仿宋';float: right;">{{userName}}</h3>
                    </div>
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-item">
                  <el-dropdown-item command="a">我的主页</el-dropdown-item>
                  <el-dropdown-item command="b">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
            <el-menu-item v-else index="/login" class="login-user">
              <div class="demo-basic--circle">
                <div class="block">
                  <el-avatar :size="40" :src="circleUrl"></el-avatar>
                </div>
              </div>
            </el-menu-item>
          </el-menu>
        </div>

      </nav>
    </div>
  </header>
</template>

<script>
  import getPostSearchData from '@/network/home'

  export default {
    name: "MainTabBar",
    components: {},
    data() {
      return {
        flag: false,
        timer: '',
        userName: '',
        activeIndex: '/home',
        inputSearch: '',
        userHead: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
    mounted() {
      this.getlocal()
      window.addEventListener('setItem', (e) => {
        this.getlocal()
      });
    },
    watch: {
      'inputSearch': function (newVal) {
        // console.log(this.inputSearch);

      },
    },
    methods: {
      sub() {
        console.log(this.inputSearch);
        // 2.跳转到搜索页面
        this.$router.push({path: '/postsearch', query: {inputSearch : this.inputSearch}})
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      loginClick(path) {
        this.$router.replace(path)
      },
      handleCommand(command) {
        if (command === 'b') {
          this.flag = false;
          localStorage.clear();
          console.log('clear本地');
          this.$router.replace('/home')
        } else {
          this.$router.replace('/userinfo')
        }
      },
      getlocal() {
        if (localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== undefined) {
          this.userName = localStorage.getItem('userName')
        }
        if (localStorage.getItem('flag') !== null && localStorage.getItem('flag') !== undefined) {
          this.flag = localStorage.getItem('flag')
        }
        if (localStorage.getItem('userHead') !== null && localStorage.getItem('userHead') !== undefined) {
          this.userHead = localStorage.getItem('userHead')
        }
        console.log('maintabbar...' + this.flag, this.userName, this.userHead);
      }
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
    max-width: 1200px;
    margin: auto;
    padding-left: 20px;
  }

  .header-logo {
    width: 15%;
    font-size: 30px;
    color: #fff;
    float: left;
    padding-left: 70px;
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
    margin: 0 20px 0 310px;
  }

  .login-user {
    color: #FFF;
    font-size: 30px;
    line-height: 60px;
  }

</style>