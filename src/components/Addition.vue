<template>
  <div>
    <!--<h3>当前最新的count值为：{{this.$store.state.count}}</h3>-->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="Add">+1</button>
    <button @click="AsyncAdd">异步+1</button>
  </div>
</template>

<script>
  export default {
   data() {
     return {}
   },
    methods: {
     Add() {
       this.$store.commit('add',5)
     },
      AsyncAdd() {
        this.$store.dispatch('addAsync',5)
      }
    }
  }
</script>

<style scoped>

</style>
