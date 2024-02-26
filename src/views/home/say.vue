<template>
    <div>
        <template><BBSHeader/></template>
        <div >
    <img src="../../assets/4.jpg" />
  </div>
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

<button @click="gotoxinnian" class="btn">
  <span>新年快乐</span>
  </button>
    </div>
</template>



<script>
import BBSHeader from "@/components/BBSHeader";
export default {
  name: "Say", //和对应路由表中配置的name值一致
  components: {
    BBSHeader
  },
  methods:{
  gotoxinnian(){
    this.$router.push('/xinnian');
  }
},
  data() {
  return {
    typingTexts: [
      "兜兜转转我们最终又变回陌生人了，恋爱只有一开始是甜的，那时候我们都还不太了解彼此，</br>越深入了解越会发现自己喜欢的不过是带着滤镜完美的彼此。当慢慢看到对方的缺点，</br>还有多多少少的摩擦，爱便不复存在...</br>好累啊，每写一段都要整理一下情绪，写写停停也算写完了。没能赶在新年前完成，但愿我的新年祝福不算来的太迟。",
    ],
  };
},

}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}
.typing {
    position: absolute;
    display: inline-block;
    height:200px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 0 0 10px black;
    text-align: center;
    z-index: 999;
}
.btn{
    margin-top: -370px;
    width: 200px;
    height: 50px;
    background: radial-gradient(circle, rgb(239, 171, 11) 0%, rgb(208, 24, 192) 100%);
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

</style>