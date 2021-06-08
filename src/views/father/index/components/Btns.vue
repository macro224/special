<template>
  <div class="indexBtns fca fca-aliCen">
    <div class="indexBtns__item fcc" v-for="(item, index) in list" :key="index" @click="handleClick(item.type)">
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        text: '上传照片',
        type: 'upload'
      }, {
        text: '现在就拍',
        type: 'photograph'
      }]
    }
  },
  computed: {
    boxSrc () {
      return require('@/assets/box.png')
    }
  },
  methods: {
    handleClick (type) {
      console.log(type);
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(indexBtns) {
  @include e(item) {
    width: 82px;
	  height: 34px;
    font-size: 14px;
    color: #ffffff;
    background: url('../../../../assets/box.png') no-repeat center center / 100% 100%;
  }
}
</style>
