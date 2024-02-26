// 因为该作品在2023年新年时完成，所以包含新年烟花和祝福的元素
<template>
    <div class="container">
      <div v-if="!loading">
      </div>
      <div v-else-if="flag" style="width: 100%; height: 100%">
        <div class="container" style="width: 100%; height: 100%">
          <!-- canvas是画板的意思，用来画烟花 -->
          <canvas id="canvas" style="width: 100%; height: 90%"> </canvas>
          <div class="text-over">
            新年快乐！
            <div><p>新春节日到，给您问个好，办事步步高，生活乐陶陶，好运天天交，越长越俊俏。</p><p>愿你在2023年，天天开怀，时时快乐，分分精彩，秒秒幸福。</p></div>
          </div>
        </div>
      </div>
    </div>
  </template>


  <script>
  //引入烟花js文件
import firework from "./fireworks.js";
export default {
  data() {
    return {
      loading: false,
      time: "2",
      flag: false,
    };
  },
  mounted() {
    this.time = setInterval(() => {
      if (this.flag == true) {
        this.getCanvas();
        clearInterval(this.time);
      }
      this.getTime("1", "2023,01,22"); // 2023年春节
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.time);
  },
  methods: {
    getTime(obj, futimg) {
      this.loading = true;
      var nowtime = new Date().getTime(); // 现在时间转换为时间戳
      var futruetime = new Date(futimg).getTime(); // 未来时间转换为时间戳
      var msec = futruetime - nowtime; // 毫秒 未来时间-现在时间
      var time = msec / 1000; // 毫秒/1000 
      this.second = parseInt(time % 60); 
      if (msec < 0) {
        this.flag = true;
        this.getCanvas();
      } else {
        this.loading = false;
      }
      return true;
    },
    getCanvas() {
      firework.onLoad();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #212121;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  margin: 0;
}

.text-over {
  margin-top: 0px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  width: inherit;
  text-align: center;
  position: absolute; /*设为绝对定位*/
}
</style>