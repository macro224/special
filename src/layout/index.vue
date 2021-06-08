<template>
  <div class="layout rel">
    <div class="layout__img abs">
      <van-image  width="72" height="61" :src="logoSrc"></van-image>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    logoSrc () {
      return require('@/assets/logo_text.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(layout) {
  overflow-y: auto;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url('../assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  @include e(img) {
    left: 12px;
    top: 20px;
  }
}
</style>
