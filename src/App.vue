<template>
  <div id="app">
    <div class="main">
      <div style="padding: 40px">
        <!-- 点击按钮切换播放和暂停音乐 -->
        <button class="play-button" @click="togglePlaying">
          {{ isPlaying ? "Stop" : "Play" }}
        </button>
      </div>
      <!-- 通过kinesis-container动画库，下面的小盒子随着音乐的频率震动 -->
      <div style="padding: 40px">
        <kinesis-container :audio="audioFile" :playAudio="isPlaying">
          <kinesis-audio :audioIndex="20" type="scale">
            <kinesis-element :strength="3" type="depth">
              <div class="circle"></div>
            </kinesis-element>
          </kinesis-audio>
        </kinesis-container>
      </div>
    </div>

<!-- 全局引入路由 -->
    <router-view/>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement, KinesisAudio } from "vue-kinesis";

export default {
  name: "APP",
  components: {
    KinesisContainer,
    KinesisElement,
    KinesisAudio,
  },
  data() {
    return {
      audioFile: require("./assets/忘记时间.mp3"),
      isPlaying: false,
    };
  },
  methods:{
    togglePlaying() {
      this.isPlaying = !this.isPlaying;
    },
    show(){
      function clickEffect() {
        let balls = [];
        let longPressed = false;
        let longPress;
        let multiplier = 0;
        let width, height;
        let origin;
        let normal;
        let ctx;
        const colours = ["#FFDEAD", "#F08080", "#EE6363", "#20B2AA", "	#4876FF"];//点击出现的小球颜色列表
        const canvas = document.createElement("canvas");//创建画布
        document.body.appendChild(canvas);
        canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
        const pointer = document.createElement("span");//dom操作，创建span盒子
        pointer.classList.add("pointer");
        document.body.appendChild(pointer);

        if (canvas.getContext && window.addEventListener) {
          ctx = canvas.getContext("2d");
          updateSize();
          window.addEventListener('resize', updateSize, false);
          loop();
          window.addEventListener("mousedown", function(e) {
            pushBalls(randBetween(10, 20), e.clientX, e.clientY);
            document.body.classList.add("is-pressed");
            longPress = setTimeout(function(){
              document.body.classList.add("is-longpress");
              longPressed = true;
            }, 500);
          }, false);
          window.addEventListener("mouseup", function(e) {
            clearInterval(longPress);
            if (longPressed == true) {
              document.body.classList.remove("is-longpress");
              pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
              longPressed = false;
            }
            document.body.classList.remove("is-pressed");
          }, false);
          window.addEventListener("mousemove", function(e) {
            let x = e.clientX;
            let y = e.clientY;
            pointer.style.top = y + "px";
            pointer.style.left = x + "px";
          }, false);
        } else {
          console.log("canvas or addEventListener is unsupported!");
        }


        function updateSize() {
          canvas.width = window.innerWidth * 2;
          canvas.height = window.innerHeight * 2;
          canvas.style.width = window.innerWidth + 'px';
          canvas.style.height = window.innerHeight + 'px';
          ctx.scale(2, 2);
          width = (canvas.width = window.innerWidth);
          height = (canvas.height = window.innerHeight);
          origin = {
            x: width / 2,
            y: height / 2
          };
          normal = {
            x: width / 2,
            y: height / 2
          };
        }
        class Ball {
          constructor(x = origin.x, y = origin.y) {
            this.x = x;
            this.y = y;
            this.angle = Math.PI * 2 * Math.random();
            if (longPressed == true) {
              this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
            } else {
              this.multiplier = randBetween(6, 12);
            }
            this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
            this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
            this.r = randBetween(8, 12) + 3 * Math.random();
            this.color = colours[Math.floor(Math.random() * colours.length)];
          }
          update() {
            this.x += this.vx - normal.x;
            this.y += this.vy - normal.y;
            normal.x = -2 / window.innerWidth * Math.sin(this.angle);
            normal.y = -2 / window.innerHeight * Math.cos(this.angle);
            this.r -= 0.3;
            this.vx *= 0.9;
            this.vy *= 0.9;
          }
        }

        function pushBalls(count = 1, x = origin.x, y = origin.y) {
          for (let i = 0; i < count; i++) {
            balls.push(new Ball(x, y));
          }
        }

        function randBetween(min, max) {
          return Math.floor(Math.random() * max) + min;
        }

        function loop() {
          ctx.fillStyle = "rgba(255, 255, 255, 0)";
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.r < 0) continue;
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
            ctx.fill();
            b.update();
          }
          if (longPressed == true) {
            multiplier += 0.2;
          } else if (!longPressed && multiplier >= 0) {
            multiplier -= 0.4;
          }
          removeBall();
          requestAnimationFrame(loop);
        }

        function removeBall() {
          for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
              balls.splice(i, 1);
            }
          }
        }
      }
      clickEffect();//调用特效函数
    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background-color: rgb(239, 239, 239);
  }
  .lizi{
    position:fixed;
    top:0;
    width:100%;
  }
  .circle{
    width: 10px;
    height: 10px;
    margin-left: 10px;
    background-image: url(./assets/bg7.jpg);
    background-size:100% 100%;
    border-radius: 10px;
  }
  .main{
    position: fixed;
    top:20px;
    right: 20px;
    z-index: 999;
  }
  .play-button{
    background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
    border-radius: 10px;
    z-index: 999;
  }
</style>
