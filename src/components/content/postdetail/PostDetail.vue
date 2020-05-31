<template>
  <div class="wrapper">
    <div class="user-info">
      <div class="other-container">
        <div class="other-info-name">
          <div class="demo-basic-circle">
            <div class="block">
              <el-avatar :size="35" src=""
                         style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
              <h3>111</h3>
            </div>
          </div>
        </div>
        <div class="other-info-base">
          <div class="other-info-item1">
            <dl v-for="item in getInfoitem1()">
              <dt>
                <span class="count">{{item.value}}</span>
              </dt>
              <dd>
                <span>{{item.text}}</span>
              </dd>
            </dl>
          </div>
          <div class="line-item"></div>
          <div class="other-info-item2">
            <dl v-for="item in getInfoitem2()">
              <dt>
                <span class="count">{{item.value}}</span>
              </dt>
              <dd>
                <span>{{item.text}}</span>
              </dd>
            </dl>
          </div>
        </div>
        <div class="other-info-btn">
          <div class="other-info-box"><a class="bt-button">TA的主页</a></div>
          <div class="other-info-box"><a class="bt-button">私信</a></div>
          <div class="other-info-box"><a class="bt-button">关注</a></div>
        </div>
      </div>
      <div class="other-post-detail">
        <post-article/>
      </div>
    </div>
  </div>
</template>

<script>
  import PostArticle from '@/components/content/postdetail/childs/PostArticle'

  export default {
    name: "PostDetail",
    components: {
      PostArticle
    },
    data() {
      return {
        // id: null,
        postInfo: []
      }
    },
    created() {
      // this.id = this.$route.params.id;
      // console.log(this.id);
    },
    methods: {
      getInfoitem1() {
        return [
          {text: '原创', value: '1'},
          {text: '粉丝', value: '2'},
          {text: '获赞', value: '3'},
          {text: '评论', value: '2'},
        ]
      },
      getInfoitem2() {
        return [
          {text: '访问', value: '295'},
          {text: '积分', value: '18'},
          {text: '收藏', value: '6'},
          {text: '等级', value: '1'},
        ]
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin-top: 60px;
    width: 100%;
    max-width: 1920px;
    float: left;
  }

  .user-info {
    max-width: 1200px;
    margin: 10px auto;
  }

  a {
    cursor: pointer;
  }


  .other-container {
    width: 24.99%;
    height: 300px;
    float: left;
    padding: 10px;
    background-color: #fff;
  }

  .other-info-name {
    width: 100%;
    height: 40px;
    padding: 1px 2px;
    margin-bottom: 20px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  .other-info-name h3:hover, .el-avatar:hover, .other-info-name h3:hover {
    cursor: pointer;
    color: palevioletred;
  }

  .el-avatar, h3 {
    float: left;
  }

  .other-info-name h3 {
    font-family: "仿宋";
    line-height: 36px;
    color: #555666;
  }

  .other-info-base {
    width: 100%;
    height: 150px;
    margin-bottom: 15px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  .other-info-base span {
    color: #999aaa;
    font-size: 14px;
    line-height: 18px;
  }

  .other-info-item1, .other-info-item2 {
    width: 100%;
    display: flex;
    padding: 20px 10px;
  }

  .other-info-item1 dl, .other-info-item2 dl {
    flex: 1;
    text-align: center;
  }

  .line-item {
    height: 1px;
    background-color: #f5f6f7;
    width: 235px;
    margin: auto;
  }

  .count {
    color: #4a4d52 !important;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  .other-info-btn {
    display: flex;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    padding: 8px 8px 10px 8px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  .other-info-box {
    width: 78px !important;
    height: 28px;
    border-radius: 4px;
    line-height: 28px;
    text-align: center;
    margin-left: 8px;
  }

  .other-info-box .bt-button:hover {
    background-color: #fff;
  }

  .other-info-box .bt-button {
    border: 1px solid #eaeaef;
    background-color: #fafafc;
    color: #4a4d52;
    display: block;
    border-radius: 4px;
    box-sizing: border-box;
    height: 100%;
    font-size: 14px;
  }

  .other-info-box:last-child .bt-button {
    background: #e33e33;
    color: #fff;
  }

  .other-post-detail {
    float: right;
    width: 74.11%;
    height: 900px;
    background-color: #fff;
    position: relative;
    padding: 10px 20px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }
</style>