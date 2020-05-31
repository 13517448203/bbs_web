<template>
  <div class="article-header-box">
    <div class="article-header">
      <div class="article-title-box">
        <h1 class="title-article">java集成高德地图（干货）</h1>
      </div>
      <div class="article-info-box">
        <div class="article-bar-top">
          <!--原创-->
          <img class="article-type-img" src="@/assets/img/detail/original.png" alt="">
          <div class="bar-content">
            <a class="follow-nickName">OrdinaryLi</a>
            <span class="time">2020-04-22 09:53:05</span>
            <img class="article-read-img"
                 src="@/assets/img/detail/articleRead.png" style="margin-top: 6px" alt="">
            <span class="read-count">294</span>
            <a style="color: #999999;">
              <img class="article-collect-img article-heard-img un-collect-status"
                   src="@/assets/img/detail/collect.png" alt="">
              <span class="name">收藏</span>
              <span class="get-collection">6</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <article class="baidu_pl">
      <div id="article_content" class="article_content clearfix">
        <div id="content_views" class="markdown_views prism-atom-one-dark">
          <div style="height: 900px;border:1px solid black;">
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import {getPostDetail} from '@/network/write'

  export default {
    name: "PostArticle",
    data() {
      return {
        postInfo: []
      }
    },
    created() {
      // 请求帖子数据
      this.getPostDetail()
    },
    methods: {
      /**
       *  网络请求相关
       */
      getPostDetail() {
        getPostDetail().then(res => {
          console.log(res.data);
          this.postInfo = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  .article-header-box {
    border-bottom: 1px solid #f5f6f7;
    padding-top: 8px;
    z-index: 9;
    background-color: #fff;
  }

  .article-header-box .article-header div.article-title-box {
    margin-bottom: 8px;
  }

  .article-header-box .article-header div.article-title-box .title-article {
    font-size: 28px;
    word-wrap: break-word;
    color: #222226;
    font-weight: 600;
    margin: 0;
    word-break: break-all;
  }

  .article-header-box .article-header .article-info-box {
    position: relative;
    background: #f7f7fc;
    border-radius: 4px;
  }

  .article-header-box .article-header .article-info-box .article-bar-top {
    color: #999aaa;
    width: 88%;
    display: -webkit-box;
    display: flex;
  }

  .article-header-box .article-header .article-info-box .article-bar-top .article-type-img {
    width: 36px;
    height: 32px;
    margin-right: 12px;
    vertical-align: middle;

  }

  .article-header-box .article-header div.article-info-box div.article-bar-top .follow-nickName {
    color: #5893c2;
    margin-right: 20px;
    line-height: 32px;
  }

  .article-header-box .article-header div.article-info-box div.article-bar-top span, main div.blog-content-box .article-header-box .article-header div.article-info-box div.article-bar-top a {
    vertical-align: top;
    margin-right: 12px;
    line-height: 32px;
  }

  .article-header-box .article-header div.article-info-box div.article-bar-top .article-read-img {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
    vertical-align: middle;

  }

  .article-header-box .article-header div.article-info-box div.article-bar-top .article-collect-img {
    margin-right: 2px;
    width: 16px;
    height: 16px;
    margin-bottom: 3px;
    vertical-align: middle;
  }

  article {
    position: relative;
    padding-top: 16px;
  }
</style>