<template>
    <div>
        <div id="nav">
            <template><BBSHeader/></template>
            <!-- 安装粒子动画库，在main.js做全局引入，在任意页面均可使用 -->
      <vue-particles
        color="#fff"
        :particleOpacity="0.5"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="5"
        linesColor="#555"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"
      />   
      <!-- Fate let us meet again这里是使用css样式做的3D效果 -->
       <div class="meet">
        <div class="layer">Fate let us</div>
        <div class="layer1">meet again</div>
       </div>
        <!-- 最外层的盒子 -->
    <div class="outerBox">
        <!-- 第一大块 -->
        <!-- 左边整体的内容 -->
        <div class="dateBox">
            <!-- <h2>（一）</h2> -->
            <div>
                <p>（一）</p>
                <ul>放假玩耍的时光总是飞逝的，转眼又开学了。烈日下，突然掠过一道熟悉的身影，我追上前去，确认了那就是他。我很惊讶，也没敢多问。心想"老朋友，我们又见面了。"</ul>
            </div>
        </div>
        <!-- 右边整体的内容 -->
        <div class="dateLeftBox" style="top: 120px;">
            <!-- <h2>2021/12/25</h2> -->
            <div>
                <p>（二）</p>
                <ul>铺天盖地的消息教你如何正确度过大学四年。竞选班团、面试合唱团、校运会选拔...无一例外，全被刷了。很迷茫，我不知道到底想要什么，我也不明白为什么要那样做。好像不这样，就会被定义为一个失败的大学生。</ul>
            </div>
        </div>

        <!-- 第二大块 -->
        <!-- 左边整体的内容 -->
        <div class="dateBox" style="top: 240px;">
            <!-- <h2>2021/12/23</h2> -->
            <div>
                <p>（三）</p>
                <ul>简单的吐槽了一下苦逼的大一，好了，言归正传。我们重新加上了qq，那时候出现在我们聊天记录里的只有我发给他写的一团糟的代码以及他回复给我可以正常运行的代码。</ul>
            </div>

        </div>
        <!-- 右边整体的内容 -->
        <div class="dateLeftBox" style="top: 360px;">
            <!-- <h2>2021/12/13</h2> -->
            <div>
                <p>（四）</p>
                <ul>超级感动，没有嫌弃我拖后腿。反而一次又一次的帮我修bug。不然C语言真的要重修了。</ul>
            </div>
        </div>

        <!-- 第三大块 -->
        <!-- 左边整体的内容 -->
        <div class="dateBox" style="top: 480px;">
            <!-- <h2>2020/12/23</h2> -->
            <div>
                <p>（五）</p>
                <ul>不知道从什么时候起，我们的聊天内容不再局限于学习。我们进一步了解彼此的生活，感叹他的变化，他比以前更爱说话了，身边的朋友有很多，而我还在守着那座孤岛。</ul>
            </div>

        </div>
        <!-- 右边整体的内容 -->
        <div class="dateLeftBox" style="top: 600px;">
            <!-- <h2>2020/05/14</h2> -->
            <div>
                <p>（六）</p>
                <ul>都说频繁的聊天会让人产生恋爱的错觉，我想是的吧。有时候我会很突然抛出一个奇怪的话题，他似乎也很愿意将话题继续进行下去，认真的回答让我感觉我们在密谋什么大事。</ul>
            </div>
        </div>

        <!-- 第四大块 -->
        <!-- 左边整体的内容 -->
        <div class="dateBox" style="top: 720px;">
            <!-- <h2>2020/12/23</h2> -->
            <div>
                <p>（七）</p>
                <ul>完蛋，现在回想起来有点尴尬，因为我会看着聊天记录傻笑，别人不会以为我是傻子吧。</ul>
            </div>

        </div>
        <!-- 右边整体的内容 -->
        <div class="dateLeftBox" style="top: 840px;">
            <!-- <h2>2020/05/14</h2> -->
            <div>
                <p>（八）</p>
                <ul>18岁生日那天，我第一次表现出了占有欲。我很自私的让他为我弹奏了一首生日祝福歌。不过没有保存下来，因为我把记录全删了，总不能一直活在痛苦的回忆中吧。</ul>
            </div>
        </div>
    </div>
		</div>
       
	</div>
</template>


<script>
import BBSHeader from "@/components/BBSHeader";
export default {
  name: "Shouye", //和对应路由表中配置的name值一致
  components: {
    BBSHeader
  },
 
}
</script>

<style lang='scss' scoped>
.meet{
    width: 300px;
    height: 100px;
    position: fixed;
}
 .layer {
		  width: 100%;/*设置元素宽度*/
		  height: 100%;/*设置元素高度*/
		  /* position: absolute; */
		  font-size:64px; /*设置字体大小*/
		  white-space: pre; /*设置元素内的空白*/
		  text-align: center; /*设置文字居中*/
		//   top: 100px;
        // margin-top: 100px;
		  color: #c2a9f4; /*设置文字颜色*/
		  letter-spacing: -2px; /*设置字符间距*/
		  text-shadow: 4px 0 2px; /*设置文字阴影*/
		  transform-style: preserve-3d;  /*设置元素保留3D位置*/
          transform:rotateX(15deg) rotateY(-60deg);
		}
 .layer1 {
		  width: 100%;/*设置元素宽度*/
		  height: 100%;/*设置元素高度*/
		  /* position: absolute; */
		  font-size:64px; /*设置字体大小*/
		  white-space: pre; /*设置元素内的空白*/
		  text-align: center; /*设置文字居中*/
		//   top: 150px;
		  color: #8e65e0; /*设置文字颜色*/
		  letter-spacing: -2px; /*设置字符间距*/
		  text-shadow: 4px 0 2px; /*设置文字阴影*/
		  transform-style: preserve-3d;  /*设置元素保留3D位置*/
          transform:rotateX(-30deg) rotateY(20deg);
		}
    .lizi{
    // position:fixed;
    top:85px;
    width:100%;
    height: 100%;
    background-image: url(../../assets/bg8.jpeg);
    // background-attachment: fixed;
    background-size: cover;
  }
  * {
        padding: 0;
        margin: 0;
    }

    .outerBox {
        /* 竖线样式 高度根据事件的多少调整*/
        width: 5px;
        height: 900px;
        background: rgb(221, 221, 221);
        margin: 40px auto;
        position: relative;
        animation: heightSlide 2s linear;
        margin-top: 150px;
    }

    @keyframes heightSlide {

        /* 竖线的动画效果：以百分比来规定改变发生的时间，0% 是动画的开始时间，100% 动画的结束时间 */
        0% {
            height: 0;
        }

        100% {
            height: 900px;
        }
    }

    .outerBox:after {
        /* 竖线末尾文字样式 */
        content: '未完...';
        width: 100px;
        color: rgb(253, 19, 175);
        position: absolute;
        margin-left: -47px;
        text-align: center;
        bottom: -30px;
        animation: showIn 5.5s ease;
    }

    .outerBox .dateBox,
    .outerBox .dateLeftBox {
        /* 球球的样式 */
        position: absolute;
        margin-left: -4px;
        margin-top: -10px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 4px solid rgb(221, 221, 221);
        background: rgb(31, 122, 252);
        transition: all 0.5s;
        animation: showIn ease;
    }

    .outerBox .dateBox:nth-child(1) {
        /* 第一个事件 设置动画在几秒内完成 */
        animation-duration: 1s;
    }

    .outerBox .dateLeftBox:nth-child(2) {
        /* 第二个事件 设置动画在几秒内完成 */
        animation-duration: 1.5s;
    }

    .outerBox .dateBox:nth-child(3) {
        /* 第三个事件 设置动画在几秒内完成 */
        animation-duration: 2s;
    }

    .outerBox .dateLeftBox:nth-child(4) {
        /* 第四个事件 设置动画在几秒内完成 */
        animation-duration: 2.5s;
    }

    .outerBox .dateBox:nth-child(5) {
        /* 第五个事件 设置动画在几秒内完成 */
        animation-duration: 3s;
    }

    .outerBox .dateLeftBox:nth-child(6) {
        /* 第六个事件 设置动画在几秒内完成 */
        animation-duration: 3.5s;
    }

    .outerBox .dateBox:nth-child(7) {
        /* 第七个事件 设置动画在几秒内完成 */
        animation-duration: 4s;
    }

    .outerBox .dateLeftBox:nth-child(8) {
        /* 第八个事件 设置动画在几秒内完成 */
        animation-duration: 4.5s;
    }

    @keyframes showIn {

        /* 球球、竖线、左右的模块的动画 */
        0%,
        70% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .outerBox .dateBox h2,
    .outerBox .dateLeftBox h2 {
        /* 日期的样式 */
        position: absolute;
        margin-left: -120px;
        margin-top: 3px;
        color: rgb(234, 10, 250);
        font-size: 14px;
        cursor: pointer;
        /* animation: showIn 3s ease; */
    }

    .outerBox .dateLeftBox h2 {
        /* 右边日期的样式 */
        margin-left: 60px;
        width: 100px;
    }

    .outerBox .dateBox:hover,
    .outerBox .dateLeftBox:hover {
        /* 触摸事件后球球的样式 */
        border: 4px solid rgb(195, 195, 195);
        background: rgb(143, 189, 253);
        box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.8);
    }

    .outerBox .dateBox div,
    .outerBox .dateLeftBox div {
        /* 左右事件的样式 */
        position: absolute;
        top: 50%;
        margin-top: -15px;
        left: 50px;
        width: 300px;
        height: 21px;
        border: 2px solid rgb(53, 153, 204);
        border-radius: 6px;
        z-index: 2;
        overflow: hidden;
        cursor: pointer;
        /* animation: showIn 5s ease; */
        transition: all 0.5s;
    }

    .outerBox .dateLeftBox div {
        /* 左边事件的样式 */
        left: -337px;
    }

    .outerBox .dateBox div:hover,
    .outerBox .dateLeftBox div:hover {
        /* 触摸事件后的高度 */
        height: 150px;
    }

    .outerBox .dateBox div p,
    .outerBox .dateLeftBox div p {
        /* 左右事件的字体样式 */
        color: rgb(111, 111, 206);
        font-weight: bold;
        text-align: center;
    }

    .outerBox .dateBox:before,
    .outerBox .dateLeftBox:before {
        /* 右边事件的角标样式 */
        content: '';
        position: absolute;
        top: -3px;
        left: 37px;
        width: 0px;
        height: 0px;
        border: 7px solid transparent;
        border-right: 7px solid rgb(84, 84, 85);
        z-index: -1;
        animation: showIn 5s ease;
    }

    .outerBox .dateLeftBox:before {
        /* 左边事件的角标样式 */
        left: -34px;
        border: 7px solid transparent;
        border-left: 7px solid rgb(84, 84, 85);
    }

    .outerBox .dateBox div ul,
    .outerBox .dateLeftBox div ul {
        /* 左右事件触摸展开后内容的样式 */
        list-style: none;
        width: 300px;
        padding: 4px;
        border-top: 2px solid rgb(84, 84, 85);
        color: rgb(142, 101, 223);
        font-size: 14px;
    }

</style>
