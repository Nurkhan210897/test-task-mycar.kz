<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeModal"],

  setup(_, { emit }) {
    const closeModal = () => {
      emit("closeModal");
    };

    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    position: absolute;
    background-color: #fff;
    padding: 15px;
    max-width: 575px;
    &-close {
      position: absolute;
      font-size: 36px;
      right: -40px;
      top: -32px;
      cursor: pointer;
    }
  }
}
</style>
