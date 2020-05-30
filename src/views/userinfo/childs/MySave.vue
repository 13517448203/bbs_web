<template>
  <ul class="post">
    <li class="post-li"v-for="itemdata of postInfo" >
      <div class="post-container" v-for="item in itemdata.listForumInfo">
        <div class="post-content" @click="postDetail(item.forumId)">
          <h2>{{item.forumTitle}}</h2>
          <p @click="postDetail(item.forumId)">{{item.forumPath}}</p>
          <div class="post-bottom">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="35" :src="item.userImg"
                           style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
                <h4 class="post-time">{{item.forumTime}}</h4>
                <h3>{{item.forumName}}</h3>
              </div>
            </div>
            <div class="poster-num">
              <ul>
                <li v-if="item.forumLike>0"><i class="el-icon-thumb"></i>{{item.forumLike}}
                </li>
                <li v-if="item.forumClick>0"><i class="el-icon-view"></i>{{item.forumClick}}
                </li>
                <li v-if="item.commentNum>0"><i class="el-icon-chat-dot-square"></i>{{item.commentNum}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

  import {getMySavedata} from '@/network/userInfo'

  export default {
    name: "MySave",
    data() {
      return {
        postInfo: {}
      }
    },
    created() {
      // 请求个人信息的粉丝数  我的帖子 等数据
      this.getMySavedata()
    },
    methods: {
      postDetail(data) {
        //  data:帖子id
        console.log(data);
        this.$router.push('/postDetail')
      },
      /**
       * 网络请求相关
       */
      getMySavedata() {
        getMySavedata(localStorage.getItem('userName')).then(res => {
          console.log("mypost...." + res);
          this.postInfo = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }

  .post-li {
    margin-bottom: 10px;
  }

  .post-li:hover {
    /*box-shadow: 0 0 12px rgba(100, 100, 100, 0.3);*/
    box-shadow: 0 0 12px #95a5a6;
  }

  .post-container {
    height: 150px;
    width: 100%;
    padding: 2px;
    background-color: #7f8c8d;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);

  }

  .post-content {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 5px 15px;
  }

  .post-content h2:hover, .poster-num li:hover, .el-avatar:hover, .post-bottom h3:hover {
    cursor: pointer;
    color: palevioletred;
  }

  .post-bottom {
    width: 100%;
  }

  h2, p, .demo-basic--circle, .post-bottom {
    float: left;
  }

  .poster-num {
    float: right;
  }

  .post-content p {
    width: 100%;
    line-height: 25px;
    height: 52px;
    font-size: 15px;
    text-indent: 2em;
    margin-bottom: 2px;
    /* 隐藏多于文字 */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .post-bottom h3 {
    font-family: "仿宋";
    float: right;
    color: black;
    line-height: 35px;
  }

  .post-bottom h4 {
    font-family: "宋体";
    float: right;
    line-height: 35px;
    margin-left: 5px;
    font-size: 13px;
  }

  .poster-num li {
    float: left;
    height: 10px;
    margin-right: 10px;
    line-height: 35px;
  }
</style>