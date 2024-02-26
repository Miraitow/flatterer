// 这是时间轴组件
<template>
  <div class="container" :style="changeThemeColor">
    <!-- 这是上面的布局 -->
    <div class="full-width slider" >
      <transition-group
        :enter-active-class="enterActiveClass"
        >
        <!-- 预先搭好样式，遍历carouselList数组，数据显示出来 -->
        <div
          class="slider-box"
          v-for="(item, index) in carouselList"
          :key="item.id"
          v-show="index === currentIndex"
        >
          <div class="slider-box__item">
            <!-- 这是每张图片 -->
            <img :src="item.img" alt="" />
          </div>
          <div class="slider-box__item">
            <!-- 这是每张图片右边的一句话 -->
            <div class="item-info">{{ item.info }}</div>
          </div>
        </div>
      </transition-group>
    </div>
    <!-- 这是上面的布局 -->
    <!-- 这是下面时间线的布局 -->
    <div class="timeline" :class="{mt: !carouseIsShow}">
      <div class="line full-width"></div>
      <div class="timeline-container">
        <!-- 点击向前图标，时间线回退 -->
        <div class="item" @click="go(prevIndex, 'prev')">
          <button
            :class="{ 'item-disabled': !loop && currentIndex === 0 }"
            class="item-prev"
            :disabled="!loop && currentIndex === 0"
          >
            <span class="icon"><img src="../assets/icon1.png"></span>
          </button>
        </div>
        <div class="item">
           <!-- 预先搭好样式，遍历timelineList数组，数据显示出来 -->
          <div
            class="list"
            v-for="(item, index) in timelineList"
            :key="item.id"
            @click="go(index, '')"
            :style="{
              transform: `translateX(${translateNum}px)`,
              width: `${timelineWidth}px`,
            }"
          >
            <div
              class="circle"
              :class="{ active: index === currentIndex }"
            ></div>
            <div
              class="line"
              :class="{
                on: index === currentIndex && onIsActive,
                go: index === currentIndex && !onIsActive,
              }"
            ></div>
            <div class="text">
              {{ item.text }}
            </div>
            <div ref="tip" class="tip">
              {{ item.text }}
              <div class="triangle"></div>
            </div>
          </div>
        </div>
        <div class="item" @click="go(nextIndex, 'next')">
          <button
            class="item-next"
            :disabled="!loop && currentIndex === timelineList.length - 1"
            :class="{
              'item-disabled':
                !loop && currentIndex === timelineList.length - 1,
            }"
          >
            <span class="icon"><img src="../assets/icon2.png"></span>
          </button>
        </div>
      </div>
    </div>
     <!-- 这是下面时间线的布局 -->
  </div>
</template>
<script>
export default {
  props: {
    timelineList: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            text: "（一）",
          },
          {
            id: 2,
            text: "（二）",
          },
          {
            id: 3,
            text: "（三）",
          },
          {
            id: 4,
            text: "（四）",
          },
          {
            id: 5,
            text: "（五）",
          },
          {
            id: 6,
            text: "（六）",
          },
          {
            id: 7,
            text: "（七）",
          },
          {
            id: 8,
            text: "（八）",
          },
          {
            id: 9,
            text: "（九）",
          },
          {
            id: 10,
            text: "（十）",
          },
        ];
      },
    },
    // 自动播放，默认为true
    autoPlay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    carouselList: {
      // 右边8句话列表
      type: Array,
      default() {
        return [
          {
            id: 1,
            img: require("../assets/i1.jpg"),
            info: "2018年秋，我们成了一个班的同学。刚开始,我对他的印象只是学霸堆中的一员。",
          },
          {
            id: 2,
            img: require("../assets/i2.jpg"),
            info: "物理老师总爱拿他开玩笑，但他从不生气。他上课很专注，回答问题也很积极。我想，这就是老师们喜欢的好孩子吧。",
          },
          {
            id: 3,
            img: require("../assets/i3.jpg"),
            info: "相反，那时候的我自卑、敏感，又有着极强的自尊心。被老师叫上讲台，写不出题都会躲进被子哭好久好久...",
          },
          {
            id: 4,
            img: require("../assets/i4.jpg"),
            info: "高一的下学期，我们从前前桌调换位置成了前后桌。被数学折磨的无比痛苦的我向他请教了第一个问题。",
          },
          {
            id: 5,
            img: require("../assets/i5.jpg"),
            info: "他很耐心，不厌其烦的为我讲解每一个步骤。我很开心，因为我弄明白了一个在之前的我看来无法解出的难题。",
          },
          {
            id: 6,
            img: require("../assets/i6.jpg"),
            info: "在那之后，我改掉了将难题丢置一边的坏毛病。我学着他的样子，感受每次认真思考后带来的快乐。",
          },
          {
            id: 7,
            img: require("../assets/i7.jpg"),
            info: "碰到难题，我不再害怕。因为我知道，他会，我可以向他请教。",
          },
          {
            id: 8,
            img: require("../assets/i8.webp"),
            info: "一次体育课过后，接连几天没见他来上课，抽屉收拾的干干净净，只剩下一张空荡荡的桌子。",
          },
          {
            id: 9,
            img: require("../assets/i9.jpg"),
            info: "我慌了，脑海中上演着电视剧里生离死别的桥段。",
          },
          {
            id: 10,
            img: require("../assets/i10.jpg"),
            info: "放假后，我立马加上qq询问情况。“已经没什么大碍了”   “那就好，对了，老师放假留了十来张卷子”    “哦，没事，我让朋友给我带回家...”",
          },
        ];
      },
    },
    //让时间轴默认是6
    timelineNum: {
      type: Number,
      default: 6,
    },
    timelineWidth: {
      type: Number,
      default: 150,
    },
    themeColor: {
      type: String,
      default: "#bd1622",
    },
    enterActiveClass: {
      type: String,
      default: 'animate__animated animate__fadeInLeft'
    },
    mouseEvent: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
      timer2: null,
      onIsActive: true,
      translateNum: 0,
    };
  },
  computed: {
    prevIndex() {
      if (!this.loop) {
        if (this.currentIndex == 0) {
          return 0;
        } else {
          return this.currentIndex - 1;
        }
      } else {
        if (this.currentIndex == 0) {
          return this.timelineList.length - 1;
        } else {
          return this.currentIndex - 1;
        }
      }
    },
    nextIndex() {
      if (!this.loop) {
        if (this.currentIndex == this.timelineList.length - 1) {
          return this.timelineList.length - 1;
        } else {
          return this.currentIndex + 1;
        }
      } else {
        if (this.currentIndex == this.timelineList.length - 1) {
          return 0;
        } else {
          return this.currentIndex + 1;
        }
      }
    },
    changeThemeColor() {
      return {
        "--theme-color": this.themeColor,
      };
    },
  },
  methods: {
    go(index, str) {
      this.currentIndex = index;
      this.onIsActive = true;
      if (this.autoPlay) {
        this.setGo();
        this.setOnActive();
      }
      this.calcTranslateNum(str);
      this.$emit("getCurrentItem", index, this.timelineList[index], this.carouselList[index]);
    },
    setOnActive() {
      clearTimeout(this.timer2);
      this.timer2 = setTimeout(() => {
        this.onIsActive = false;
      }, 4800);
    },
    setGo() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.go(this.nextIndex);
        this.calcTranslateNum("next");
      }, 5600);
    },
    calcTranslateNum(str) {
      const length = this.timelineList.length - 1;
      if (str === "next") {
        if (this.currentIndex >= this.timelineNum) {
          this.translateNum = (length - this.timelineNum) * -this.timelineWidth;
        }
        if (this.currentIndex === 0) {
          this.translateNum = 0;
        }
      } else if (str === "prev") {
        if (this.currentIndex <= this.timelineNum) {
          this.translateNum = 0;
          return;
        }
        if (this.currentIndex >= this.timelineNum) {
          this.translateNum =
            (length - this.timelineNum) * -this.timelineWidth;
          return;
        }
        this.translateNum += this.timelineWidth;
      } else {
        if (this.currentIndex < this.timelineNum) {
          this.translateNum = 0;
          return;
        }
        if (this.currentIndex >= this.timelineNum) {
          this.translateNum =
            (length + 1 - this.timelineNum) * -this.timelineWidth;
          return;
        }
        this.translateNum += this.timelineWidth;
      }
    },
  },
  mounted() {
    if (this.autoPlay) {
      this.setGo();
      this.setOnActive();
    }
    this.$emit("getCurrentItem", 0, this.timelineList[0], this.carouselList[0]);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearTimeout(this.timer2);
  },
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  .slider {
    width: 100%;
    padding: 12% 15% 4% 15%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 260px;
    }
    .leave-to {
      position: relative;
    }
    .enter-active-class {
      animation: 1s fadeIn linear;
    }
    .slider-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        animation: 1s fadeIn linear;
      }
      .slider-box__item {
        width: 50%;
        height: 100%;
        &:nth-child(2) {
          padding-left: 10%;
          box-sizing: border-box;
          position: relative;
          .item-title-bg {
            position: absolute;
            color: rgba(0, 0, 0, 0.05);
            right: 0;
            top: 0;
            font-size: 5rem;
            filter: blur(3px);
            opacity: 1;
            width: 100%;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .item-title {
            font-size: 24px;
            font-weight: bold;
            color: #000;
            margin-bottom: 20px;
          }
          .item-info {
            font-size: 24px;
            color: #5b5b5a;
            line-height: 24px;
          }
        }
        img {
          width: 50%;
          left: 200px;
        }
      }
    }
  }
  .timeline {
    width: 100%;
    box-sizing: border-box;
    margin-top: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    &.mt {
      margin-top: 80px;
    }
    .line {
      width: 100%;
      height: 1px;
      background: #ccc;
    }
    .timeline-container {
      width: 100%;
      .item {
        width: 12.5%;
        float: left;
        text-align: center;
        &:nth-child(2) {
          width: 75%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          padding-top: 150px;
          margin-top: -150px;
        }
        .list {
          position: relative;
          text-align: center;
          cursor: pointer;
          transition: 0.5s all linear;
          display: flex;
          justify-content: center;
          &:last-child {
            .line {
              display: none;
            }
          }
          .circle {
            position: absolute;
            left: 48%;
            width: 8px;
            height: 8px;
            background: #ccc;
            border-radius: 50%;
            margin: -4px auto 0;
            z-index: 2;
            &.active {
              background-color: var(--theme-color);
            }
            &:hover {
              background-color: var(--theme-color);
            }
          }
          .line {
            width: 100%;
            height: 1px;
            position: absolute;
            left: 48%;
            top: -1px;
            opacity: 0;
            z-index: 1;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: var(--theme-color);
              animation-fill-mode: both;
              animation-duration: 2.8s;
              animation-timing-function: linear;
            }
          }
          .line.on {
            opacity: 1;
            &::after {
              animation-name: line_1;
            }
          }
          .line.go {
            opacity: 1;
            &::after {
              right: 0;
              left: auto;
              animation-duration: 0.8s;
              animation-name: line_2;
            }
          }
          .text {
            margin-top: 14px;
            width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: relative;
          }
          .tip {
            position: absolute;
            top: -55px;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: var(--theme-color);
            color: #fff;
            width: max-content;
            display: none;
            .triangle {
              width: 0;
              height: 0;
              border-top: 8px solid var(--theme-color);
              border-right: 5px solid transparent;
              border-left: 5px solid transparent;
              position: absolute;
              left: 50%;
              bottom: -8px;
              margin-left: -3.5px;
            }
          }
        }
        .item-prev,
        .item-next {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          color: #909090;
          background-color: #e9e9e9;
          cursor: pointer;
          margin: -24px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          outline: none;
          &:hover {
            color: #fff;
            background-color: var(--theme-color);
          }
          &.item-disabled {
            background: #666;
            cursor: no-drop;
          }
        }
      }
    }
  }
}
@keyframes line_1 {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes line_2 {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
// 关键帧动画
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>