<template>
  <div class="focus-wrapper">
    <div class="focus-top">
      <h2>我的粉丝</h2>
      <p>共<span>{{focus.count}}</span>人</p>
    </div>
    <div class="focus-bottom">
      <ul style="list-style: none">
        <li :id="item" v-for="item in focus.count">
          <div class="demo-basic--circle">
            <div class="block">
            <el-avatar :size="40" :src="focus.item.header"
                       style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
            <span>{{focus.item.name}}</span>
          </div>

            <div v-if="flagFocus">
              <button class="focus-btn" @click="flagFocuss(!flagFocus,item)">+关注</button>
            </div>
            <div v-else>
              <button class="focus-btn-cancel" @click="flagFocuss(!flagFocus,item)">取消关注</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyFans",
    data() {
      return {
        flagFocus: true,
        focus: {
          count: 4,
          item: {
            header: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            name: 'After'
          }
        }
      }
    },
    methods: {
      flagFocuss(flag,itemCount){
        this.flagFocus=flag;
        console.log(this.flagFocus,itemCount);
      }
    }
  }
</script>

<style scoped>
  .focus-wrapper {
    width: 100%;
    padding: 0 15px;
  }

  .focus-top {
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e0e0e0;
  }

  .focus-top h2 {
    float: left;
  }

  .focus-top p {
    float: right;
  }

  .el-avatar {
    vertical-align: middle;
  }

  .focus-bottom span {
    font-size: 15px;
    color: black;
  }

  .focus-bottom li {
    height: 66px;
    line-height: 20px;
    padding-top: 12px;
    border-top: 1px solid #f5f6f7;
  }

  .el-avatar:hover, .demo-basic--circle span:hover {
    cursor: pointer;
    color: palevioletred;
  }

  .block {
    float: left;
  }

  .focus-btn {
    height: 35px;
    width: 90px;
    line-height: 20px;
    float: right;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    color: #ca0c16;
    background: #fde3e4;
    border: 1px solid #ca0c16;
  }

  .focus-btn:hover {

    color: #CA0C16;
    background: #FCC7CA;
    border: 1px solid #CA0C16;
  }

  .focus-btn-cancel {
    height: 35px;
    width: 90px;
    line-height: 20px;
    float: right;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #999;
    color: #999;
    background: #fff;
  }

  .focus-btn-cancel:hover {
    color: #ca0c16;
    background: #fde3e4;
    border: 1px solid #ca0c16;
  }
</style>