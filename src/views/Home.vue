<template>
  <div class="container">
    <div class="home">
      <div class="col-5"></div>
      <div class="col-7">
        <car-list />
      </div>
    </div>
  </div>
</template>

<script>
import carList from "@/components/home/car-list.vue";

export default {
  components: {
    carList,
  },
};
</script>

<style lang="scss">
  .home{
    display: flex;
  }
</style>
