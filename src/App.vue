<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import home from '@/views/Home.vue'
import { ref } from "vue";

export default {
  components:{
    home
  },

  setup(_, props) {

  },
};
</script>

<style lang="scss">
  @import './assets/styles/main.scss';
</style>
