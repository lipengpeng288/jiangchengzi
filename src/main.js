import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './route';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ECharts from 'vue-echarts';

import 'echarts/lib/chart/bar';
import 'echarts-gl';

Vue.component('v-chart', ECharts)
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
