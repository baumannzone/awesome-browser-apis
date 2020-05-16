<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Sound</b-button>
  </BaseExample>
</template>

<script>
import BaseExample from "../../BaseExample"

export default {
  name: 'AudioExample1',
  components: {
    BaseExample
  },
  methods: {
    demo () {
      const ac = new AudioContext()
      const oscillator = ac.createOscillator()
      oscillator.connect(ac.destination)

      const time = ac.currentTime
      oscillator.start(time)
      oscillator.stop(time + 1)

      oscillator.onended = () => {
        console.log('Stopped!')
      }
    }
  }
}
</script>
