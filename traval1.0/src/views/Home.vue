<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
/* @表示的是src目录 */
// import home from "@/pages/home/home.vue";

export default {
  name: "home",
  components: {
      home:'home'
  }
};
</script>
