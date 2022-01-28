<template>
  <div class="list">
    <car-card v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script>
import carCard from "./car-card.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: { carCard },

  setup() {
    const store = useStore();

    let setCars = ()=>{
      store.commit('setCars')
    }

    onMounted(setCars);

    return {
      cars: computed(() => store.getters.getCars),
    };
  },
};
</script>

<style lang="scss">
.list {
  width: 100%;
}
</style>
