<template>
    <div>
		<!-- BBSHeader是公共导航栏，抽离成为一个组件，从components文件夹引入 -->
        <template><BBSHeader/></template>
<section class="g-img1">
	<!-- timeline-carousel是时间轴，抽离成为一个组件，从components文件夹引入 -->
    <timeline-carousel />
</section>
<section class="g-img2">
    <div class="bg">
	    <div class="shine">
     <p>在蝉鸣中闷完了暑假，我们分班了。</p> <p>新的教室，新的同学。</p><p>我们只隔了一个班级的距离，在去厕所的走廊上经常能碰见。</p> <p>只是我们打招呼的次数渐渐变少。</p><p>高中的日子慢的不像话，</p><p>熬过了紧张的高三，结束了高考的拼搏。</p><p>但我们的故事还在继续...</p>
		</div>
	</div>
</section>
<section class="g-img3"></section>
    </div>
</template>

<script>
import BBSHeader from "@/components/BBSHeader";
import timelineCarousel from '@/components/timelineCarousel';
export default {
  name: "Shouye", 
  components: {
    BBSHeader,timelineCarousel
  },
 
}
</script>

<style>
section {
    height: 1000px;
    background: rgba(0, 0, 0, .5);

}
/* 背景图片有三张 */
.g-img1 {
    background-image: url(../../assets/bg4.jpeg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}

.g-img2 {
    background-image: url(../../assets/bg6.jpeg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}

.g-img3 {
    background-image: url(../../assets/bg5.jpeg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
.bg{
		    width: 1000px; /*设置元素宽度*/
		    height: 300px; /*设置元素高度*/
		    margin: 0 auto; /*设置元素外边距*/
		    padding-top: 100px; /*设置元素上内边距*/
		}
		.shine{
		    width: 1000px;
		    font-family: "Microsoft YaHei";
		    font-size: 30px;
		    text-align: center;
		    background: -webkit-linear-gradient(left, #0f0, #00f) 0 0 no-repeat;/*设置线性渐变*/
		    background-size: 160px;                        /*设置背景大小*/
		    background-clip: text;                            /*背景被裁剪到文字*/
		    color: rgba(45, 24, 24, 0.6);        /*设置文字的填充颜色*/
		   animation: shine 3s infinite;                    /*设置动画*/
		}
		@keyframes shine{   /*创建动画*/
		    0%{
		        background-position: 0 0;
		    }
		    100%{
		        background-position: 100% 100%;
		    }
		}

</style>