<template>
  <div class="list">
    <car-card
      v-for="(car, index) in cars"
      :key="car.id"
      :car="car"
      :carIndex="index"
      @showEditModal="showEditModal"
    />
    <car-edit-modal v-if="modalData" @closeModal="closeModal">
      <text-field type="text" :value="modalData.brand" v-model="modalData.brand" />
      <text-field type="text" :value="modalData.model" v-model="modalData.model" />
      <text-field type="text" :value="modalData.numberPlate" v-model="modalData.numberPlate" />
      <button @click="saveEditedData" class="btn --submit">Save data</button>
    </car-edit-modal>
  </div>
</template>

<script>
import carCard from "./car-card.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import carEditModal from "@/components/modals/car-edit.vue";
import TextField from "../base/textField.vue";

export default {
  components: { carCard, carEditModal, TextField },
  emits: ["showEditModal", "closeModal"],
  setup() {
    const store = useStore();
    let modalData = ref(null);

    const setCars = () => {
      store.commit("setCars");
    };

    const saveEditedData = () => {
      store.commit("saveEditedData", modalData.value);
      modalData.value = null
    };

    const showEditModal = (e) => (modalData.value = e);

    const closeModal = () => modalData.value = null

    onMounted(setCars);

    return {
      cars: computed(() => store.getters.getCars),
      modalData,
      showEditModal,
      saveEditedData,
      closeModal
    };
  },
};
</script>

<style lang="scss">
.list {
  width: 100%;
}
</style>
