<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Search devices</b-button>
    <hr>
    <div v-if="name">
      Device name: <b-badge> {{ name }} </b-badge>
    </div>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'BatteryExample1',
    components: {
      BaseExample
    },
    data() {
      return {
        name: '',
        err: ''
      }
    },
    methods: {
      demo() {
        // Clear
        this.name = ''
        this.err = ''

        // Request
        navigator.bluetooth.requestDevice({acceptAllDevices: true})
          .then((device) => {
            this.name = device.name
            console.log(device)
          })
          .catch((err) => {
            this.err = err
            console.log(err)
          })
      }
    }
  }
</script>
