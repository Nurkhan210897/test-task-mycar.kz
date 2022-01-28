<template>
  <input :type="type" name="" value="" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => "text",
    },
  },
};
</script>

<style></style>
