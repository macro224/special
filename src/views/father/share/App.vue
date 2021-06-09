<template>
  <div class="share">
    <div class="fcc">
      <Title bottom="43px" content="转发有礼" />
    </div>

    <ImgBox />

    <ShareBox />

    <Footer />
  </div>
</template>

<script>
import ImgBox from './components/ImgBox.vue'
import Footer from './components/Footer.vue'
import ShareBox from './components/ShareBox.vue'
import Title from '@/views/father/components/Title.vue'
export default {
  components: {
    Title, ImgBox, ShareBox, Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(share) {
  padding-top: 125px;
}
</style>
