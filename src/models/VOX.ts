import { defineComponent } from 'vue'
import { VOXLoader, VOXMesh } from 'three/examples/jsm/loaders/VOXLoader.js'
import Model from './Model'

export default defineComponent({
  extends: Model,
  created() {
    const loader = new VOXLoader()
    this.$emit('before-load', loader)
    loader.load(this.src, (chunks) => {
        for ( let i = 0; i < chunks.length; i ++ ) {
            const chunk = chunks[ i ];
            // displayPalette( chunk.palette );
            const mesh = new VOXMesh( chunk );
            mesh.scale.setScalar( 0.0015 );
            this.onLoad(mesh)
            this.initObject3D(mesh)
        }
    //   this.onLoad(vox)
    //   this.initObject3D(vox)
    }, this.onProgress, this.onError)
  },
})
