<template>
  <div class="wrapper">
    <div class="user-info">
      <div class="other-container">
        <div class="other-info-name">
          <div class="demo-basic-circle">
            <div class="block">
              <el-avatar :size="35" :src="test.user.userImg"
                         style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
              <h3>{{test.user.userName}}</h3>
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
          <div class="other-info-box"><a class="bt-button" @click="homepageClick(test.user.userName)">TA的主页</a></div>
          <div class="other-info-box"><a class="bt-button">私信</a></div>
          <div v-if="detailsStatus.focusStatus === 0" @click="addFocus()" class="other-info-box"><a class="bt-button">关注</a></div>
<!--          这里v-else 改变取消关注得颜色  颜色为灰色-->
          <div v-else class="other-info-box" @click="cancelFocus()"><a class="bt-button">取消关注</a></div>
        </div>
      </div>
      <div class="other-post-detail">
        <post-article :postarticle="test"/>
      </div>
      <div class="comment-box">
        <post-comment/>
      </div>
    </div>
  </div>
</template>

<script>
  import PostArticle from '@/components/content/postdetail/childs/PostArticle'
  import PostComment from '@/components/content/postdetail/childs/PostComment'
  import {getPostDetail,detailsStatus} from '@/network/write'
  import {getcancelFocus, getaddFocus} from '@/network/userInfo'

  export default {
    name: "PostDetail",
    components: {
      PostArticle,
      PostComment
    },
    data() {
      return {
        detailsStatus:{},
        test: [],
        id: '1',
        headerPhoto: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      }
    },
    created() {
      // 1.保存携带的详情数据
      console.log('postdetail');

      this.id = this.$route.query.id;
      console.log('id..' + this.id);

      // 2.根据iid请求详情数据
      getPostDetail(this.id).then(res => {
        this.test = res.data;
      })

      // 查询帖子详情页 点赞 收藏关注状态
      let userId = localStorage.getItem('userId');
      detailsStatus(this.id,userId).then(res => {
          this.detailsStatus = res.data;
          console.log("/*/*/*/*/*/*/*/*/*/          " + res.data.collectStatus);
          localStorage.setItem("collectStatus",res.data.collectStatus);
          localStorage.setItem("likeStatus",res.data.likeStatus);
        console.log(res);
        console.log('456465465465'+res.data.focusStatus);
      })
    },
    methods: {
      getInfoitem1() {
        return [
          {text: '文章', value: this.test.forumNum !== undefined ? this.test.forumNum : 0},
          {text: '粉丝', value: this.test.fenNum !== undefined ? this.test.fenNum : 0},
          {text: '获赞', value: this.test.forumLike !== undefined ? this.test.forumLike : 0},
          {text: '评论', value: this.test.commentNum !== undefined ? this.test.commentNum : 0},
        ]
      },
      getInfoitem2() {
        return [
          {text: '访问', value: this.test.forumClick !== undefined ? this.test.forumClick : 0},
          {text: '积分', value: this.test.user.remainCredits !== undefined ? this.test.user.remainCredits : 0},
          {text: '收藏', value: this.test.isCollected !== undefined ? this.test.isCollected : 0},
          {text: '等级', value: this.test.user.userLevel !== undefined ? this.test.user.userLevel : 1},
        ]
      },
      homepageClick(userName) {
        console.log(userName);
        if(userName === localStorage.getItem('userName')){
          this.$router.replace('/userinfo')
        }else{
          this.$router.push({path: '/theyinfo', query:{userName}})
        }
      },
      addFocus() {
        //修改好友之间状态值 focusStatus 为1  表示已经关注
        this.detailsStatus.focusStatus = 1;


        //发送关注的请求   即
        let userId = localStorage.getItem('userId');
        let friendsId = this.test.userId;
        getaddFocus(userId, friendsId).then(resp => {
        })
      },
      cancelFocus() {
        //修改好友之间状态值 status 为0  表示取消关注
        this.detailsStatus.focusStatus = 0;

        //发送取消关注的请求   即
        let userId = localStorage.getItem('userId');
        let friendsId = this.test.userId;
        getcancelFocus(userId, friendsId).then(resp => {
        })
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
    max-width: 1280px;
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
    height: 90%;
    min-height: 320px;
    background-color: #fff;
    position: relative;
    padding: 10px 20px;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);
  }

  .comment-box {
    float: right;
    width: 74.11%;
    height: 10%;
    min-height: 120px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    margin-top: 8px;
    padding-bottom: 8px;
  }

</style>