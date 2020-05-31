<template>
  <section class="signin signup">
    <div class="container-fluid">
      <div class="row">
        <div class="single-sign">
          <div class="sign-content">
            <h2>sign in</h2>
            <div class="signin-form">
              <form ref="loginForm" v-model="loginForm">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="signin_form">Account</label>
                      <input type="text" class="form-control" id="signin_form" v-model="loginForm.userName"
                             placeholder="Enter your Account here">
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="signin_form1">password</label>
                      <input type="password" class="form-control" id="signin_form1" v-model="loginForm.userPwd"
                             placeholder="Password">
                    </div><!--/.form-group -->
                  </div><!--/.col -->
                </div>
              </form><!--/form -->
            </div><!--/.signin-form -->
            <div class="signin-password">
              <div class="awesome-checkbox-list">
                <ul class="unstyled centered">
                  <li>
                    <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2">
                    <label for="styled-checkbox-2">Keep me Signed in</label>
                  </li>
                  <li>
                    <a href="#">Forgot Account or password ?</a>
                  </li>
                </ul>
              </div><!--/.awesome-checkbox-list -->
            </div><!--/.signin-password -->
            <div class="signin-footer">
<!--              <button type="button" class="btn signin_btn" @click="login()">-->
                              <button type="button" class="btn signin_btn" @click="logintest()">
                sign in
              </button>
              <p>
                Don’t have an Account ?
                <a @click="registerClick('/register')">register</a>
              </p>
            </div><!--/.signin-footer -->
          </div><!--/.sign-content -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  import {getUserLogin} from '@/network/userInfo'

  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          userName: '',
          userPwd: ''
        }
      };
    },
    methods: {
      login() {
        console.log(this.loginForm);
        getUserLogin(this.loginForm).then(resp => {
          console.log('login...'+resp);
          if (resp.data.status === 1) {
              this.$message({
              message: '用户或密码不正确！',
              type: 'error'
            });
          } else {
            this.$message({
              message: '登录成功！',
              type: 'success'
            });
            this.$addStorageEvent("userName", resp.data.userName);
            localStorage.setItem("userHead", resp.data.userImg);
            localStorage.setItem('flag', 'true');
            this.$router.replace('/userinfo');
          }
        })
      },
      registerClick(path) {
        this.$router.replace(path);
      },
      logintest() {
        this.$addStorageEvent("userName", "123123")
        localStorage.setItem("userHead", '../../static/img/header.jpg');
        localStorage.setItem('flag', 'true');
        this.$router.replace('/userinfo');
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
    padding: 129px 0 193px;
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

  .signin-footer p {
    color: #a1a5ad;
    font-size: 16px;
    font-family: "CircularStd-Book";
    max-width: 270px;
    margin: 34px auto;

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

</style>