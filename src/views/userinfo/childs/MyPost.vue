<template>
  <ul class="post">
    <li class="post-li" v-for="item in postInfo">
      <div class="post-container">
        <div class="post-content" @click="postDetail(item.forumId)">
          <h2>{{item.forumTitle}}</h2>
          <p @click="postDetail(item.forumId)">{{item.forumPath}}</p>
          <div class="post-bottom">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="35" :src="headerPhoto"
                           style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
                <h4 class="post-time">{{item.forumTime}}</h4>
                <h3>{{posterName}}</h3>
              </div>
            </div>
            <div class="poster-num">
              <ul>
                <li v-if="item.forumLike>0"><i class="el-icon-thumb"></i>{{item.forumLike}}
                </li>
                <li v-if="item.forumClick>0"><i class="el-icon-view"></i>{{item.forumClick}}
                </li>
                <li v-if="item.commentNum>0"><i class="el-icon-chat-dot-square"></i>{{item.commentNum}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

  import {getUserinfodata} from '@/network/userInfo'
  import {formatDate} from "@/common/utils";

  export default {
    name: "MyPost",
    data() {
      return {
        test: {
          id: '125',
          title: '大部分程序员只会写3年代码',
          content: '就我来说吧，从 19 岁开始敲“Hello World”到现在，不知不觉，十多年过去了。虽然没能成技术专家，却依然战斗在技术一线，属于那种一个人扛起一个公司的类型。\n' +
            '有一次，我去干洗店洗衣服，本来以为五分钟的事，我就没把车停到车位上，而是路边。结果呢，我从干洗店出来后，发现多了一张罚单——违章停车，麻蛋。干洗店的电脑死机了几次，卡私活刷不上，操作员给我抱怨说，“破电脑破系统，每次都耽误事。”我瞥了一眼系统的界面，那老旧得就像马云的那张丑脸。这家干洗店在洛阳是大哥级别的，应该很赚钱的，毕竟操作员的打扮还是挺体面的。\n' +
            '还有像医院的药品管理系统，那真的是“与日俱进”的反面典型。如果你有幸成为开发这种软件的程序员，那么恭喜你，不用 3 年，1 年就可以卷铺盖走人了。这种公司根本就不会采用新技术，毕竟稳定（落后）才是第一位的。也不需要 UI，丑不丑无所谓，将就着用嘛。\n',
          posterInfo: {
            headerPhoto: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            posterName: '沉默王二',
            postTime: '2020-05-30',
            wonPraise: '323',
            lookNum: '51244',
            remarkNum: '89'
          }
        },
        headerPhoto: '',
        posterName: '',
        postInfo: []
      }
    },
    created() {
      // 请求个人信息的粉丝数  我的帖子 等数据
      this.getUserinfodata()
    },
    methods: {
      postDetail(id) {
        //  data:帖子id
        console.log(id);
        // 2.跳转到详情页面
        this.$router.push({path: '/postDetail', query: {id}})
      },
      /**
       * 网络请求相关
       */
      getUserinfodata() {
        getUserinfodata(localStorage.getItem('userName')).then(res => {
          const test = res.data.listForumInfo;
          console.log("mypost...." + test);
          this.postInfo = test;
          this.headerPhoto = res.data.userImg;
          this.posterName = res.data.userName;
        })
      }
    }
  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }

  .post-li {
    margin-bottom: 10px;
  }

  .post-li:hover {
    /*box-shadow: 0 0 12px rgba(100, 100, 100, 0.3);*/
    box-shadow: 0 0 12px #95a5a6;
  }

  .post-container {
    height: 150px;
    width: 100%;
    padding: 2px;
    background-color: #7f8c8d;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.3);

  }

  .post-content {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 5px 15px;
  }

  .post-content h2:hover, .poster-num li:hover, .el-avatar:hover, .post-bottom h3:hover {
    cursor: pointer;
    color: palevioletred;
  }

  .post-bottom {
    width: 100%;
  }

  h2, p, .demo-basic--circle, .post-bottom {
    float: left;
  }

  .poster-num {
    float: right;
  }

  .post-content p {
    width: 100%;
    line-height: 25px;
    height: 52px;
    font-size: 15px;
    text-indent: 2em;
    margin-bottom: 2px;
    /* 隐藏多于文字 */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .post-bottom h3 {
    font-family: "仿宋";
    float: right;
    color: black;
    line-height: 35px;
  }

  .post-bottom h4 {
    font-family: "宋体";
    float: right;
    line-height: 35px;
    margin-left: 5px;
    font-size: 13px;
  }

  .poster-num li {
    float: left;
    height: 10px;
    margin-right: 10px;
    line-height: 35px;
  }
</style>