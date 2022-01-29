<template>
  <input
    class="default-input"
    :type="type"
    :placeholder="placeholder"
    name=""
    @change="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    modelValue: String,
    type: {
      type: String,
      default: ()=> 'text'
    },
    placeholder: {
      type: String,
      default: ()=> 'Name'
    }
  },
};
</script>

<style lang="scss">
  .default-input{
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
</style>
