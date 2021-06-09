<template>
  <div class="shareBox">
    <div class="shareBox__text tc">
      邀请好友为<span class="shareBox__text--p">爱</span>助力
    </div>
    <div class="shareBox__btn shareBox__btn--up fcc">转发朋友</div>
    <div class="shareBox__btn shareBox__btn--down fcc">转发朋友圈</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
@include b(shareBox) {
  margin-bottom: 88px;
  @include e(text) {
    font-size: 24px;
    color: #3e3e3e;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 26px;
    letter-spacing: 2px;
    @include m(p) {
      font-size: 30px;
      color: #bb0524;
    }
  }
  @include e(btn) {
    margin: 0 auto;
    font-size: 12px;
    color: #ffffff;
    border-radius: 3px;
    background-color: #bb0524;
    @include m(up) {
      width: 76px;
      height: 23px;
      margin-bottom: 14px;
    }
    @include m(down) {
      width: 92px;
	    height: 23px;
    }
  }
}

</style>
