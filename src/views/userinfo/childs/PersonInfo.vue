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
        <el-form-item style="margin-left: 50px">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonInfo",
    data() {
      return {
        ruleForm: {
          name: '',
          email: '',
          tel:''
        },
        rules: {
          name: [
            {required: true, message: '请输入个人昵称', trigger: 'blur'},
            {min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请正确的输入邮箱', trigger: 'blur'}
          ],
          tel: [
            {type: 'date', required: true, message: '请输入电话号码', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-input {
    width: 280px;
  }
</style>