<template>
  <dl class="hot-list-one">
    <dt class="hot-list-title">本周热议</dt>
    <dd v-for="item in homeWeeksHotData">
      <a>{{item.forumTitle}}</a>
<!--      <a>layuiadmin tab选项卡如何在文字前面加图标</a>-->
      <span>
        <i class="icon-pinglun1 iconfont el-icon-chat-dot-square"></i>
<!--        26-->
        {{item.commentNum}}
      </span>
    </dd>
  </dl>
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
  .hot-list-one .hot-list-title {
    margin-bottom: 5px;
  }

  .hot-list-title {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    border-bottom: 1px dotted #E9E9E9;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
  }

  .hot-list-one dd {
    margin: 0 15px;
    line-height: 26px;
    white-space: nowrap;
    overflow: hidden;
    list-style: decimal-leading-zero inside;
    color: #009e94;
  }

  .hot-list-one dd a {
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

  .hot-list-one dd a, .hot-list-one dd span {
    display: inline-block;
    vertical-align: top;
    font-style: normal;
  }

  .hot-list-one dd span {
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