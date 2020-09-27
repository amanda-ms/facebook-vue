<template>
  <div class="modal-global">
    <div class="modal-global__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-global {
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    width: 32%;
    height: 77%;
    border-radius: 7px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  }
}
</style>
