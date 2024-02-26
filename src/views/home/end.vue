<template>
    <div>
        <template><BBSHeader/></template>
        <section>
     <!-- 代码部分begin -->
    <!-- 书的主体 -->
    <div class="book preserve-3d">
        <!-- 书的最后一页 -->
        <div class="book-page-box book-page-4 preserve-3d">
            <div class="book-page page-front">
                <p>那天晚上，没有争吵、没有挽留的话，一切看上去客客气气的样子。事情经过一个晚上的发酵，我情绪失控了，只记得
                    我们说了很多很多伤人的话，那一刻，我们成了仇人......
                <br/>
                <br/>
                <br/>
                </p>
            </div>
        </div>
        <!-- 书的第三页 -->
        <div class="book-page-box book-page-3 preserve-3d flip-animation-3">
            <div class="book-page page-front">
                <p><br/><br/>
                    <br/>
                    <br/>
                   结束了
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </p>
            </div>
        </div>
        <!-- 书的第二页 -->
        <div class="book-page-box book-page-2 preserve-3d flip-animation-2">
            <div class="book-page page-front">
                <p>11月5号晚上，他向我提了分手。  “我们还是做朋友吧”  看到这句话觉得有点心酸又有点好笑，明明在同一所学校、同一个学院甚至同一条走廊，我们却好像异地恋一样。
                    一个星期搭上一次话，两个星期见一次面，爱的很卑微。
            ，
                </p>
            </div>
        </div>
        <!-- 书的封面 -->
        <div class="book-page-box book-page-1 preserve-3d flip-animation-1">
            <div class="book-page page-front">
            </div>
        </div>
    </div>
    <!-- 一些图片 -->
    <div class="set set3">
      <div><img src="../../assets/8.jpg" alt=""></div>
      <div><img src="../../assets/9.jpg" alt=""></div>
      <div><img src="../../assets/11.jpg" alt=""></div>
      <div><img src="../../assets/10.jpg" alt=""></div>
      <div><img src="../../assets/8.jpg" alt=""></div>
      <div><img src="../../assets/9.jpg" alt=""></div>
      <div><img src="../../assets/11.jpg" alt=""></div>
      <div><img src="../../assets/10.jpg" alt=""></div>
    </div>
  </section>
    </div>
</template>


<script>
import BBSHeader from "@/components/BBSHeader";
export default {
  name: "end", //和对应路由表中配置的name值一致
  components: {
    BBSHeader
  },
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
    background-image: url(../../assets/bg9.jpg);
    background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
section h3{
  color: #fff;
  font-size: 6em;
  text-transform: uppercase;
}
section .set{
  position: absolute;
  width: 100%;
  height: 100%;
  top:10px;
  left: 0;
  pointer-events: none;
  filter: blur(4px);
}
section .set div{
  position: absolute;
  display: block;
}
section .set div:nth-child(1){
  left: 20%;
  animation: animate 5s linear infinite;
  animation-delay: -12s;
}
section .set div:nth-child(2){
  left: 50%;
  animation: animate 15s linear infinite;
  animation-delay: -5s;
}
section .set div:nth-child(3){
  left: 70%;
  animation: animate 15s linear infinite;
  animation-delay: 0s;
}
section .set div:nth-child(4){
  left: 0%;
  animation: animate 15s linear infinite;
  animation-delay: -5s;
}
section .set div:nth-child(5){
  left: 85%;
  animation: animate 13s linear infinite;
  animation-delay: -10s;
}
section .set div:nth-child(6){
  left: 0%;
  animation: animate 7s linear infinite;
}
section .set div:nth-child(7){
  left: 15%;
  animation: animate 9s linear infinite;
}
section .set div:nth-child(8){
  left: 60%;
  animation: animate 12s linear infinite;
}

@keyframes animate{
  0%{
    opacity: 0;
    top: -10%;
    transform: translateX(20px) rotate(0deg);
  }
  10%{
    opacity: 1;
  }
  20%{
    transform: translateX(-20px) rotate(45deg);
  }
  40%{
    transform: translateX(-20px) rotate(90deg);
  }
  60%{
    transform: translateX(20px) rotate(180deg);
  }
  80%{
    transform: translateX(-20px) rotate(180deg);
  }
  100%{
    top: 110%;
    transform: translateX(-20px) rotate(225deg);
  }
}
.set2{
  transform: scale(2) rotateY(180deg);
  /* 对图片进行模糊处理 */
  filter: blur(4px);
}
.set3{
  transform: scale(0.5) ;
  filter: blur(4px);
}

template {
    /*perspective 属性指定了观察者与z=0平面的距离，使具有三维位置变换的元素产生透视效果。z>0的三维元素比正常大，而z<0时则比正常小，
    大小程度由该属性的值决定。默认情况下，消失点位于元素的中心，但是可以通过设置perspective-origin属性来改变其位置。*/
    perspective: 1000px;
    height: 100%;
}
.book {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    width: 400px;
    height: 550px;
    background-color: #fff;
    transform: rotateX(30deg);
}
.preserve-3d {
    /*transform-style属性指定了，该元素的子元素是（看起来）位于三维空间内,
    还是在该元素所在的平面内被扁平化。*/
    /*规定如何在 3D 空间中呈现被嵌套的元素*/
    transform-style: preserve-3d;
    /* 设置权级为9 让盒子浮起来不占位置*/
    z-index: 9;
}
.book-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 550px;
    /*设置四个边框的样式*/
    border: 1px solid papayawhip;
    text-align: center;
}
.book-page-box {
    /*设置旋转元素的基点位置*/
    transform-origin: 0 50%;
    /*旋转DIV元素*/
    transform: rotateY(0deg);
}
@keyframes flipBook1 {
    0% {

        transform: rotateY(0deg);
    }
    50% {

        transform: rotateY(-160deg);
    }
    100% {

        transform: rotateY(0deg);
    }
}


@keyframes flipBook2 {
    0% {

        transform: rotateY(0deg);
    }
    50% {

        transform: rotateY(-150deg);
    }
    100% {

        transform: rotateY(0deg);
    }
}
 

@keyframes flipBook3 {
    0% {

        transform: rotateY(0deg);
    }
    50% {

        transform: rotateY(-140deg);
    }
    100% {

        transform: rotateY(0deg);
    }
}

 
/*书的封面*/
.book-page-1 .page-front {
    background-color: #f5b6a3;
}
.book-page-1 .page-back {
    background-color: #fff;
}
.book-page-1 .page-front p {
    font-size: 40px;
    color: #fff;
    margin-top: 100px;
   font-family: 华文琥珀;
    vertical-align:middle;
    text-align: center;
}
.flip-animation-1 {
    /*把 "flipBook" 动画捆绑到 div 元素，时长：25 秒*/
    animation: flipBook1 25s;
}
 
/*书的第二页*/
.book-page-2 .page-back, .book-page-2 .page-front {
    background-color: #fff;
}
.book-page-2 .page-front p {
    font-size: 25px;
    color: #1976D2;
    font-family: 华文楷体;
    margin-top: 100px;
    writing-mode:tb-rl;
}
.flip-animation-2 {
    /*把 "flipBook2" 动画捆绑到 div 元素，时长：16 秒,延长5秒*/
    animation: flipBook2 16s 5s;
}
 
/*书的第三页*/
.book-page-3 .page-back, .book-page-3 .page-front {
    background-color: #fff;
}
.book-page-3 .page-front p {
    font-size: 30px;
    color: #1976D2;
    margin-top: 100px;
    font-family: 华文楷体;
}
.flip-animation-3 {
    animation: flipBook3 13s 6s;
}
 
/*书的第四页*/
.book-page-4 .page-front p {
    font-size: 24px;
    color: #1976D2;
    margin-top: 50px;
    writing-mode:tb-rl;
    font-family: 华文楷体;
}
</style>