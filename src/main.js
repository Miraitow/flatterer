import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueTypedJs from 'vue-typed-js'
import VueParticles from 'vue-particles'
import VueKinesis from 'vue-kinesis'
import timelineCarousel from 'timeline-carousel'
Vue.use(timelineCarousel)
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.use(VueTypedJs);
Vue.use(VueKinesis);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')