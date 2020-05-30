<template>
  <div class="wrapper">
    <div class="user-info">
      <div class="user-base-info">
        <div class="user-base-info-main">
          <div class="user-info-header-img">
            <img :src="personInfo.userHead" alt="" style="width:150px;height:150px;border-radius: 50%;margin:auto">
          </div>
          <div class="user-info-right">
            <div class="user-info-name">
              <div style="float: left;">
                <h2 id="user_name">{{personInfo.userName}}</h2>
                <p class="person-profile">这是一个简介~~~~~~~</p>
              </div>
              <div class="user-info-edit">
                <button type="button" class="btn write_btn" @click="editClick('/editinfo')">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </button>
              </div>
            </div>
            <div class="user-info-other">
              <ul>
<!--                <li v-for="item in itemData">-->
<!--                  <p>{{item.name}}</p>-->
<!--                  <span>{{item.data}}</span>-->
<!--                </li>-->
                <li>
                  <p>粉丝</p>
                  <span>{{fans}}</span>
                </li>
                <li>
                  <p>关注</p>
                  <span>{{friendsNum}}</span>
                </li>
                <li>
                  <p>帖子</p>
                  <span>{{forumNum}}</span>
                </li>
                <li>
                  <p>获赞</p>
                  <span>{{userLike}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user-base-info-bottom">
          <el-tabs type="border-card">
            <el-tab-pane><span slot="label"><i class="el-icon-document"></i> 我的帖子</span>
              <!--              :userInfoData="personInfo.userInfoData"-->
              <my-post/>
            </el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-chat-dot-round"></i> 我的消息</span>
              <my-message/>
            </el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-star-on"></i> 我的收藏</span>
              <my-save/>
            </el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-view"></i> 我的关注</span>
              <my-focus/>
            </el-tab-pane>
            <el-tab-pane><span slot="label"><i class="el-icon-s-custom"></i> 我的粉丝</span>
              <my-fans/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyPost from './childs/MyPost'
  import MyMessage from './childs/MyMessage'
  import MyFocus from './childs/MyFocus'
  import MySave from './childs/MySave'
  import MyFans from './childs/MyFans'
  import {getUserinfodata, getUserdata} from '@/network/userInfo'

  export default {
    name: "UserInfo",
    components: {
      MyPost,
      MyMessage,
      MyFocus,
      MySave,
      MyFans
    },
    data() {
      return {
        activeName: 'first',
        fans:'',
        friendsNum:'',
        forumNum:'',
        userLike:'',
        personInfo: {
          userName: '林子大-',
          userHead: require('@/assets/img/header.jpg'),
          userInfoData: [],
        },
        // itemData: [
        //   {name: '粉丝', data: this.fans},
        //   {name: '关注', data: this.friendsNum},
        //   {name: '帖子', data: this.forumNum},
        //   {name: '获赞', data: this.userLike},
        // ]
      }
    },
    created() {
      // 头像和用户名的数据导入
      if (localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== undefined) {
        this.personInfo.userName = localStorage.getItem('userName')
      }
      if (localStorage.getItem('userHead') !== null && localStorage.getItem('userHead') !== undefined) {
        this.personInfo.userHead = localStorage.getItem('userHead')
      }
      console.log('userinfo.....' + this.personInfo.userHead);

      // 请求个人信息的粉丝数  我的帖子 等数据
      this.getUserinfodata()

      // 请求个人信息数据
      this.getUserdata()
    },
    methods: {
      editClick(path) {
        this.$router.push(path)
      },
      /**
       * 网络请求相关
       */
      getUserinfodata() {
        getUserinfodata(localStorage.getItem('userName')).then(res => {
          // console.log(res);
          this.personInfo.userInfoData = res.data.listForumInfo;
          console.log("userinfo...." + this.personInfo.userInfoData);
        })
      },
      getUserdata() {
        getUserdata(localStorage.getItem('userName')).then(res => {
          // console.log(res);
          this.fans = res.data.fen;
          this.friendsNum = res.data.friendsNum;
          this.forumNum = res.data.forumNum;
          this.userLike = res.data.userLike;
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
    line-height: 50px;
    float: left;
  }

  .user-info {
    max-width: 1000px;
    margin: 20px auto;
    background-color: #fff;
  }

  .user-base-info {
    height: 250px;
    margin-bottom: 20px;
  }

  .user-base-info-main {
    height: 78.66%;
  }

  .user-base-info-bottom {
    height: 21.44%;
  }

  .user-info-header-img {
    width: 23%;
    height: 100%;
    padding: 24px;
    float: left;
  }

  .user-info-right {
    float: right;
    width: 75%;
    height: 100%;
  }

  .user-info-name {
    width: 100%;
    height: 40%;
    margin-top: 10px;
  }

  .person-profile {
    color: #999999;
    line-height: 15px;
  }

  .user-info-other {
    width: 100%;
    height: 50%;
    margin: 10px auto;
    padding: 15px 0;
  }

  .user-info-other ul {
    display: flex;
  }

  .user-info-other li {
    flex: 1;
    float: left;
    list-style: none;
  }

  .user-base-info-main p, .user-base-info-main span {
    line-height: 18px;
    font-size: 16px;
  }

  .user-info-edit {
    float: right;
    margin: 30px 80px 0 0;
  }

  .btn.write_btn, .btn.write_btn:focus {
    width: 80px;
    padding: 0;
    height: 40px;
    line-height: 40px;
    background: #393D49;
    border-radius: 50px;
    border: 0px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
</style>