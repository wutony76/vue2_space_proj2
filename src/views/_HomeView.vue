<template>
  <div class="home">
      <div class="content" ref="addImage">
          <div ref="capture" class="image-content">
              <p>html2canvas 能够实现在前端直接对页面进行截屏。</p>
              <p>其实现思路是html2canvas脚本将页面元素渲染为canvas，通过读取DOM并将不同的样式应用到这些元素上实现。</p>
              <p>它不需要服务端的操作，只在前端即可完成。</p>
          </div>     
            <div @click="generatorImage" class="img-btn">生成图片</div>
      </div>
      <br/>
      <br/>
      <br/>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import html2canvas from 'html2canvas';
import UAParser from 'ua-parser-js'

let ua = new UAParser(navigator.userAgent)
console.log('navigator.userAgent >', navigator.userAgent)
console.log('parser >', ua.getDevice().type)
console.log('parser >', ua.getDevice())

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      uaInfo: state => state.global.uaInfo,
    })
  },
  mounted () {
    // console.log('ttttt mounted', this.$device())
    console.log('mxDevice > ', this.uaInfo.device)
  },
  methods: {
    generatorImage () {
      console.log('handleChange...')
      // html2canvas(document.body).then(function (canvas) {
      //   console.log('canvas >>', canvas)
      //   document.body.appendChild(canvas);
      // });

      html2canvas(document.body).then(canvas => {
      // html2canvas(this.$refs.capture).then(canvas => {
        console.log('canvas >>', canvas)
        this.$refs.addImage.append(canvas);
        let link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.setAttribute('download', 'web截圖.png');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
      })

    }
  }
}
</script>
