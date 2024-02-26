<template>
  <div class="home">
    <div>
      <img src="../../assets/bg3.gif" alt="gif" >//这是一个gif背景图
    </div>
    <!-- 引入了打字机效果插件 -->
<vue-typed-js
  class="desc"
  :strings="typingTexts"
  :loop="true"
  :startDelay="300"
  :typeSpeed="100"
  :backSpeed="50"
>
  <span class="typing"></span>
</vue-typed-js>
<button @click="gotoshouye" class="btn">
  <span>我们的故事</span>
  </button>

  </div>
</template>


<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
  return {
    typingTexts: [
    " 夏已尽，秋将至。故事很短，余生还很长。",
    ],
  };
},
methods:{
  // 进行路由跳转到首页
  gotoshouye(){
    this.$router.push('/shouye');
  }
}
}
</script>


<style>
img{
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}
.typing {
    position: absolute;
    display: inline-block;
    margin-top: -1000px;
    height: 80px;
    width: 100%;
    padding: 20px 0;
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 0 0 10px black;
    text-align: center;
    z-index: 999;
}
/* 这是一些css样式，让按钮变得更好看 */
.btn{
    margin-top: -430px;
    width: 200px;
    height: 50px;
    background: radial-gradient(circle, rgb(55, 41, 120) 0%, rgba(118, 174, 241, 1) 100%);
    border: none;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 15px;
    left: 45%;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    line-height: 50px;
}
.btn span{
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
}
.btn:hover{
    background: transparent;
    color: #76aef1;
}
.btn::before,
.btn::after{
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    box-shadow:
    -1px -1px 20px 0px rgba(255, 255, 255, 1),
    -4px -4px 5px 0px rgba(255, 255, 255, 1),
    10px 10px 20px 0px rgba(0, 0, 0, .4),
    6px 6px 5px 0px rgba(0, 0, 0, .3);
    transition: all 0.8s ease;
    padding: 0;
}
.btn::before{
    top: 0;
    right: 0;
}
.btn::after{
    bottom: 0;
    left: 0;
}
.btn:hover::before,
.btn:hover::after{
    height: 100%;
}
.btn span::before,
.btn span::after{
    position:absolute;
    content: '';
    height: 1px;
    width: 1px;
    box-shadow:
    -1px -1px 20px 0px rgba(255, 255, 255, 1),
    -4px -4px 5px 0px rgba(255, 255, 255, 1),
    10px 10px 20px 0px rgba(0, 0, 0, .4),
    6px 6px 5px 0px rgba(0, 0, 0, .3);
    transition: all 0.8s ease;
}
.btn span::before{
    top:0;
    left: 0;
}
.btn span::after{
    bottom: 0;
    right: 0;
}
.btn span:hover::before,
.btn span:hover::after{
    width: 100%;
}

</style>