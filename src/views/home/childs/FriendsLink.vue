<template>
  <div class="">
    <ul class="hot-list-title">友情链接
      <div class="top">
        <li>
          <a href="https://www.zhihu.com/signin?next=%2F">
            <span>
              <img src="@/assets/link/zhihu.png" alt="" style="margin-right:0.5rem;width:1.3rem;vertical-align: middle">
            </span>
            知乎
          </a>
        </li>
        <li>
          <a href="https://www.baidu.com/">
            <span>
              <img src="@/assets/link/baidu.png" alt="" style="margin-right:0.5rem;width:1.3rem;vertical-align: middle">
            </span>
            百度
          </a>
        </li>
        <li>
          <a href="https://www.taobao.com/">
            <span>
              <img src="@/assets/link/taobao.png" alt=""
                   style="margin-right:0.5rem;width:1.3rem;vertical-align: middle">
            </span>
            淘宝
          </a>
        </li>

      </div>
      <div class="top">
        <li>
          <a href="https://news.sina.com.cn/">
            <span>
              <img src="@/assets/link/xinlang.png" alt=""
                   style="margin-right:0.5rem;width:1.3rem;vertical-align: middle">
            </span>
            新浪微博
          </a>
        </li>
        <li>
          <a href="https://y.qq.com/">
            <span>
              <img src="@/assets/link/qqyinyue.png" alt=""
                   style="margin-right:0.5rem;width:1.3rem;vertical-align: middle">
            </span>
            QQ音乐
          </a>
        </li>
        <li>
          <a href="https://www.bilibili.com/">
            <span>
              <img src="@/assets/link/bilibili.png" alt=""
                   style="margin-right:0.5rem;width:1.3rem;vertical-align: middle">
            </span>
            哔哩哔哩
          </a>
        </li>
      </div>
      <div class="big">
        <li>
          <a href="https://element.eleme.cn/#/zh-CN/component/installation">
            <div class="topsite">
                <span>
                  <img src="@/assets/link/element.png" alt=""
                       style="margin-right:0.5rem;width:4rem;vertical-align: middle">
                </span>
              <div class="ts-title">组件 | Element</div>
            </div>
          </a>
        </li>
        <li>
          <a href="https://blog.csdn.net/">
            <div class="topsite">
                <span>
                  <img src="@/assets/link/csdn.png" alt=""
                       style="margin-right:0.5rem;width:4rem;vertical-align: middle">
                </span>
              <div class="ts-title">CSDN博客</div>
            </div>
          </a>
        </li>
      </div>
      <div class="big">
        <li>
          <div class="topsite">
            <a href="https://fly.layui.com/">
                <span>
                  <img src="@/assets/link/layui.png" alt=""
                       style="margin-right:0.5rem;width:4.5rem;vertical-align: middle">
                </span>
              <div class="ts-title">LayUI 社区</div>
            </a>
          </div>
        </li>
        <li>
        <div class="topsite">
          <a href="https://cn.vuejs.org/v2/guide/installation.html">
                <span>
                  <img src="@/assets/link/vue.png" alt=""
                       style="margin-right:0.5rem;width:2rem;vertical-align: middle">
                </span>
            <div class="ts-title">Vue.js</div>
          </a>
        </div>
      </li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FriendsLink"
  }
</script>

<style scoped>
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

  .hot-list-title .top, .hot-list-title .big {
    display: flex;
    text-align: center;
    margin-top: 15px
  }

  .top li {
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
    height: 35px;
    line-height: 35px;
    flex: 1;
    margin: 2px;
    border-radius: 5px;
  }

  .top li:hover {
    box-shadow: 0 0 12px #95a5a6;
  }

  .big {
    margin-left: 30px;
  }

  .big li {
    flex: 1;
  }

  .topsite {
    width: 120px;
    border-radius: 5px;
    background: #fff;
    text-align: center;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  .big li :hover {
    box-shadow: 0 0 12px #95a5a6;
  }


  .topsite .ts-title {
    font-size: 0.9rem;
    line-height: 1.538;
    color: #232323;
  }
</style>