<template>
  <div class="fcc" :style="{ marginBottom: bottom }">
    <van-image :src="qrcode" width="103" height="103"></van-image>
  </div>
</template>

<script>
export default {
  props: {
    bottom: {
      type: String,
      default: '35px'
    }
  },
  computed: {
    qrcode () {
      return require('@/assets/qrcode.png')
    }
  }
}
</script>
