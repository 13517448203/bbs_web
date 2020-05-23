<template>
  <div class="category">
    <div class="category-top-title">
      <a class="category-this">综合</a>
      <span class="title-mid"></span>
      <a>精华</a>
      <ul class="home-top-list">
        <li class="ul-list-li" v-for="item in 9">
          <div class="demo-basic--circle title-avatar">
            <div class="block">
              <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
            </div>
          </div>
          <h2>
            <a class="li-tab">分享</a>
            <a> aop 实现 layui table edit 新增功能</a>
          </h2>
          <div class="li-info">
            <a><cite>单身狗278</cite></a>
            <span>7天前</span>
            <span class="li-list-nums">
              <i title="回答" class="icon-pinglun1 iconfont el-icon-chat-dot-square"> 36</i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostCategory",
    data() {
      return {
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
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

  .title-mid {
    display: inline-block;
    height: 10px;
    width: 1px;
    margin: 0 10px;
    vertical-align: middle;
    background-color: #e2e2e2;
  }

  .category-top-title a.category-this {
    color: #5fb878;
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
</style>