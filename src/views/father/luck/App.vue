<template>
  <div class="luck flex flex-aliCen flex-column">
    <div class="luck__title fcc">
      <Title bottom="42px" content="我要抽奖" />
    </div>
    <div class="luck__num rel">
      已有18445人参与抽奖
    </div>
    <div class="luck__container rel">
      <div class="luck__container--box abs"></div>
      <div class="luck__container--img abs">
        <van-image :src="doubleBottle" width="72" height="94"></van-image>
      </div>
      <div class="luck__box flex flex-aliCen flex-column">
        <LuckyGrid 
          ref="LuckDraw"
          width="245px"
          height="245px"
          :prizes="prizes"
          :buttons="buttons"
          :blocks="blocks"
          :default-config="defaultConfig"
          :default-style="defaultStyle"
          :active-style="activeStyle"
          @start="startCallBack"
          @end="endCallBack" />
        <div class="luck__box--text tc">你还有3次抽奖机会</div>
        <div class="luck__box--text tc">每个ID有1次中奖机会，每天可以抽三次</div>
      </div>
    </div>
  </div>
</template>

<script>
import { LuckyGrid } from 'vue-luck-draw'
import Title from '@/views/father/components/Title.vue'
export default {
  components: {
    LuckyGrid, Title
  },
  data () {
    return {
      luckyNum: 0,
      prizes: [],
      blocks: [
        { padding: '8px', background: '#ce2a2b', borderRadius: 10 }
      ],
      defaultConfig: {
        gutter: 5,
      },
      defaultStyle: {
        borderRadius: 10,
        fontSize: '10px',
        textAlign: 'center',
        fontColor: '#bb0524',
        background: '#ffe9c6',
        shadow: '0 4 1 #fea960'
      },
      activeStyle: {
        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
        shadow: ''
      },
    }
  },
  computed: {
    buttons () {
      return [{
        x: 1,
        y: 1,
        background: 'transparent',
        imgs: [
          { src: require('@/assets/start.png'), width: '100%', top: '0' }
        ]
      }]
    },
    doubleBottle () {
      return require('@/assets/double_bottle.png')
    }
  },
  mounted () {
    this.getPrizeList()
  },
  methods: {
    getPrizeList () {
      setTimeout(() => {
        const data = [
          { type: 1, name: '惊喜大礼包', img: require('@/assets/package.png') },
          { type: 1, name: '惊喜大礼包', img: require('@/assets/package.png') },
          { type: 1, name: '惊喜大礼包', img: require('@/assets/package.png') },
          { type: 0, name: '谢谢参与', img: require('@/assets/icon.png') },
          { type: 0, name: '谢谢参与', img: require('@/assets/icon.png') },
          { type: 1, name: '惊喜大礼包', img: require('@/assets/package.png') },
          { type: 0, name: '谢谢参与', img: require('@/assets/icon.png') },
          { type: 1, name: '惊喜大礼包', img: require('@/assets/package.png') }
        ]
        const prizes = []
        this.luckyNum = 3
        let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
        for (let i = 0; i < 8; i++) {
          let item = data[i]
          prizes.push({
            index: i, x: axis[i][0], y: axis[i][1],
            fonts: [{ text: item.name, type: item.type, top: '65%' }],
            imgs: [{ src: item.img, width: '50%', top: '8%' }]
          })
        }
        this.prizes = prizes
      }, 0)
    },
    startCallBack () {
      if (!this.luckyNum) return alert('还剩0次抽奖机会')
      this.$refs.LuckDraw.play()
      setTimeout(() => {
        this.$refs.LuckDraw.stop(Math.random() * 3 >> 0)
      }, 2000)
    },
    endCallBack (prize) {
      this.luckyNum--
      this.$router.push({ path: '/father/success' })
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(luck) {
  padding-top: 125px;
  @include e(container) {
    width: 278px;
    height: 345px;
    padding: 4px;
    border-radius: 8px;
    background: linear-gradient(0deg,#fcae61 0%,#fed79b 100%);
    @include m(box) {
      width: 250px;
      height: 15px;
      transform: skew(-45deg);
      background-color: #aa0000;
      top: -15px;
      left: 15px;
    }
    @include m(img) {
      right: -22px;
      z-index: 2;
      top: -65px;
    }
  }
  @include e(box) {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 16px 15px 0;
    background-color: #ff4b2b;
    box-shadow: inset 0px 0px 82px 0px rgba(174, 6, 11, 0.44), inset 0px 0px 11px 0px #ae060b;
    @include m(text) {
      font-size: 10px;
      color: #ffe9c6;
      margin-top: 16px;
      line-height: 12px;
      &:first-child {
        margin-top: 22px;
      }
    }
  }
  @include e(num) {
    padding: 6px 10px;
    font-size: 10px;
    color: #3e3e3e;
    border-radius: 3px;
    border: solid 1px #bb0524;
    margin-bottom: 46px;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 3px;
      border: solid 1px #bb0524;
      position: absolute;
      left: -4px;
      top: -4px;
    }
  }
}
</style>
