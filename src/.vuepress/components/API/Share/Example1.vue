<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Share 🎖</b-button>
    <hr>
    <p v-if="text">{{ text }}</p>
  </BaseExample>
</template>

<script>
import BaseExample from "../../BaseExample"

export default {
  name: 'ShareExample1',
  components: {
    BaseExample
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    demo () {
      this.text = ''
      if (navigator.share) {
        const data = {
          title: 'Awesome Browser API\'s by @Baumannzone',
          text: '🔴 Join me and watch @baumannzone on #YoutubeLive. Awesome Browser API\'s #YoMeQuedoEnCasaJS',
          url: 'https://www.youtube.com/watch?v=5O5ppW9DcNE'
        }

        navigator.share(data)
          .then(() => {
            this.text = 'Successful share'
            console.log('Share 👌')
          })
          .catch((error) => {
            this.text = error
            console.log('Error sharing:', error)
          })
      } else {
        this.text = 'Navigator.share not supported'
      }
    }
  }
}
</script>
