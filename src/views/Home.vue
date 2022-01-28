<template>
  <div class="container">
    <div class="home">
      <div class="col-5">
        <add-car/>
      </div>
      <div class="col-7">
        <car-list />
      </div>
    </div>
  </div>
</template>

<script>
import carList from "@/components/home/car-list.vue";
import AddCar from '@/components/home/add-car.vue';

export default {
  components: {
    carList,
    AddCar,
  },
};
</script>

<style lang="scss">
  .home{
    display: flex;
  }
</style>
