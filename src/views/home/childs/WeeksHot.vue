<template>

  <ol id="list3"  class="hot-list-one">
    <dt class="hot-list-title">本周热议</dt>

    <li v-for="item in homeWeeksHotData">
      <a @click="postDetail(item.forumId)">{{item.forumTitle}}</a>
      <!--      <a>layuiadmin tab选项卡如何在文字前面加图标</a>-->
      <span>
        <i class="icon-pinglun1 iconfont el-icon-chat-dot-square"></i>
        <!--        26-->
        {{item.commentNum}}
      </span>
    </li>
  </ol>
</template>

<script>
  import {getHomeWeeksHotData} from '@/network/home'

  export default {
    name: "WeeksHot",
    data() {
      return {
        homeWeeksHotData: []
      }
    },
    created() {
      // 请求帖子数据
      this.getHomeWeeksHotData()
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
      getHomeWeeksHotData() {
        getHomeWeeksHotData().then(res => {
          console.log(res.data);
          this.homeWeeksHotData = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  #list3 {
    font: normal 1.1em Arial, Helvetica, sans-serif;
    color: #666;
  }
  #list3 p {
    font: normal .7em Arial, Helvetica, sans-serif;
    color: #000;
    border-left: solid 1px #999;
    margin: 0;
    padding: 0 0 1em 1em;
  }
  .hot-list-one .hot-list-title {
    margin-bottom: 5px;
  }

  .hot-list-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    border-bottom: 2px dotted #E9E9E9;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
  }

  .hot-list-one li {
    margin: 0 15px;
    line-height: 26px;
    white-space: nowrap;
    overflow: hidden;
    list-style: decimal-leading-zero inside;
    color: #009e94;
  }

  .hot-list-one li a {
    max-width: 85%;
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }

  a:hover {
    cursor: pointer;
    color: #009688;
    transition: all .3s;
  }

  .hot-list-one li a, .hot-list-one li span {
    display: inline-block;
    vertical-align: top;
    font-style: normal;
  }

  .hot-list-one li span {
    font-size: 12px;
    color: #ccc;
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