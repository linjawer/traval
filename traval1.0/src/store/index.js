// 装插件要引入vue
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
// 2.引入插件
Vue.use(Vuex);
// 3.创建一个仓库
export default new Vuex.Store({ 
  state: state,
  mutations: mutations
})


// //把数据传到actions里边,对应的参数都会有两个，
// //ctx的作用就是能够帮助我们拿到commit这个方法
// actions:{
//changeCity(ctx,city){
// actions执行的时候调用mutations，需要用到的是commit的方法
//ctx.commit('changeCity',city)   
//     }
// },
// actions需要把数据传递到mutations里边改变数据，改变完数据后，在传到state里边，需要调用的方法commit
//其中state指的是我们state的公用数据
