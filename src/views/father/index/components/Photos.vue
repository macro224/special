<template>
  <div class="loading">
    <div class="fcc fcc-column">
      <van-image width="322" height="402" :src="src" />
      <p class="loading__text tc">我们之间的点点滴滴......</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    src () {
      return require('@/assets/zongzhaopian.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(loading) {
  width: 100vw;
  height: 100vh;
  padding-top: 122px;
  position: fixed;
  left: 0;
  top: 0;
  @include e(text) {
    font-size: 14px;
    color: #464646;
    margin-top: 50px;
    font-weight: normal;
    letter-spacing: 1px;
  }
}
</style>
