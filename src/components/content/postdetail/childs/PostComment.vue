<template>
  <div class="warpper">
    <div class="comment-edit-box" style="float: left;width: 100%">
      <div class="user-img" style="float: left">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="35" :src="headerPhoto"
                       style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
          </div>
        </div>
      </div>
      <el-form ref="commentform" :model="commentform" style="float: right;width: 94%">
        <el-form-item>
          <el-input
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 4}"
                  placeholder="请输入内容"
                  v-model="commentform.commentContent"
                  maxlength="1000" show-word-limit>
          </el-input>
        </el-form-item>
        <div class="opt-box">
          <div class="right-box">
            <el-button v-if="textFlag" class="btn btn-sm btn-cancel" @click="cancelClick">取消回复</el-button>
            <el-button class="btn btn-sm btn-comment" @click="sendComment">发表评论</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <div class="commont-list-container" style="width: 100%;display:block;">
      <div class="comment-list-box">
        <ul class="comment-list" v-for="(item,key) in commentList">
          <li class="comment-line-box">
            <div class="user-img">
              <div class="demo-basic--circle">
                <div class="block">
                  <el-avatar :size="25" :src="item.user.userImg"
                             style="background-size: 100%;"></el-avatar>
                </div>
              </div>
            </div>
            <div class="right-box">
              <div class="new-info-box">
                <span class="name">{{item.user.userName}}</span>：
                <span class="new-comment">{{item.commentPath}}</span>
                <span class="new-comment-time" style="margin-left: 8px">{{item.time}}</span>
              </div>
              <div class="comment-like">
                <i v-if="item.status === 0" class="el-icon-thumb" @click="commentLike(key)">{{item.commentLike}}</i>
                <!--                加一个  当！=0 时 颜色变红 点击无效果*******-->
                <i v-else class="el-icon-thumb commentlike-after">{{item.commentLike}}</i>
                <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square" @click="comment(key)"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  //添加请求方法
  import {getPostComment, insertComment, addCommentCike} from '@/network/write'

  export default {
    name: "PostComment",
    data() {
      return {
        textFlag: false,
        commentList: [],
        commentform: {
          commentContent: ''
        },
        headerPhoto: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      }
    },
    watch: {
      'commentform.commentContent': function (newVal) {
        if (newVal === '') {
          this.textFlag = false
        } else {
          this.textFlag = true
        }
      }
    },
    methods: {
      cancelClick() {
        this.commentform.commentContent = ''
      },


      //点击评论得到被评论用户的名字
      comment(key) {
        this.commentform.commentContent = "@ " + this.commentList[key].user.userName + ":  ";
      },

      //用户发表评论
      sendComment() {
        //先判断评论框是否为空
        if (this.commentform.commentContent === '') {
          //请输入评论内容
          this.$message.error('请输入评论内容!')
          return;
        }

        let commentPath = this.commentform.commentContent;
        let id = this.$route.query.id;
        //评论者的id 先提交名字
        let commenterName = localStorage.getItem('userName');
        insertComment(id, commenterName, commentPath).then(resp => {

          console.log("////////////////" + resp.data);

          //这里需要判断返回值 1为发表成功 0表示发表失败 虽然绝大多情况是1
          //这里得判断不正确需要改 resp.data == '1' 如何都返回false
          if (resp.data === 1) {
            //发表成功
            //*****弹窗提示发表成功
            this.$message.success('发表成功！')
          } else {
            //发表失败
            //*******弹窗提示发表失败
            this.$message.error('发表失败！')
          }

          //清空数据  为了实现评论之后 显示评论 且不刷新页面
          this.commentform.commentContent = '';
          getPostComment(id).then(resp => {
            //得到数据
            this.commentList = resp.data;
          })

        });
      },

      commentLike(key) {
        //点赞数加一
        this.commentList[key].commentLike = this.commentList[key].commentLike + 1;
        //stasus改变 变成不可点击
        this.commentList[key].status = 1;
        //发出请求 点赞加1
        let commentId = this.commentList[key].commentId;
        addCommentCike(commentId).then(resp => {

        })
      }
    },

    //创建时请求 得到评论数据
    created() {

      var id = this.$route.query.id;
      console.log("************************" + id);
      getPostComment(id).then(resp => {
        //得到数据
        this.commentList = resp.data;
        console.log("************************" + resp.data[0].commentPath);
        console.log("************************" + resp.data[0].status);
      })
      // this.getPostDetail()
    },
  }
</script>

<style scoped>
  .comment-edit-box {
    padding: 16px 24px 8px;
  }

  .user-img {
    margin-right: 8px;
    vertical-align: middle;
  }

  .comment-list-box {
    position: relative;
    overflow: hidden;
    padding: 0 24px;
  }

  .comment-list {
    position: relative;
    width: 100%;
    margin-top: 16px;
    border-bottom: 1px solid #f7f7fc;
  }

  .comment-line-box {
    position: relative;
    margin-bottom: 15px;
  }

  .comment-list-box ul .comment-list {
    margin-top: 16px;
    border-bottom: 1px solid #f7f7fc;
  }

  .comment-list-box ul.comment-list li.comment-line-box {
    position: relative;
    margin-bottom: 15px;
  }

  .right-box {
    margin-left: auto;
    float: right;
  }

  .comment-line-box div.right-box {
    position: relative;
    width: 97%;
  }

  .comment-line-box div.right-box div.new-info-box {
    width: 92%;
    line-height: 0px;
    margin-bottom: 4px;
    word-wrap: break-word;
    color: #999;
  }

  .comment-like {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    color: #4d4d4d;
    text-align: left;
  }

  .commentlike-after {
    color: #e33e33;

  }

  .opt-box .right-box .btn-comment {
    padding: 0;
    margin: 0;
    border: 1px solid #e33e33;
    background-color: #e33e33;
    color: #fff;
    -webkit-transition: background-color .1s ease-in-out, border-color .1s ease-in-out;
    transition: background-color .1s ease-in-out, border-color .1s ease-in-out;
  }

  .btn, .btn-sm {
    height: 30px;
    line-height: 30px;
    min-width: 72px;
  }

  .opt-box .right-box .btn-cancel {
    padding: 0;
    border: 1px solid #ccc;
    margin-right: 5px;
    color: #4d4d4d;
  }


  .name, .new-comment {
    color: #000;
    font-size: 14px;
  }
</style>