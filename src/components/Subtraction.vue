<template>
  <div>
    <!--<h3>当前最新的count值为：{{count}}</h3>-->
    <h3>{{showNum}}</h3>
    <button @click="Sub">-1</button>
    <button @click="SubAsync">异步-1</button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  export default {
   data() {
     return {}
   },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['showNum'])
    },
    methods: {
      ...mapMutations(['sub']),
      Sub() {
        this.sub(3)
      },
      ...mapActions(['subAsync']),
      SubAsync() {
        this.subAsync(3)
      }
    }
  }
</script>

<style scoped>

</style>
