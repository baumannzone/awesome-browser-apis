<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo1">Vibrate</b-button>
    <hr>
    <b-button variant="outline-primary" size="sm" @click="demo2">Vibrate</b-button>
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
      demo1 () {
        if ('vibrate' in navigator) {
          navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
          navigator.vibrate([200])
          console.log('Brr')
        }
      },
      demo2 () {
        if ('vibrate' in navigator) {
          navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
          navigator.vibrate([2000, 200, 2000])
          console.log('Brr')
        }
      },
    }
  }
</script>
