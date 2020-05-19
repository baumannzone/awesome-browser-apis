<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Capture Image</b-button>
    <hr>
    <img v-if="imgSrc" :src="imgSrc" alt="img">
  </BaseExample>
</template>

<script>
import BaseExample from "../../BaseExample"

export default {
  name: 'ImageCaptureExample1',
  components: {
    BaseExample
  },
  data() {
    return {
      imgSrc: ''
    }
  },
  methods: {
    demo () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const track = stream.getVideoTracks()[0]
          const imageCapture = new ImageCapture(track)

          imageCapture.takePhoto()
            .then(blob => {
              this.imgSrc = window.URL.createObjectURL(blob)
              window.URL.revokeObjectURL(blob)
            })
        })
        .catch((err) => {
          this.imgSrc = ''
          console.log('Err: ' + err)
        })
    }
  }
}
</script>
