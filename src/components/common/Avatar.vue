<template>
  <figure class="figure" :style="{ width: `${size}px`, height: `${size}px` }">
    <img class="figure__img" :src="img" />
  </figure>
</template>

<script>
export default {
  props: {
    size: Number,
    style: Object,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
.figure {
  overflow: hidden;
  border-radius: 50%;
  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>