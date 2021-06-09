<template>
  <div class="success">
    <div class="fcc">
      <Title content="领取奖品" bottom="38px" />
    </div>
    <div class="success__title">
      恭喜您中奖成功
    </div>
    <div class="success__box flex flex-aliCen flex-column">
      <van-image class="success__box--img" :src="package" width="93" height="85"></van-image>
      <div class="success__box--text">恭喜您中奖成功！</div>
    </div>
    <div class="success__img">
      <van-image :src="qrcode" width="72" height="72"></van-image>
    </div>
    <div class="success__text tc">扫描二维码</div>
    <div class="success__text tc">添加小助理, 领取奖品</div>
  </div>
</template>

<script>
import Title from '@/views/father/components/Title.vue'
export default {
  components: {
    Title
  },
  computed: {
    package () {
      return require('@/assets/package.png')
    },
    qrcode () {
      return require('@/assets/qrcode.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(success) {
  padding-top: 125px;
  @include e(title) {
    width: 282px;
    height: 105px;
    font-size: 24px;
    color: #ffffff;
    line-height: 24px;
    margin-left: 46px;
    padding-top: 48px;
    text-align: center;
    background: url('../../../assets/title_bg.png') no-repeat center center / 100% 100%;
  }
  @include e(box) {
    width: 244px;
    height: 160px;
    background-color: #ffffff;
    box-shadow: 0px 3px 13px 1px 
      rgba(0, 0, 0, 0.1);
    border-radius: 0 0 15px 15px;
    margin-left: 62px;
    margin-top: -20px;
    margin-bottom: 22px;
    @include m(img) {
      margin-top: 15px;
    }
    @include m(text) {
      font-size: 12px;
      line-height: 12px;
      color: #bb0524;
      margin-top: 15px;
    }
  }
  @include e(img) {
    width: 72px;
    height: 72px;
    margin: 0 auto;
  }
  @include e(text) {
    font-size: 10px;
    line-height: 12px;
    color: #d22628;
    margin-top: 12px;
  }
}
</style>
