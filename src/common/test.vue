<template>
  <div class="overall">
    <div class="clock" v-for="(i,index) in 6" :key="index" data-number="0">
      <svg viewBox="0 0 90 140">
        <path d="M0,0 L50,0 L50,50 L50,100 L0,100 L0,25 L0,0"/>
      </svg>
    </div>
  </div>
</template>

<script>
  import anime from "animejs/lib/anime.es.js";

  export default {
    name:'test',
    data() {
      return {
        clockTags: null,
        paths: [
          // 0
          "M0,0 L50,0 L50,50 L50,100 L0,100 L0,25 L0,0",
          // 1
          "M50,0 L50,15 L50,30 L50,45 L50,60 L50,75 L50,100",
          // 2
          "M0,0 L50,0 L50,50 L25,50 L0,50 L0,100 L50,100",
          // 3
          "M0,0 L50,0 L50,100 L0,100 L50,100 L50,50 L0,50",
          // 4
          "M0,0 L0,50 L50,50 L50,0 L50,35 L50,70 L50,100",
          // 5
          "M50,0 L0,0 L0,50 L25,50 L50,50 L50,100 L0,100",
          // 6
          "M50,0 L0,0 L0,50 L0,100 L50,100, L50,50 L0,50",
          // 7
          "M0,0 L50,0 L50,20 L50,40 L50,60 L50,80 L50,100",
          // 8
          "M0,0 L50,0 L50,100 L0,100 L0,0 L0,50 L50,50",
          // 9
          "M0,100 L50,100 L50,50 L50,0 L0,0 L0,50 L50,50"
        ]
      };
    },
    mounted() {
      this.clockTags = document.getElementsByClassName("clock");
      this.setTime();
      //每隔一秒执行一次方法
      setInterval(this.setTime, 1000);
    },
    methods: {
      setTime() {
        let time_numbers = new Date()
          .toTimeString()
          .substr(0, 8)
          .split(":")
          .join("");
        // console.log(time_numbers);
        for (let i = 0; i < time_numbers.length; i++) {
          // .dataset.number 对应 html 上的 data-number
          // time_numbers.charAt(i) 下标位置
          if (this.clockTags[i].dataset.number !== time_numbers.charAt(i)) {
            this.clockTags[i].dataset.number = time_numbers.charAt(i);
            this.morphDigit(
              this.clockTags[i].querySelector("path"),
              this.paths[time_numbers.charAt(i)]
            );
          }
        }
      },
      //变换动画
      morphDigit(tag, numberPath) {
        anime({
          targets: tag,
          d: [{ value: numberPath }],
          easing: "easeInOutExpo",
          duration: 100
        });
      }
    }
  };
</script>

<style  scoped>
  .overall {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 165px;
    padding: 0;
    margin: 0;
    background: rgb(57, 61, 73);
  }

  svg {
    width: 100%;
    height: 100%;
  }
  path {
    stroke: #ffffff;
    stroke-width: 2px;
    fill: none;
  }
  .clock {
    margin: 0 8px;
    width: 50px;
    height: 100px;
  }
  .clock:nth-child(2n) {
    margin-right: 30px;
    position: relative;
  }
  .clock:nth-child(2n)::after {
    content: ":";
    position: absolute;
    color: #ffffff;
    font-size: 50px;
    top: 15px;
    right: -20px;
  }
  .clock:last-child {
    margin-right: 0px !important;
  }
  .clock:last-child::after {
    display: none !important;
  }
</style>









