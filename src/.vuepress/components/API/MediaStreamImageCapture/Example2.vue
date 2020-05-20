<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Capture image</b-button>
    <hr>
    <video autoplay ref="player" width="100%"></video>
    <hr>
    <img v-if="imgSrc" :src="imgSrc" alt="img" width="100%">
  </BaseExample>
</template>

<script>
import BaseExample from "../../BaseExample"

export default {
  name: 'MediaStreamImageCaptureExample2',
  components: {
    BaseExample
  },
  data() {
    return {
      imgSrc: '',
      stream: undefined,
    }
  },
  created() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Save stream for use it later
        this.stream = stream
        this.$refs.player.srcObject = stream
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    demo () {
      const track = this.stream.getVideoTracks()[0]
      const imageCapture = new ImageCapture(track)

      // takePhoto
      imageCapture.takePhoto()
        .then(blob => {
          this.imgSrc = window.URL.createObjectURL(blob)
          window.URL.revokeObjectURL(blob)
        })
        .catch((err) => {
          this.imgSrc = ''
          console.log(err)
        })
    }
  }
}
</script>
