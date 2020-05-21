<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Start</b-button>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'VibrationExample1',
    components: {
      BaseExample
    },
    methods: {
      demo (ev) {
        ev.preventDefault()
        const text = this.form.input
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(text)
        utterThis.pitch = this.form.pitch
        utterThis.rate = this.form.rate
        synth.speak(utterThis)
      }
    }
  }
</script>
