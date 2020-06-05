<template>
  <div class="category">
    <div class="category-top-title">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="综合" name="first">
          <ul class="home-top-list">
            <li class="ul-list-li" v-for="item in homePostData" @click="postDetail(item.forumId)">
              <div class="demo-basic--circle title-avatar">
                <div class="block">
                  <el-avatar shape="square" :size="40" :src="item.user.userImg"></el-avatar>
                </div>
              </div>
              <h2>
                <a class="li-tab">{{item.forumTypeId | showPostStatus}}</a>
                <a>{{item.forumTitle}}</a>
              </h2>
              <div class="li-info">
                <a><cite>{{item.user.userName}}</cite></a>
                <span>{{item.forumTime}}</span>
                <span class="li-list-nums">
                    <i title="获赞" class="icon-pinglun1 iconfont el-icon-thumb"> {{item.forumLike}}</i>
                    <i title="浏览" class="icon-pinglun1 iconfont el-icon-view"> {{item.forumClick}}</i>
                    <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square"> {{item.commentNum}}</i>
                </span>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="精华" name="second">
          <ul class="home-top-list">
            <li class="ul-list-li" v-for="item in homeBestPostData" @click="postDetail(item.forumId)">
              <div class="demo-basic--circle title-avatar">
                <div class="block">
                  <el-avatar shape="square" :size="40" :src="item.user.userImg"></el-avatar>
                </div>
              </div>
              <h2>
                <a class="li-tab">{{item.forumTypeId | showPostStatus}}</a>
                <a>{{item.forumTitle}}</a>
              </h2>
              <div class="li-info">
                <a><cite>{{item.user.userName}}</cite></a>
                <span>{{item.forumTime}}</span>
                <span class="li-list-nums">
                    <i title="获赞" class="icon-pinglun1 iconfont el-icon-thumb"> {{item.forumLike}}</i>
                    <i title="浏览" class="icon-pinglun1 iconfont el-icon-view"> {{item.forumClick}}</i>
                    <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square"> {{item.commentNum}}</i>
                </span>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import {getHomePostData, getHomeBestPostData} from '@/network/home'
  import {formatPostStatus} from '@/common/post'

  export default {
    name: "PostCategory",
    data() {
      return {
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        activeName: 'first',
        homePostData: [],
        homeBestPostData: [],
      }
    },
    filters: {
      showPostStatus: function (value) {
        return formatPostStatus(value)
      }
    },
    created() {
      // 请求帖子数据
      this.getHomePostData()
    },
    methods: {
      postDetail(id) {
        //  data:帖子id
        console.log('mypost...' + id);
        // 2.跳转到详情页面
        this.$router.push({path: '/postdetail', query: {id}})
      },
      handleClick(tab, event) {
        console.log(tab.index);
        if (tab.index === '1') {
          // 请求精华数据
          this.getHomeBestPostData()
        }
      },
      /**
       *  网络请求相关
       */
      getHomePostData() {
        getHomePostData(localStorage.getItem('id')).then(res => {
          console.log('getHomePostData...' + res);
          this.homePostData = res.data;
        })
      },
      getHomeBestPostData() {
        getHomeBestPostData(localStorage.getItem('id')).then(res => {
          console.log('getHomeBestPostData...' + res);
          this.homeBestPostData = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  .category-top-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 10px 0 20px;
    border-bottom: 1px dotted #E9E9E9;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
  }

  .category-top-title a {
    cursor: pointer;
    padding: 0 8px;
    color: #666;
  }

  .title-avatar {
    position: absolute;
    left: 0px;
    top: 18px;
  }

  .ul-list-li {
    position: relative;
    height: 75px;
    line-height: 19px;
    padding: 15px 15px 15px 60px;
    border-bottom: 1px dotted #e2e2e2;
  }

  .home-top-list li h2 {
    height: 26px;
    font-size: 0px;
  }

  .home-top-list li h2 .li-tab {
    top: -2px;
    height: 16px;
    line-height: 14px;
    padding: 0 5px;
    margin-right: 10px;
    font-size: 12px;
    border: 1px solid #5FB878;
    background: none;
    color: #5fb878;
  }

  .home-top-list li h2 a {
    display: inline-block;
    max-width: 80%;
    padding-right: 10px;
    font-size: 16px;
  }


  .home-top-list li h2, .home-top-list li h2 a, .li-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .li-info {
    position: relative;
    font-size: 13px;
    color: #999;
  }

  .li-info > * {
    padding-right: 15px;
  }

  .li-info a[link] {
    color: #999;
  }

  .li-info cite {
    font-style: normal;
  }

  .li-list-nums {
    position: absolute;
    right: 0px;
    top: 0px;
    padding-right: 0px !important;
  }

  .li-list-nums i {
    position: relative;
    padding: 0 3px 0 15px;
  }

  .icon-pinglun1 {
    position: relative;
    top: 2px;
  }

  .iconfont {
    font-size: 16px;
    font-style: normal;
  }
</style>