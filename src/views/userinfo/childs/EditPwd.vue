<template>
  <div style="width: 820px;">
    <div style="margin: auto;max-width: 450px">
      <h2 style="text-align: center">修改密码</h2>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="旧密码" prop="oldpass">
          <el-input type="password" v-model="ruleForm.oldpass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 50px">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

  import {updatePwd} from '@/network/userInfo'

  export default {
    name: "PersonInfo",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'));
        } else if (value.length < 6 || value.length > 15) {
          callback(new Error('请输入6-15位密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else if (value.length < 6 || value.length > 15) {
          callback(new Error('请输入6-15位密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === this.ruleForm.oldpass) {
          callback(new Error('旧密码和新密码不能相同!'));
        } else {
          callback();
        }
      };
      var validatePass4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          oldpass: "",
          pass: '',
          checkPass: ''
        },
        rules: {
          oldpass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass3, validatePass2, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass4, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: 'submit！',
              type: 'success'
            });
            this.updatePwd()
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
      updatePwd() {
        updatePwd(localStorage.getItem('userName'), this.ruleForm.oldpass, this.ruleForm.pass).then(res => {
          if (res.data === 1) {
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
          } else if (res.data === 2) {
            this.$message({
              message: '旧密码不正确！',
              type: 'error'
            });
          }
        })
      }
    }
  }
</script>

<style scoped>
  .el-input {
    width: 280px;
  }
</style>