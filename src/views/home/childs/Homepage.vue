<template>
  <div class="main-content">
    <div class="main-left">
      <!-- 轮播图 -->
      <div class="swiper-content">
        <el-carousel height="180px">
          <el-carousel-item v-for="item in imagesbox" :key="item.id">
            <el-row :gutter="12">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <img :src="item.idView" alt="" style="width: 100%;height: 180px">
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 置顶 -->
      <div class="is-top">
        <home-top/>
      </div>
      <!-- 帖子-->
      <div class="article">
        <post-category/>
      </div>
    </div>
    <div class="main-right">
      <!-- 签到 -->
      <div class="signIn-content">

      </div>
      <!-- 公告 -->
      <div class="notice">

      </div>
      <!-- 本周热议 -->
      <div class="weeks-hot">
        <weeks-hot/>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeTop from './HomeTop'
  import PostCategory from './PostCategory'
  import WeeksHot from './WeeksHot'

  export default {
    name: "Homepage",
    components: {
      HomeTop,
      PostCategory,
      WeeksHot
    },
    data() {
      return {
        imagesbox: [
          {id: 0, idView: require("@/assets/img/01.jpg")},
          {id: 1, idView: require("@/assets/img/02.jpg")},
          {id: 2, idView: require("@/assets/img/03.jpg")},
          {id: 3, idView: require("@/assets/img/04.jpg")}]
      }
    }
  }
</script>

<style scoped>


  .main-content::after, .main-content::before {
    content: "";
    display: block;
    clear: both;
  }

  .main-left {
    padding: 7.5px;
    width: 66.66%;
    float: left;
  }

  .main-right {
    padding: 7.5px;
    width: 33.33%;
    float: left;
  }

  .swiper-content, .signIn-content, .is-top, .article, .notice,.weeks-hot{
    border-radius: 2px;
    background-color: #fff;
    margin-bottom: 15px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  /* 轮播图 */
  .swiper-content {
    height: 200px;
    padding: 10px 5px;
    text-align: center;
  }

  .el-carousel {
    border-radius: 3px;
    box-shadow: 2px 2px 0 rgba(100, 100, 100, 0.2);
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 190px;
    margin: 0;
  }

  .signIn-content {
    height: 165px;
  }

  .is-top {
    height: 350px;
  }

  .article {
    height: 750px;
  }

  .notice {
    height: 350px;
  }

  .weeks-hot{
    height: 460px;
  }
</style>