<template>
  <div class="wrapper">
    <div class="demo-input-suffix search">
      <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="inputSearch" @keyup.enter.native="sub()">
      </el-input>
    </div>

    <div v-if="flag" class="user-info">
      <ul class="search-list">
        <li class="ul-list-li" v-for="item in searchInfo" @click="postDetail(item.forumId)">
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
                    <i title="获赞" class="icon-pinglun1 iconfont el-icon-thumb">{{item.forumLike}}</i>
                    <i title="浏览" class="icon-pinglun1 iconfont el-icon-view">{{item.forumClick}}</i>
                    <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square">{{item.commentNum}}</i>
                </span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="user-info-none">
      <p>你搜了个寂寞</p>
    </div>
  </div>
</template>

<script>
  import {getPostSearchData} from '@/network/home'
  import {formatPostStatus} from '@/common/post'

  export default {
    name: "PostSearch",
    data() {
      return {
        search: '',
        inputSearch: '',
        flag: false,
        headerPhoto: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        searchInfo: []
      }
    },
    created() {
      // 1.保存携带的数据
      console.log('PostSearch。。。');

      this.inputSearch = this.$route.query.search;

      console.log('search..' + this.inputSearch);
      // 根据携带的input的内容进行搜索
      this.getPostSearchData()
    },
    filters: {
      showPostStatus: function (value) {
        return formatPostStatus(value)
      }
    },
    methods: {
      sub() {
        console.log(this.inputSearch);
        if (this.inputSearch === '') {
          this.flag = false
        } else {
          this.getPostSearchData()
        }
      },
      getPostSearchData() {
        getPostSearchData(this.inputSearch).then(res => {
          if (res.data === 1) {
            this.flag = false;
          } else {
            this.flag = true;
            this.searchInfo = res.data;
          }
        })
      },
      postDetail(id) {
        //  data:帖子id
        console.log('mypost...' + id);
        // 2.跳转到详情页面
        this.$router.push({path: '/postdetail', query: {id}})
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin-top: 60px;
    width: 100%;
    max-width: 1920px;
    line-height: 50px;
    float: left;
  }

  .user-info {
    max-width: 1140px;
    margin: 20px auto;
  }

  .user-info-none {
    position: relative;
    max-width: 1140px;
    min-height: 300px;
    margin: 20px auto;
    background-color: #fff;
  }

  .title-avatar {
    position: absolute;
    left: 12px;
    top: 18px;
  }

  .ul-list-li {
    background-color: #fff;
    position: relative;
    height: 75px;
    line-height: 19px;
    padding: 15px 15px 15px 70px;
    border-bottom: 1px dotted #e2e2e2;
    margin-bottom: 5px;
  }

  .ul-list-li:hover {
    box-shadow: 0 0 12px rgba(100, 100, 100, 0.3);
    /*box-shadow: 0 0 12px #95a5a6;*/
  }

  .search-list li h2 {
    height: 26px;
    font-size: 0px;
  }

  .search-list li h2 .li-tab {
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

  .search-list li h2 a {
    display: inline-block;
    max-width: 80%;
    padding-right: 10px;
    font-size: 16px;
  }


  .search-list li h2, .search-list li h2 a, .li-info {
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

  .search {
    position: fixed;
    left: 1178px;
    top: 1px;
    width: 200px;
    float: left;
    line-height: 60px;
    z-index: 999;
  }

  .user-info-none p {
    position: absolute;
    top: 35%;
    left: 45%;
    color: #b0b9c7;
    font-size: 18px;
  }
</style>