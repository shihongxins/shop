<template>
  <div class="banner">
    <img
      class="banner__img"
      src="https://shihongxins.github.io/data-mock/shop/imgs/banner.jpg"
      alt="banner__img"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style lang="scss" scoped>
.banner {
  margin-top: .12rem;
  height: 0;
  padding-bottom: 25.4%;
  overflow: hidden;
  &__img {
    // 1528 * 388
    width: 100%;
  }
}
</style>
