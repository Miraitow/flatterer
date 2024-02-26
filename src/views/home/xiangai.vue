<template>
    <div>
        <template><BBSHeader/></template>
        <div >
    <img class="image" src="../../assets/bg1.gif" />
  </div>
  <div class="body">
    <div id="box">
		<!-- 一些图片 -->
			<img src="../../assets/img1.jpg" />
			<img src="../../assets/img2.jpg" />
			<img src="../../assets/img3.jpeg" />
			<img src="../../assets/img4.jpeg" />
			<img src="../../assets/img5.jpeg" />
		</div>

  </div>

<!-- 下面的小盒子 -->
<div class="container">
        <img src="../../assets/img4.jpeg"/>
        <p>在一次聊天中，他突然很果断的向我表达了交往的意愿。虽然一直都对美好爱情抱有幻想，但是当真正爱情来的时候，我犹豫了。就好像一直以来只有你一个人的日子里，突然有个人申请加入你的生活。
			没有预想过的生活，不确定的未来...可18岁的心总是不安分的，即使知道结局会很悲惨，也永远相信自己就是那个特例。我们真的在一起了，各自在朋友圈表达了对彼此的爱意，热烈而张扬。

		</p>
</div>


    </div>
</template>


<script>
import BBSHeader from "@/components/BBSHeader";
export default {
  name: "Xiangai", //和对应路由表中配置的name值一致
  components: {
    BBSHeader
  },
 
}
</script>

<style scoped>
.image{
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
}
#box {
	width: 120px;
	height: 200px;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	transform-style: preserve-3d;
	transform: rotateX(0deg) rotateY(0deg);
	animation: go 15s linear infinite;
			}
#box img {
	width: 120px;
	height: 200px;
	position: absolute;
	left: 0;
	top: 0;
			}

			/* 给图片设置动画效果，让其达到旋转的效果
			transform：rotateX（**deg）：沿着x轴方向旋转
            transform：rotateY（**deg）：沿着y轴方向旋转
            transform：rotateZ（**deg）：沿着z轴方向旋转
            transform：rotate3d（x，y，z，**deg）：沿着自定义x，y，z的矢量合矢量方向旋转 */

#box img:nth-child(1) {
	transform: rotateY(0deg) translateZ(300px);
			}
#box img:nth-child(2) {
	transform: rotateY(72deg) translateZ(300px);
			}
#box img:nth-child(3) {
	transform: rotateY(144deg) translateZ(300px);
			}
#box img:nth-child(4) {
	transform: rotateY(216deg) translateZ(300px);
			}
#box img:nth-child(5) {
	transform: rotateY(288deg) translateZ(300px);
			}
@keyframes go {
	0% {
		transform: rotateX(-20deg) rotateY(540deg);
	}
	50% {
		transform: rotateX(0deg) rotateY(360deg);
	}
	100% {
		transform: rotateX(20deg) rotateY(720deg);
	}
		}
		/* 这是给下面的小盒子设置的样式 */
.container{
		border-radius: 15px 15px 0 0;
		overflow: hidden;
        width: 880px;
        position: absolute;
        left: 22%;
        top: 100%;
        background-color: #927485;
        padding: 10px;
    }
    .container p{
        width: 875px;
        font-size: 17px;
        font-weight:bold;
    }
    .container img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        padding: 10px;
		/* 添加浮动，让文字环绕 */
        float: left;
        shape-outside: circle(50%);
    }
			

</style>