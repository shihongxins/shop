<template>
  <div class="wrapper">
    <HomeHeader />
    <HomeBanner />
    <HomeIcons />
    <div class="gap"></div>
    <HomeNearby />
  </div>
  <Docker />
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeBanner from './components/Banner.vue'
import HomeIcons from './components/Icons.vue'
import HomeNearby from './components/Nearby.vue'
import Docker from '../../components/Docker.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeNearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  overflow-y: auto;
  .gap {
    margin: 0 -0.18rem;
    height: .1rem;
    background: $content-bgcolor;
  }
}
</style>
