<template>
  <div class="wrapper">
    <div class="edit-user-info">
      <el-tabs type="border-card" :tab-position="tabPosition" style="height: 600px;">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-tickets"></i> 个人资料</span>
          <person-info/>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-lock"></i> 密码</span>
          <edit-pwd/>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-picture-outline-round"></i> 头像</span>
          头像
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import PersonInfo from '../childs/PersonInfo'
  import EditPwd from '../childs/EditPwd'

  export default {
    name: "EditInfo",
    components: {
      PersonInfo,
      EditPwd
    },
    data() {
      return {
        tabPosition: 'left',
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin-top: 60px;
    width: 100%;
    max-width: 1920px;
    line-height: 50px;
    float: left;
  }

  .edit-user-info {
    max-width: 1000px;
    margin: 20px auto;
    background-color: #fff;
  }
</style>