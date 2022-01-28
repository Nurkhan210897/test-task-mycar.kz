<template>
  <form action="" @submit.prevent="addCar">
    <text-field
      type="text"
      v-model="carData.brand"
    />
    <text-field type="text" v-model="carData.model" />
    <text-field type="text" v-model="carData.numberPlate" />
    <select name="" id="">
      <option value="" v-for="(option, index) in carData.status" :key="index">
        {{ option }}
      </option>
    </select>
    <button type="submit">AddCar</button>
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

    const carData = ref({
      brand: "",
      model: "",
      numberPlate: "",
      status: ["booked", "in rent", "in the parking"],
    });

    let addCar = () => {
      carData.id = Math.random();
      store.commit("addCar", carData);
    };

    return {
      carData,
      addCar,
    };
  },
};
</script>

<style></style>
