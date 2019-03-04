<template>
   <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-Alphabet></city-Alphabet>
   </div>
</template>
<script>
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
 }
}
</script>
<style lang='scss' scoped>

</style>
