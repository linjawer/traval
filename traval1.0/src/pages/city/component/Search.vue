<template>
   <div class="search">
       <input class="search-input" type="text" placeholder="输入城市名或者拼音">
   </div>
</template>

<script>
export default {
   name:'CitySearch'
}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
.search{
    height:.72rem;
    background-color: $bgColor;
    padding: 0.1rem;
    .search-input{
        width: 100%;
        height: .62rem;
        text-align: center;
        border-radius: .06rem;
        line-height: .62rem;
        color: #666;
        padding: 0 .1rem;
        box-sizing: border-box;
    }
}
</style>