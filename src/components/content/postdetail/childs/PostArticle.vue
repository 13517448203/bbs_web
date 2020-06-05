<template>
  <div class="article-header-box">
    <div class="article-header">
      <div class="article-title-box">
        <h1 class="title-article">{{postarticle.forumTitle}}</h1>
        <!--        <h1 class="title-article">java集成高德地图（干货）</h1>-->
      </div>
      <div class="article-info-box">
        <div class="article-bar-top">
          <!--原创-->
          <img class="article-type-img" src="@/assets/img/detail/original.png" alt="">
          <div class="bar-content">
            <!--            <a class="follow-nickName">OrdinaryLi</a>-->
            <a class="follow-nickName">{{postarticle.user.userName}}</a>
            <span class="time">{{postarticle.forumTime}}</span>
            <!--            <span class="time">2020-04-22 09:53:05</span>-->
            <img class="article-read-img"
                 src="@/assets/img/detail/articleRead.png" style="margin-top: 6px" alt="">
            <span class="read-count">{{postarticle.forumClick}}</span>
            <!--            <span class="read-count">294</span>-->

            <!--              ***************************-->
            <!--              这里根据status 改变颜色-->
            <!--              <p v-text="collectStatus"></p>-->
            <a v-if="collectStatus === '0'" @click="addCollect()" style="color: #999999;">
              <img class="article-collect-img article-heard-img un-collect-status"
                   src="@/assets/img/detail/collect.png" alt="">
              <span class="name">收藏</span>
              <span class="get-collection">{{postarticle.isCollected}}</span>
              <!--              <span class="get-collection">6</span>-->
            </a>
            <!--              变灰-->
            <a v-else style="color: #999999;" @click="cancelCollect()">
              <img class="article-collect-img article-heard-img un-collect-status"
                   src="@/assets/img/detail/collect.png" alt="">
              <span class="name">取消收藏</span>
              <span class="get-collection">{{postarticle.isCollected}}</span>
              <!--              <span class="get-collection">6</span>-->
            </a>

            <!--              帖子的点赞-->
            <a class="comment-like">
              <i v-if="likeStatus === '0'" class="el-icon-thumb" @click="addLike()">{{postarticle.forumLike}}</i>
              <!--                加一个  当！=0 时 颜色变红 点击无效果*******-->
              <i v-else class="el-icon-thumb commentlike-after" @click="cancelLike()">{{postarticle.forumLike}}</i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <article class="baidu_pl">
      <div id="article_content" class="article_content clearfix">
        <div id="content_views" class="markdown_views prism-atom-one-dark">
          <div style="height: 80%;border:1px solid black;padding: 10px 8px;">
            <div v-html="postarticle.forumPath"></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import {addCollectForum, cancelCollectForum, cancelLikeForum, insertLikeForum} from '@/network/write'

  export default {
    name: "PostArticle",
    props: ['postarticle'],
    data() {
      return {
        likeStatus: '',
        collectStatus: '',
      }
    },
    created() {
      this.likeStatus = localStorage.getItem("likeStatus");
      this.collectStatus = localStorage.getItem("collectStatus");
      console.log("detailsstatusdetailsstatusdetailsstatus           " + localStorage.getItem("likeStatus"));
      console.log("detailsstatusdetai          " + this.likeStatus);
    },
    methods: {
      /**
       * 添加收藏
       */
      addCollect() {
        this.collectStatus = '1';
        this.postarticle.isCollected = this.postarticle.isCollected + 1;
        let id = this.$route.query.id;
        let collectorId = localStorage.getItem("userId");
        console.log(localStorage.getItem("userId"));
        addCollectForum(id, collectorId).then(res => {
        })
      },

      /**
       * 取消收藏
       */
      cancelCollect() {
        this.collectStatus = '0';
        this.postarticle.isCollected = this.postarticle.isCollected - 1;
        let id = this.$route.query.id;
        let collectorId = localStorage.getItem("userId");
        cancelCollectForum(id, collectorId).then(res => {
        })
      },

      /**
       * 取消点赞
       */
      cancelLike() {
        this.likeStatus = '0';
        this.postarticle.forumLike = this.postarticle.forumLike - 1;
        let id = this.$route.query.id;
        let LikerId = localStorage.getItem("userId");
        cancelLikeForum(id, LikerId).then(res => {
        })
      },
      /**
       * 添加点赞
       */
      addLike() {
        this.likeStatus = '1';
        this.postarticle.forumLike = this.postarticle.forumLike + 1;
        let id = this.$route.query.id;
        let LikerId = localStorage.getItem("userId");
        insertLikeForum(id, LikerId).then(res => {
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

  .comment-like {
    cursor: pointer;
  }

  .commentlike-after {
    color: #e33e33;
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