<template>
  <section class="signin signup">
    <div class="container-fluid">
      <div class="row">
        <div class="single-sign">
          <div class="sign-content">
            <h2>sign up</h2>
            <div class="signin-form">
              <form action="" v-model="RegisterForm">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="username">UserName</label>
                      <input type="text" class="form-control" id="username" v-model="RegisterForm.userName"
                             placeholder="username"><span class="tian">*(为必填)</span>
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password" v-model="RegisterForm.userPwd"
                             placeholder="Password"><span class="tian">*(为必填)</span>
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                  <div class="col-sm-12">
                    <div class="form-group ">
                      <label for="rePassword">rePassword</label>
                      <input type="password" class="form-control" id="rePassword" v-model="RegisterForm.rePassword"
                             placeholder="rePassword">
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" id="email" v-model="RegisterForm.userMail"
                             placeholder="info@abc.com">
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="telephone">Tel</label>
                      <input type="text" class="form-control" id="telephone" v-model="RegisterForm.userPhone"
                             placeholder="Tel"><span class="tian">*(为必填)</span>
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                  <!--                  <div class="col-sm-12">-->
                  <!--                    <div class="form-col">-->
                  <!--                      <div class="form-group">-->
                  <!--                        <label for="code">code</label>-->
                  <!--                        <input type="text" class="form-control" id="code" v-model="RegisterForm.code"-->
                  <!--                               placeholder="code">-->
                  <!--                      </div>&lt;!&ndash;/.form-group &ndash;&gt;-->
                  <!--                    </div>&lt;!&ndash;/.col &ndash;&gt;-->
                  <!--                    <div class="form-col1">-->
                  <!--                      <div class="form-group">-->
                  <!--                        <button type="button" class="btn code_btn" @click="register">-->
                  <!--                          获取验证码-->
                  <!--                        </button>-->
                  <!--                      </div>&lt;!&ndash;/.form-group &ndash;&gt;-->
                  <!--                    </div>&lt;!&ndash;/.col &ndash;&gt;</div>&lt;!&ndash;/.col &ndash;&gt;-->
                </div>
              </form>
            </div><!--/.signin-form -->
            <div class="signin-footer">
              <button type="button" class="btn signin_btn" @click=" register()">
                sign up
              </button>
              <p>
                Already a Member ? <a @click="loginClick('/login')">login</a>
              </p>
            </div><!--/.signin-footer -->
          </div><!--/.sign-content -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {getUserRegister} from '@/network/userInfo'

  export default {
    name: "Register",
    data() {
      return {
        RegisterForm: {
          userName: '',
          userPwd: '',
          rePassword: '',
          userMail: '',
          userPhone: ''
        }
      }
    },
    methods: {
      register() {
        if (this.RegisterForm.userName === '' || this.RegisterForm.userPwd === ''
          || this.RegisterForm.userPhone === '') {
          this.$message({
            message: '必填字段不能为空！',
            type: 'error'
          });
          return false;
        } else if (!(/^[a-zA-z0-9]\w{5,14}$/.test(this.RegisterForm.userName))) {
          this.$message({
            message: '请输入6-15位账号(支持大写、小写字母和数字)！',
            type: 'error'
          });
          return false;
        } else if (!(/^[a-zA-z0-9]\w{5,14}$/.test(this.RegisterForm.userPwd))) {
          this.$message({
            message: '请输入6-15位密码(支持大写、小写字母和数字)！',
            type: 'error'
          });
          return false;
        } else if (this.RegisterForm.userPwd !== this.RegisterForm.rePassword) {
          this.$message({
            message: '两次密码不一致！',
            type: 'error'
          });
          return false;
        } else if (this.RegisterForm.userMail !== null
          && !(/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(this.RegisterForm.userMail))) {
          this.$message({
            message: '请输入正确的邮箱！',
            type: 'error'
          });
          return false;
        } else if (!(/^1\d{10}$/.test(this.RegisterForm.userPhone))) {
          this.flag = 0;
          this.$message({
            message: '请输入正确的手机号码！',
            type: 'error'
          });
          return false;
        } else {
          console.log(this.RegisterForm)
          getUserRegister(this.RegisterForm).then(resp => {
            console.log(resp.data);
            if (resp.data === 2) {
              this.$message({
                message: '注册失败，用户名重复！',
                type: 'error'
              });
            } else if (resp.data === 3) {
              this.$message({
                message: '注册失败，手机号码重复！',
                type: 'error'
              });
            } else if (resp.data === 4) {
              this.$message({
                message: '注册失败，手机号码及用户名重复！',
                type: 'error'
              });
            } else if (resp.data === 1) {
              this.$message({
                message: '恭喜你，注册成功！',
                type: 'success'
              });
              this.loginClick('/login')
            }
          })
        }
      },
      loginClick(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped>
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #464d5f;
    text-transform: capitalize;
    font-weight: 400;
  }

  a, a:hover, a:active, a:focus {
    display: inline-block;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
  }

  .row {
    margin-right: -15px;
    margin-left: -15px;
  }


  .sign-content {
    max-width: 620px;
    margin: 0 auto;
    padding: 80px 0 30px 0;
  }

  .sign-content h2 {
    color: #202e42;
    font-size: 30px;
    text-align: center;
    margin-bottom: 60px;
    font-family: "CircularStd-Book";
    text-transform: uppercase;
  }

  .signin-form .form-control {
    background: transparent;
    border: 1px solid #b0b9c7;
    border-radius: 5px;
    outline: 0 !important;
    box-shadow: none;
    height: 46px;
  }

  .form-control {
    display: block;
    width: 100%;
  }

  .col-sm-12 {
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .signin-form .form-col {
    width: 48.5%;
    float: left;
  }

  .signin-form .form-col1 {
    width: 48%;
    float: right;
  }

  .signin-form label {
    color: #627183;
    font-size: 16px;
    font-family: "CircularStd-Book";
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 15px;
  }

  label {
    display: inline-block;
    max-width: 100%;
  }

  .signin-form input[type="text"], .signin-form input[type="email"], .signin-form input[type="password"] {
    color: #202e42;
    font-size: 16px;
    font-family: "CircularStd-Book";
    text-transform: initial;
    padding: 0 18px;
  }

  .signin-form .form-col {
    width: 48.5%;
    float: left;

  }

  .signin-form .form-col1 {
    width: 48%;
    float: right;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .styled-checkbox {
    position: absolute;
    opacity: 0;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    -ms-transition: ease-in-out .3s;
    -o-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
  }

  .styled-checkbox + label, .awesome-checkbox-list a {
    position: relative;
    left: -2px;
    cursor: pointer;
    padding: 0;
    color: #90959e;
    font-size: 16px;
    font-family: "CircularStd-Book";
    font-weight: 500;
  }

  .styled-checkbox + label:before {
    position: relative;
    top: -7px;
    content: '';
    margin-right: 16px;
    display: inline-block;
    vertical-align: text-top;
    width: 30px;
    height: 30px;
    background: transparent;
    border: 1px solid #ebebeb;
    border-radius: 5px;
  }

  .styled-checkbox:hover + label:before {
    background: #fff;
  }

  .styled-checkbox:checked + label:before {
    background: #fff;
  }

  .styled-checkbox:checked + label:after {
    content: '';
    position: absolute;
    left: 11px;
    top: 11px;
    background: #26d9b3;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 #26d9b3,
    4px 0 0 #26d9b3,
    4px -2px 0 #26d9b3,
    4px -4px 0 #26d9b3,
    4px -6px 0 #26d9b3,
    4px -8px 0 #26d9b3;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    transform: rotate(45deg);
  }


  .unstyled li {
    display: inline-block;
    margin: 20px 0;
  }

  .centered {
    width: 620px;
    margin: auto;
  }

  .unstyled li:last-child {
    float: right;
  }

  .btn.signin_btn, .btn.signin_btn:focus {
    width: 620px;
    padding: 0;
    height: 60px;
    background: #26d9b3;
    color: #fff;
    font-size: 16px;
    font-family: "CircularStd-Bold";
    text-transform: uppercase;
    border-radius: 3px;
    box-shadow: 0 5px 30px rgba(60, 191, 163, .3);
    margin-top: 10px;
  }

  .btn.code_btn, .btn.code_btn:focus {
    width: 300px;
    padding: 0;
    height: 50px;
    background: #fff;
    color: #000;
    font-size: 16px;
    font-family: "CircularStd-Bold";
    text-transform: uppercase;
    border: 1px solid #26d9b3;
    border-radius: 6px;
    box-shadow: 0 5px 30px rgba(60, 191, 163, .1);
    margin-top: 30px;
  }

  .signin-footer p {
    color: #a1a5ad;
    font-size: 16px;
    font-family: "CircularStd-Book";
    max-width: 270px;
    margin: 34px auto;
    text-align: center;
  }

  .signin-footer p > a {
    color: #202e42;
    font-size: 16px;
    font-family: "CircularStd-Book";
    font-weight: 500;
    text-transform: capitalize;

  }

  .modal-content .sign-content {
    max-width: 500px;
    margin: 0 auto;
    padding: 57px 0px;
  }

  .modal-content .centered, .modal-content .btn.signin_btn, .modal-content .btn.signin_btn:focus {
    max-width: 500px;
  }

  .sign-content.popup-in-content .btn.signin_btn, .sign-content.popup-in-content .btn.signin_btn:focus {
    width: 500px;
  }

  .sign-content.popup-in-content .centered {
    width: auto;
    margin: auto;
  }

  .sign-content {
    max-width: 620px;
    margin: 0 auto;
  }

  .tian {
    color: red;
    float: right;
    font-size: 12px;
    margin-right: -100px;
    margin-top: -30px;
  }
</style>