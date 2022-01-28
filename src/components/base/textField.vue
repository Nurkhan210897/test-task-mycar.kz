<template>
  <input :type="type" name="" v-model="input" value=""  />
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    type: {
      type: String,
      default: () => "text",
    },
  },
  setup() {
    const input = ref("");
    return { input };
  },
};
</script>

<style></style>
