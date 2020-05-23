<template>
  <div class="main-content">
    <div class="main-left">
      <!-- 帖子-->
      <div class="article">
        <post-category/>
      </div>
    </div>
    <div class="main-right">
      <!-- 本周热议 -->
      <div class="weeks-heated">
        <weeks-hot/>
      </div>
    </div>
  </div>
</template>

<script>
  import PostCategory from './PostCategory'
  import WeeksHot from './WeeksHot'

  export default {
    name: "Shares",
    components:{
      PostCategory,
      WeeksHot
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

  .weeks-heated, .article {
    border-radius: 2px;
    background-color: #fff;
    margin-bottom: 15px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  .weeks-heated {
    height: 460px;
  }

  .article {
    height: 750px;
  }
</style>