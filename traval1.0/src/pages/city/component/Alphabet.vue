<template>
  <ul class="list">
      <li class="item" v-for="item of letters" 
                       :key='item'
                       :ref='item'
                       @click='handleLetterClick'
                       @touchstart='handleTouchStart'
                       @touchmove='handleTouchMove'
                       @touchend='handleTouchEnd'
                       >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
      cities:Object
  },
  computed:{
     letters(){
       const letters=[];
       for(let i in this.cities){
           letters.push(i)
       }
       return letters
      //返回的结果大概就是['A','B','C']  
  }
  },
  data(){
    return {
      touchStatus:false,
      timer:null
    }
  },
  methods:{
    //点击到某个字母的时候，会有一个事件对象，当你点击字母的时候，就会打印出相对应的字母
     handleLetterClick(e){
      //  console.log(e.target.innerText);
      // 向外触发事件，并且是携带数据给到父级组件里边
       this.$emit('change',e.target.innerText)
     },
     handleTouchStart(){
          this.touchStatus=true
     },
     handleTouchMove(e){
           if(this.touchStatus){
            //做一个节流
             if(this.timer){
               clearTimeout(this.timer)
             }
             this.timer=setTimeout(()=>{
                const startY=this.$refs['A'][0].offsetTop
               console.log(startY);
               const touchY=e.touches[0].clientY-79
               const index=Math.floor((touchY-startY))/20
               if(index>=0&&index<this.letters.length){
               this.$emit('change',this.letters[index])
                 } 
             },16)     
           }
     },
     handleTouchEnd(){
         this.touchStatus=false
     },
     
  }
  }
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
.list{
    // 这里的定位是让A条到右边
    position: absolute;
    top: 1.43rem;
    right:0;
    bottom:0;
    width: .4rem;
    // 这个样式是让字母垂直居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item{
        text-align: center;
        line-height: .4rem;
        color: $bgColor;
    }

}

</style>
