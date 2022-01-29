<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal{
    position: absolute;
    background-color: #fff;
    padding: 15px;
    max-width: 575px;
  }
}
</style>
