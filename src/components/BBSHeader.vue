<template>
    <div>
        <div class="header">
            <div class="box">
                <nav>
                    <router-link active-class="active" to="/shouye">相识相知</router-link>
                    <router-link active-class="active" to="/xiangfeng">再次相逢</router-link>
                    <router-link active-class="active" to="/xiangai">在一起了</router-link>
                    <router-link active-class="active" to="/end">结束了</router-link>
                    <router-link active-class="active" to="/say">我想说</router-link>
                    <div >
   		<a class="shine">我们的故事</a>
	</div>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BBSHeader"
    }
</script>

<style scoped>
    .header{
        margin: 0;
        padding: 0;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        height: 85px;
        background-image: linear-gradient(to right, #5ee7df , #b490ca);
        color: #ffffff;
        position: fixed;
        z-index: 99;
        top:0;
    }


    nav {
        display: flex;
        align-items: center;
        margin: 0px 40px;
        font:16px Tahoma,Geneva,sans-serif;
    }
    nav a{
        padding: 0 0;
        width: 190px;
        text-decoration:none;
        color: #ffffff;
        font-size: 23px;
        font-weight: normal;
        opacity: 0.9;
    }

    nav a:hover {
        color: #0bdecd;
        text-decoration: none;
    }

    .active {
        color: #1e9e96;
        pointer-events: none;
        opacity: 1;
    }
    @keyframes light{/*创建动画让蓝色阴影从大到小再从小到大*/
	from{
	text-shadow:0 0 10px #fff,
	0 0 20px #fff,
	0 0 30px #fff,
	0 0 40px #0000FF,
	0 0 70px #0000FF,
	0 0 80px #0000FF,
	0 0 100px #0000FF,
	0 0 150px #0000FF;
		   }
    to{
	text-shadow:0 0 5px #fff,
	0 0 10px #fff,
	0 0 15px #fff,
	0 0 20px #0000FF,
	0 0 35px #0000FF,
	0 0 40px #0000FF,
	0 0 50px #0000FF,
	0 0 75px #0000FF;
		   }

		}
		.shine{
		   font-size:35px; /*设置字体大小*/
		   font-weight:bolder; /*设置字体粗细*/
		   color:#FFFFFF; /*设置文字颜色*/
		   cursor:pointer; /*设置光标形状*/
		   animation:light 1.5s ease-in-out infinite alternate;/*设置动画*/
		}
 

</style>