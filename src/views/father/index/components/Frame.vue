<template>
  <div class="indexFrame rel" :style="{ marginBottom: bottom }">
    <div class="indexFrame__title abs">
      <Title content="致敬父爱" />
    </div>
    <div class="indexFrame__box fcc">
      <van-image width="104" height="74" :src="camera"></van-image>
    </div>
    <p class="indexFrame__text">上传父亲合影</p>
    <p class="indexFrame__text acvite">为他赢取好礼</p>
    <div class="indexFrame__img abs">
      <van-image width="80" height="122" :src="bottle"></van-image>
    </div>
  </div>
</template>

<script>
import Title from '@/views/father/components/Title.vue'
export default {
  props: {
    bottom: {
      type: String,
      default: '56px'
    }
  },
  components: {
    Title
  },
  computed: {
    camera () {
      return require('@/assets/camera.png')
    },
    bottle () {
      return require('@/assets/bottle_s.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(indexFrame) {
  width: 285px;
	height: 354px;
  padding: 24px 29px 0;
  background: url('../../../../assets/frame.png') no-repeat center center / 100% 100%;
  @include e(title) {
    transform: translateX(-50%);
    top: -25px;
    left: 50%;
  }
  @include e(box) {
    width: 228px;
    height: 246px;
    background-color: #f3f3f3;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.04);
  }
  @include e(text) {
    font-size: 14px;
    color: #1a1a1a;
    margin-top: 22px;
    line-height: 14px;
    margin-left: 58px;
    font-weight: normal;
    font-family: Alibaba-PuHuiTi-R;
    &.acvite {
      margin-top: 12px;
      padding-left: 28px;
      position: relative;
      &::after {
        content: "";
        width: 20px;
        height: 1px;
        background-color: #5e5e5e;
        transform: translateY(-50%);
        position: absolute;
        left: 0;
        top: 50%;
      }
    }
  }
  @include e(img) {
    bottom: 4px;
    right: 12px;
  }
}
</style>
