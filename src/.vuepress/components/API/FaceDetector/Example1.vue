<template>
  <BaseExample>
    <div class="mb-2">
      <b-button variant="primary" size="sm" @click="demo">Check Faces</b-button>
    </div>
    <div id="wrap" class="wrap" ref="wrap">
      <!-- https://unsplash.com/photos/T6zu4jFhVwg -->
      <img src="./faces.png" alt="img" ref="image">
    </div>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'FaceDetectorExample1',
    components: {
      BaseExample
    },
    methods: {
      demo() {
        if (typeof window.FaceDetector === 'undefined') {
          console.log('No FaceDetector!')
          return
        }
        const image = this.$refs.image

        const faceDetector = new window.FaceDetector({maxDetectedFaces: 5, fastMode: false})

        faceDetector.detect(image)
          .then(faces => {
            console.log('<<<faces>>>')
            console.log(faces)
            // faces.forEach((face) => {
            //   // Face box
            //   const {width, height, top, left} = face.boundingBox
            //   const faceBox = document.createElement('div')
            //   faceBox.classList.add('face')
            //   faceBox.style.cssText = `
            //   width: ${width}px;
            //   height: ${height}px;
            //   top: ${top}px;
            //   left: ${left}px;
            // `
            //   this.$refs.wrap.appendChild(faceBox)
            //   console.log(faceBox)
            // })
          })
          .catch((err) => {
            console.error(err.toString())
          })
      }
    }
  }
</script>

<style lang="stylus">

  .wrap
    position relative

  .face
    position absolute
    z-index 1
    border 1px solid white

</style>
