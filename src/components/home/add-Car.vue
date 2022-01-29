<template>
  <form action="" class="form" @submit.prevent="addCar">
    <text-field type="text" v-model="carData.brand" placeholder="brand" />
    <text-field type="text" v-model="carData.model" placeholder="model" />
    <text-field type="text" v-model="carData.numberPlate" placeholder="number-plate" />
    <select class="default-select" v-model="carData.status">
      <option v-for="(option, index) in allStatus" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
    <button type="submit" class="btn --submit">Add car</button>
  </form>
</template>

<script>
import textField from "../base/textField.vue";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  components: { textField },
  setup(props) {
    const store = useStore();
    const allStatus = ["booked", "in rent", "in the parking"];
    const carData = ref({
      id: Math.random(),
      brand: "",
      model: "",
      numberPlate: "",
      status: "in the parking"
    });

    const addCar = () => {
      store.commit("addCar", carData);
    };

    return {
      carData,
      addCar,
      allStatus
    };
  },
};
</script>

<style lang="scss">
  .form{
    .btn{
      margin-top: 2rem;
      width: 100%;
    }
  }
</style>
