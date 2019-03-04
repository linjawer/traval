import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
/* 1.引入轮播图插件，在github上边找插件 */
import VueAwesomeSwiper from "vue-awesome-swiper";
/* 1.1.引入轮播图的css插件 */
import "swiper/dist/css/swiper.css";

/* main.js是项目的入口文件，引入了reset.css是项目的初始化文件*/
import "./assets/styles/reset.css";
/* 引入了border.css文件是解决了1像素边框在移动端上边显示多像素边框的问题 
移动端有个1像素边框的问题,在加上1px边框会显示多像素边框的问题，所以要加上border.css，
后续都是可以用这个文件的
*/
import "./assets/styles/border.css";
/* 引入字体文件 */
import "./assets/styles/iconfont.css";

Vue.config.productionTip = false;
/* 这个fastClick的意思就是解决移动端点击300ms延时的问题，在git bash里边安装
输入指令：npm install fastclick --save点击安装，安装之后必须要在上边引入
*/
fastClick.attach(document.body);
/* 1.2.轮播图插件定义 */
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
