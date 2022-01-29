<template>
  <div class="list">
    <car-card
      v-for="(car, index) in cars"
      :key="car.id"
      :car="car"
      :carIndex="index"
      @showModal="showModal"
    />
    <car-edit-modal v-if="modalData">
      <text-field type="text" :value="modalData.brand"/>
      <text-field type="text" :value="modalData.model"/>
      <text-field type="text" :value="modalData.numberPlate"/>
      <button @click="saveEditedData" class="btn --submit">Save data</button>
    </car-edit-modal>
  </div>
</template>

<script>
import carCard from "./car-card.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import carEditModal from "@/components/modals/car-edit.vue";
import TextField from '../base/textField.vue';
export default {
  components: { carCard, carEditModal, TextField },
  emits: ["showModal"],
  setup() {
    const store = useStore();
    let modalData = ref(null);

    const setCars = () => {
      store.commit("setCars");
    };

    const saveEditedData = () => {
      store.commit("saveEditedData", modalData);
    };

    const showModal = (e) => modalData.value = e;

    onMounted(setCars);

    return {
      cars: computed(() => store.getters.getCars),
      modalData,
      showModal,
      saveEditedData
    };
  },
};
</script>

<style lang="scss">
.list {
  width: 100%;
}
</style>
