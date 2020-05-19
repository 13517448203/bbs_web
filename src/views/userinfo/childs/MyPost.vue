<template>
  <ul class="post">
    <li class="post-li" v-for="item in 4">
      <div class="post-container">
        <div class="post-content" @click="postDetail(postInfo.id)">
          <h2>{{postInfo.title}}</h2>
          <p @click="postDetail(postInfo.id)">{{postInfo.content}}</p>
          <div class="post-bottom">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="35" :src="postInfo.posterInfo.headerPhoto"
                           style="background-size: 100%;line-height: 35px;margin-right: 5px"></el-avatar>
                <h3>{{postInfo.posterInfo.posterName}}</h3>
              </div>
            </div>
            <div class="poster-num">
              <ul>
                <li v-if="postInfo.posterInfo.wonPraise>0"><i class="el-icon-thumb"></i>{{postInfo.posterInfo.wonPraise}}</li>
                <li v-if="postInfo.posterInfo.lookNum>0"><i class="el-icon-view"></i>{{postInfo.posterInfo.lookNum}}</li>
                <li v-if="postInfo.posterInfo.remarkNum>0"><i class="el-icon-chat-dot-square"></i>{{postInfo.posterInfo.remarkNum}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "MyPost",
    data() {
      return {
        postInfo: {
          id:'125',
          title: '大部分程序员只会写3年代码',
          content: '就我来说吧，从 19 岁开始敲“Hello World”到现在，不知不觉，十多年过去了。虽然没能成技术专家，却依然战斗在技术一线，属于那种一个人扛起一个公司的类型。\n' +
            '我敢给各位吹牛逼说，公司离了我转不了，这也是我敢给老板硬刚的底气，哈哈。可能有些人不相信，说我盲目自信。老板不是没想过把我换掉，当年我的一个手下离职后偷偷对我说，老板有一次问他：“咱们公司的代码现在也稳定了，要是王经理（对，就这个头衔）离职了，你能顶上去吗？”\n' +
            '这可是上位的好机会啊！但我那兄弟很硬气的顶了回去：“咱们公司的核心代码以及业务逻辑，好像只有王经理最拿手，我恐怕有点难啊。”\n' +
            '在我老板眼里，甚至很多老板眼里，代码稳定了，不就是修修 bug 啥的，随便招个应届生都能对付。但说真的，在小公司，像我这种老油条不仅代码敲得 666，甚至业务上都是驾轻就熟。别说应届生，5 年工作经验的都不一定能拿下来，何况 3 年的。要知道，程序员干的可是手艺活。\n' +
            '有一段时间，我因为家里有事没去公司。而恰好项目上出了一些问题，我那兄弟没能扛得住，反而 bug 更多了。老板就不停打电话催我，于是只能远程办公把问题搞定。事后不久，公司资金链紧张，我那兄弟就回老家做教师去了。\n' +
            '说到教师，我不由得想起马云这个满嘴跑火车的乡村教师，不是要裁掉“工作 10 年以上的宝贝”嘛，我怕支付宝啥的以后真的会崩。不是说阿里的新人不牛逼，而是马云这个态度真的是有问题——丑恶。\n' +
            '如果我是马云，直接把所有员工裁掉拉倒，找几个大爷，服务器崩溃了就重启一下，依然可以赚得盆满钵满。\n' +
            '在不少公司，出发点都是业务大于技术。典型的例子就有联想，柳传志和倪光南在到底是注重技术还是业务上发生了重大的分歧，最后，业务（柳）把技术（倪）踢出了局。现如今的联想，大家都知道它过得并不好（呵呵，咸吃萝卜淡操心地举个恰当的例子）。\n' +
            '有一次，我去干洗店洗衣服，本来以为五分钟的事，我就没把车停到车位上，而是路边。结果呢，我从干洗店出来后，发现多了一张罚单——违章停车，麻蛋。干洗店的电脑死机了几次，卡私活刷不上，操作员给我抱怨说，“破电脑破系统，每次都耽误事。”我瞥了一眼系统的界面，那老旧得就像马云的那张丑脸。这家干洗店在洛阳是大哥级别的，应该很赚钱的，毕竟操作员的打扮还是挺体面的。\n' +
            '还有像医院的药品管理系统，那真的是“与日俱进”的反面典型。如果你有幸成为开发这种软件的程序员，那么恭喜你，不用 3 年，1 年就可以卷铺盖走人了。这种公司根本就不会采用新技术，毕竟稳定（落后）才是第一位的。也不需要 UI，丑不丑无所谓，将就着用嘛。\n',
          posterInfo: {
            headerPhoto: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            posterName: '沉默王二',
            wonPraise: '323',
            lookNum: '51244',
            remarkNum: '89'
          }
        }
      }
    },
    methods:{
      postDetail(data){
        //  data:帖子id
        console.log(data);
        this.$router.push('/postDetail')
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

  .post-content h2:hover,.poster-num li:hover,.el-avatar:hover,.post-bottom h3:hover{
    cursor: pointer;
    color: palevioletred;
  }

  .post-bottom{
    width: 100%;
  }
  h2, p, .demo-basic--circle,.post-bottom{
    float: left;
  }
  .poster-num{
    float: right;
  }

  .post-content p {
    width: 100%;
    line-height: 25px;
    height: 52px;
    font-size: 15px;
    text-indent:2em;
    margin-bottom: 2px;
    /* 隐藏多于文字 */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }

  .post-bottom h3 {
    font-family: "仿宋";
    float: right;
    color: black;
    line-height: 35px;
  }

  .poster-num li {
    float: left;
    height: 10px;
    margin-right: 10px;
    line-height: 35px;
  }
</style>