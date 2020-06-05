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
                v-model="doc">
        </mavon-editor>
      </div>
    </div>
  </div>
</template>
<script>
  import {mavonEditor} from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  import {upPostContent} from '@/network/write';

  export default {
    name: "Create",
    components: {mavonEditor},
    data() {
      return {
        doc: "",
        content: {
          userName: localStorage.getItem('userName'),
          forumTitle: '',
          forumPath: '',
          forumTypeId: ''
        }
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
      onSubmit() {
        if (this.content.forumTitle === '') {
          this.$message({
            message: '请输入标题！',
            type: 'error'
          })
        } else if (this.content.forumTypeId === "") {
          this.$message({
            message: '请选择文章类型！',
            type: 'error'
          })
        } else if (this.content.forumPath === "") {
          this.$message({
            message: '内容不能为空！',
            type: 'error'
          })
        } else {
          /**
           * 网络请求相关
           */
          upPostContent(this.content).then(res => {
            console.log(res.data);
          })
        }
      },
      updateDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        console.log("markdown内容: " + markdown);
        console.log("html内容:" + html);
        this.content.forumPath = html;
      },
      saveDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        console.log("markdown内容:" + markdown);
        console.log("html内容:" + html);
        this.content.forumPath = html;
      }
    }
  };
</script>
<style scoped>
  .wapper {
    margin-top: 70px;
    width: 100%;
    max-width: 1920px;
    line-height: 50px;
    float: left;
  }

  .wp-content {
    position: relative;
    background: #fff;
    max-width: 1110px;
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