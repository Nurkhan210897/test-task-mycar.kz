<template>
  <form action="">
    <text-field type="text" v-model="carData.brand" />
    <text-field type="text" v-model="carData.model" />
    <text-field type="text" v-model="carData.numberPlate" />
    <select name="" id="">
      <option value="" v-for="(option, index) in carData.status" :key="index">
        {{ option }}
      </option>
    </select>
    <button type="submit" @click.prevent="addCar"></button>
  </form>
</template>

<script>
import textField from "../base/textField.vue";
import {ref} from 'vue'
export default {
  components: { textField },
  setup(props) {
    const carData = ref({
      brand: "",
      model: "",
      numberPlate: "",
      status: ["booked", "in rent", "in the parking"],
    });

    return{
      carData
    }
  },
};
</script>

<style></style>
