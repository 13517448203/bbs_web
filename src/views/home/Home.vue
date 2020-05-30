<template>
  <div class="top-content">
    <div class="tabs-content">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="color: #393D49;">
        <el-tab-pane label="首页" name="first">
          <homepage/>
        </el-tab-pane>
        <el-tab-pane label="提问" name="second">
          <questions/>
        </el-tab-pane>
        <el-tab-pane label="分享" name="third">
          <shares/>
        </el-tab-pane>
        <el-tab-pane label="讨论" name="fourth">
          <discussion/>
        </el-tab-pane>
        <el-tab-pane label="建议" name="fifth">
          <suggest/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="write_click">
      <button  type="button" class="btn write_btn " @click="writeClick()">
        <i class="el-icon-edit-outline"></i>
        写帖子
      </button>
    </div>
  </div>
</template>

<script>
  import Homepage from './childs/Homepage'
  import Questions from './childs/Questions'
  import Shares from './childs/Shares'
  import Discussion from './childs/Discussion'
  import Suggest from './childs/Suggest'

  export default {
    name: "Home",
    components:{
      Homepage,
      Questions,
      Shares,
      Discussion,
      Suggest
    },
    data() {
      return {
        activeName: 'first'
      }
    },
    created() {
      console.log("home");
    },
    methods:{
      writeClick(){
        this.$router.push('/writepost')
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .top-content {
    margin-top: 60px;
    width: 100%;
    height: 50px;
    max-width: 1920px;
    background: #fff;
    line-height: 50px;
    float: left;
  }

  .tabs-content {
    max-width: 1050px;
    margin: auto;
  }

  .write_click{
    position: absolute;
    top: 60px;
    left: 950px;
    line-height: 55px;
  }

  .btn.write_btn, .btn.write_btn:focus {
    width: 80px;
    padding: 0;
    height: 40px;
    line-height: 40px;
    background: #26d9b3;
    border-radius: 2px;
    border: 0px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

</style>