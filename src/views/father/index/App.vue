<template>
  <div>
    <Photos v-if="showPhotos" />
    <div class="indexBox" v-else>
      <Frame />
      <Btns />
    </div>
  </div>
</template>

<script>
import Btns from './components/Btns.vue'
import Frame from './components/Frame.vue'
import Photos from './components/Photos.vue'
export default {
  components: {
    Photos, Frame, Btns
  },
  data () {
    return {
      showPhotos: false
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(indexBox) {
  width: 285px;
  margin: 0 auto;
  padding-top: 150px;
}
</style>
