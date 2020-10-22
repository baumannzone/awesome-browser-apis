<template>
  <BaseExample>
    <video ref="video" width="100%" controls>
      <source src="../../../../../assets/default-video.mp4" type="video/mp4">
    </video>

    <b-button variant="outline-primary" size="sm" @click="handlePictureInPicture">Activate PIP</b-button>
  </BaseExample>
</template>

<script>
import BaseExample from '../../BaseExample.vue'

export default {
  name: 'PictureInPictureExample1',
  components: {
    BaseExample
  },
  methods: {
    handlePictureInPicture() {
      const video = this.$refs.video
      video.requestPictureInPicture()
    }
  },
}
</script>
