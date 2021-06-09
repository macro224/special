<template>
  <div class="textBox fcc fcc-column rel">
    <p class="textBox__txt">每日抽奖3次</p>
    <p class="textBox__txt">每转发1次</p>
    <p class="textBox__txt">获得1次抽奖机会</p>
    <div class="textBox__img abs">
      <van-image class="textBox__img--i" :src="bottle" width="32" height="80"></van-image>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bottle () {
      return require('@/assets/bottle.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(textBox) {
  width: 146px;
	height: 106px;
  margin: 0 auto;
  background: url('../../../../assets/textBox.png') no-repeat center center / 100% 100%;
  @include e(txt) {
    font-size: 12px;
    color: #bb0524;
    line-height: 12px;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @include e(img) {
    right: -10px;
    top: -30px;
    @include m(i) {
      transform: rotate(-30deg);
    }
  }
}
</style>
