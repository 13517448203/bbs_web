<template>
  <div class="wapper">
    <div class="wp-content">
      <h1 class="el-icon-edit">写帖子</h1>
      <div class="write-title">
        请在此输入标题：
        <el-input v-model="content.forumTitle"></el-input>
        请选择文章类型：
        <br>
        <el-select v-model="content.forumTypeId" placeholder="请选择文章类型">
          <el-option label="分享" value="1"></el-option>
          <el-option label="提问" value="2"></el-option>
          <el-option label="讨论" value="3"></el-option>
          <el-option label="建议" value="4"></el-option>
        </el-select>
      </div>
      <!--      ********* img 鼠标移上去  鼠标变成手可以点击-->

      <!--      **************-->
      <div class="submit-btn">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </div>
      <div>
        <!--
            @save: 按下 ctrl + s 时触发
            @change: 当值发生改变时 触发
        -->
        <mavon-editor
                @save="saveDoc"
                @change="updateDoc"
                ref="editor"
                v-model="content.forumPath">
        </mavon-editor>
      </div>

      <!-- 编辑弹出框 -->
      <el-dialog title="请输入验证码" :visible.sync="editVisible" width="25%">
        <div class="">
          <img style="width: 150px;height: 50px;vertical-align: middle" :src="imgUrl" type="primary" @click="refreshImg"/>
          <input style="width: 150px;height:45px;border-radius:5px;margin-left: 35px" type="text" v-model="imageCode"></input>
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button @click="editVisibleClick">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import {mavonEditor} from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  import {upPostContent, validateImageCode} from '@/network/write';

  export default {
    name: "Create",
    components: {mavonEditor},
    data() {
      return {
        imgUrl: 'http://localhost:8888/BBS/image.do?id=1',
        id: 0,
        status: 0,
        imageCode: '',
        content: {
          userName: localStorage.getItem('userName'),
          forumTitle: '',
          forumPath: '',
          forumTypeId: ''
        },
        editVisible: false
      };
    },
    created() {
      console.log(localStorage.getItem('userName'));
      if (localStorage.getItem('userName') === null || localStorage.getItem(('userName')) === undefined) {
        this.$message({
          message: '请先登录！',
          type: 'error'
        });
        this.$router.replace('/login')
      }
    },
    methods: {

      //点击图片 刷新验证码
      refreshImg() {
        let temp = this.imgUrl;
        this.imgUrl = this.imgUrl + this.id;
        this.id = this.id + 1;
      },

      editVisibleClick(){
        this.editVisible = false;
        this.refreshImg();
      },
      //提交验证码
      // subCode() {
      //
      // },

      onSubmit() {
        if (this.content.forumTitle === '') {
          this.$message({
            message: '请输入标题！',
            type: 'error'
          })
        } else if (this.content.forumTypeId === '') {
          this.$message({
            message: '请选择文章类型！',
            type: 'error'
          })
        }else if (this.content.forumPath === '') {
          this.$message({
            message: '内容不能为空！',
            type: 'error'
          })
        } else{
          this.editVisible = true;
        }
      },
      saveEdit() {
        /**
         * 网络请求相关
         */
        // ******
        if (this.imageCode === '') {
          this.$message.error('请输入验证码')
        } else if (!(/^[a-zA-z0-9]\w{3,3}$/.test(this.imageCode))) {
          this.$message.error('请输入4位验证码')
        } else {
          console.log(this.imageCode);
          validateImageCode(this.imageCode).then(res => {
            if (res.data === 0) {
              this.$message.error('验证码不正确')
            } else {
              upPostContent(this.content).then(res => {
                console.log(res.data);
                this.$message.success('发表成功！');
                this.$router.replace('/home')
              })
            }
          })
        }
      },


      // ******
      // if (this.status === 0) {
      //   this.$message.error('验证码不正确')
      // } else {
      //   upPostContent(this.content).then(res => {
      //     console.log(res.data);
      //   })
      //   this.$message.success('发表成功！');
      // }
    }
    ,
    updateDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容: " + markdown);
      console.log("html内容:" + html);
      this.content.forumPath = html;
    }
    ,
    saveDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容:" + markdown);
      console.log("html内容:" + html);
      this.content.forumPath = html;
    }
  }
  ;
</script>
<style scoped>
  .wapper {
    margin-top: 80px;
    width: 100%;
    max-width: 1920px;
    line-height: 50px;
    float: left;
  }

  .wp-content {
    position: relative;
    background: #fff;
    max-width: 1210px;
    height: 100%;
    margin: auto;
    padding: 0 10px 10px 10px;
  }

  .submit-btn {
    position: absolute;
    top: 200px;
    right: 70px;
  }
</style>