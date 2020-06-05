<template>
  <div class="home-top">
    <div class="home-top-title">
      <a>置顶</a>
      <ul class="home-top-list">
        <li class="ul-list-li" v-for="item in homeTopData" @click="postDetail(item.forumId)">
          <!--        <li class="ul-list-li" v-for="item in 4">-->
          <div class="demo-basic--circle title-avatar">
            <div class="block">
              <el-avatar shape="square" :size="40" :src="item.user.userImg"></el-avatar>
              <!--              <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>-->
            </div>
          </div>
          <h2>
            <a class="li-tab">{{item.forumTypeId | showPostStatus}}</a>
            <a>{{item.forumTitle}}</a>
            <!--            <a> aop 实现 layui table edit 新增功能</a>-->
          </h2>
          <div class="li-info">
            <a><cite>{{item.user.userName}}</cite></a>
            <!--            <a><cite>单身狗278</cite></a>-->
            <span>{{item.forumTime}}</span>
            <!--            <span>7天前</span>-->
            <span class="li-list-nums">
                    <i title="获赞" class="icon-pinglun1 iconfont el-icon-thumb"> {{item.forumLike}}</i>
              <!--                    <i title="回答" class="icon-pinglun1 iconfont el-icon-thumb"> 36</i>-->
                    <i title="浏览" class="icon-pinglun1 iconfont el-icon-view"> {{item.forumClick}}</i>
              <!--                    <i title="回答" class="icon-pinglun1 iconfont el-icon-view"> 36</i>-->
                    <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square"> {{item.commentNum}}</i>
              <!--                    <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square"> 36</i>-->
                  </span>
          </div>
          <div class="li-list-badge">
            <span class="span-badge">精贴</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getHomeTopData} from '@/network/home'
  import {formatPostStatus} from '@/common/post'

  export default {
    name: "HomeTop",
    data() {
      return {
        homeTopData: [],
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      }
    },
    created() {
      // 请求帖子数据
      this.getHomeTopData()
    },
    filters: {
      showPostStatus: function (value) {
        return formatPostStatus(value)
      }
    },
    methods: {
      postDetail(id) {
        //  data:帖子id
        console.log('mypost...' + id);
        // 2.跳转到详情页面
        this.$router.push({path: '/postdetail', query: {id}})
      },
      /**
       *  网络请求相关
       */
      getHomeTopData() {
        getHomeTopData().then(res => {
          console.log(res.data);
          this.homeTopData = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  .home-top {
    /*border: 1px solid black;*/
  }

  .home-top-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 10px 0 20px;
    border-bottom: 1px dotted #E9E9E9;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
  }

  .title-avatar {
    position: absolute;
    left: 0px;
    top: 18px;
  }

  .ul-list-li {
    position: relative;
    height: 75px;
    line-height: 22px;
    padding: 15px 15px 15px 60px;
    border-bottom: 1px dotted #e2e2e2;
  }

  .home-top-list li h2 {
    height: 26px;
    font-size: 0px;
  }

  ul {

    border-top: 1px dotted #e2e2e2;
  }

  .home-top-list li h2 .li-tab {
    top: -2px;
    height: 16px;
    line-height: 16px;
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

  .li-list-badge {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0px;
  }

  .li-list-badge .span-badge {
    margin-left: 5px;
    border-radius: 2px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }


  .li-list-badge, .layui-badge-dot, .layui-badge-rim {
    display: inline-block;
    padding: 0 6px;
    font-size: 12px;
    text-align: center;
    background-color: #ff5722;
    color: #fff;
    border-radius: 2px;
  }
</style>