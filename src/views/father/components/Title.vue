<template>
  <div class="title rel">
    {{content}}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '标题'
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(title) {
  font-size: 28px;
	color: #bb0524;
  line-height: 28px;
  font-weight: bold;
  &::after {
    content: "";
    height: 6px;
    width: 100px;
    background: url('../../../assets/arc.png') no-repeat center center / 100% 100%;
    position: absolute;
    transform: translateX(-50%);
    bottom: -10px;
    left: 50%;
  }
}
</style>
