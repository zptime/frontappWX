<template>
  <div>
    <head-top :head="head"></head-top>
    <div class="contentBox" v-cloak>
      <div class="home">
        <h1>{{ msg }}</h1>
        <h2>????</h2>
        <h2>?????</h2>
        <h2>Essential Links</h2>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import HeadTop from '@/components/Head.vue'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        head:{
          icon: 'return',
          title: '????',
          more: false
        },
      }
    },
    components: {
      HeadTop,
    },
  }
</script>

<style scoped>

</style>
