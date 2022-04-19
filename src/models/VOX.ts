import { defineComponent } from 'vue'
import { VOXLoader, VOXMesh } from 'three/examples/jsm/loaders/VOXLoader.js'
import Model from './Model'
import VoxelLoader from 'three-voxel-loader'

export default defineComponent({
  extends: Model,
  created() {
    const loader = new VoxelLoader()
    this.$emit('before-load', loader)
    loader.loadFile(this.src, (vox) => {
      this.onLoad(vox)
      this.initObject3D(vox)
    }, this.onProgress, this.onError)
  },
})
