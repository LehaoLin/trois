import { defineComponent } from 'vue'
import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader.js'
import Model from './Model'

export default defineComponent({
  extends: Model,
  created() {
    const loader = new VOXLoader()
    this.$emit('before-load', loader)
    loader.load(this.src, (vox) => {
      this.onLoad(vox)
      this.initObject3D(vox)
    }, this.onProgress, this.onError)
  },
})
