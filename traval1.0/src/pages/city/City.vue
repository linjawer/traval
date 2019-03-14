<template>
   <div>
        <city-header></city-header>
        <city-search></city-search>
        <!-- 这里可以看做事父元素获取的数据，然后要这个数据传递给到了子组件 -->
        <city-list 
           :cities='cities' 
           :hot='hotCities'
           :letter='letter'></city-list>
        <!-- @change是监听事件，监听的是Alphabet向外触发过来的事件 -->
        <city-Alphabet 
             :cities='cities'
             @change='handleLetterChange'
             ></city-Alphabet>
   </div>
</template>
<script>
import axios from 'axios';
import CityHeader from './component/Header';
import CitySearch from './component/Search';
import CityList from './component/List';
import CityAlphabet from './component/Alphabet';
export default {  
 name:'City',
 components:{
     CityHeader,
     CitySearch,
     CityList,
     CityAlphabet 
 },
 data(){
     return{
            cities:{},
            hotCities:[],
            letter:''
     }
 },
 methods:{
     getCityInfo(){
        axios.get('/mock/city.json')
        // then的第一参数是回调函数
        .then(this.handleGetCityInfoSucc)
     },
     handleGetCityInfoSucc(res){
         console.log(res);
         res=res.data;
        // 注意，这里边的ret是true
         if(res.ret && res.data){
             const data=res.data;
             this.cities=data.cities;
             this.hotCities=data.hotCities;
         }
     },
    // 这个是监听事件
     handleLetterChange(letter){
        this.letter=letter
        // console.log(letter);
        
     }

 },
//生命周期函数，一般用的是created创建前，mounted刷新后，一般建议用的是mounted
mounted(){
    this.getCityInfo()
}
}
</script>
<style lang='scss' scoped>

</style>
