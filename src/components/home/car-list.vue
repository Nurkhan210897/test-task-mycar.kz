<template>
  <div class="list">
    <car-card v-for="car in cars" :key="car.id" :car="car"/>
  </div>
</template>

<script>
import carCard from "./car-card.vue";
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { carCard },

  setup(){
   const store = useStore()

   return {
    cars: computed(() => store.state.cars.cars),
   }
  },
  
};
</script>

<style lang="scss">
  .list{
    width: 100%;
  }
</style>
