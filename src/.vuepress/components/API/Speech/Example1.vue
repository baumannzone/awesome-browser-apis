<template>
  <BaseExample>
    <b-form @submit="demo">

      <b-form-group label="Text:" label-for="inputDemo1">
        <b-form-input id="inputDemo1" v-model="form.input" placeholder="Type something.." autocomplete="off"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" size="sm">Submit</b-button>
    </b-form>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'SpeechExample1',
    components: {
      BaseExample
    },
    data() {
      return {
        form: {
          input: ''
        }
      }
    },
    methods: {
      demo (ev) {
        ev.preventDefault()
        const text = this.form.input
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)
      }
    }
  }
</script>
