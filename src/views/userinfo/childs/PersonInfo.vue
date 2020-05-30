<template>
  <div style="width: 820px;">
    <div style="margin: auto;max-width: 450px">
      <h2 style="text-align: center">个人资料</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Tel" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="userIntroductory">
          <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  :autosize="{ minRows: 5, maxRows: 8}"
                  v-model="ruleForm.userIntroductory"
                  maxlength="100"
                  show-word-limit
          />
        </el-form-item>
        <el-form-item style="margin-left: 50px">
          <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

  import {getUserinfodata, updatePersonInfo} from '@/network/userInfo'

  export default {
    name: "PersonInfo",
    data() {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      return {
        ruleForm: {
          name: '',
          email: '',
          tel: '',
          userIntroductory: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入个人昵称', trigger: 'blur'},
            {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请正确的输入邮箱', trigger: 'blur'}
          ],
          tel: [
            {validator: checkPhone, required: true, message: '请输入正确的电话号码', trigger: 'blur'}
          ]
        }
      };
    },
    created() {
      // 请求个人信息数据
      this.getUserinfodata()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 请求更新个人信息数据
            this.updatePersonInfo();

            this.$message({
              message: 'submit！',
              type: 'success'
            });

          } else {
            this.$message({
              message: 'error submit！',
              type: 'error'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      /**
       * 网络请求相关
       */
      getUserinfodata() {
        getUserinfodata(localStorage.getItem('userName')).then(res => {
          this.ruleForm.name = res.data.userName;
          this.ruleForm.email = res.data.userMail;
          this.ruleForm.tel = res.data.userPhone;
          this.ruleForm.userIntroductory = res.data.userIntroductory;
        })
      },
      updatePersonInfo() {
        updatePersonInfo(this.ruleForm).then(res => {
          if (res.data === 1) {
            localStorage.setItem('userName', this.ruleForm.name);
            location.reload();
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '修改的昵称重复！',
              type: 'error'
            });
          }
        })
      },
    }
  }
</script>

<style scoped>
  .el-input {
    width: 280px;
  }
</style>