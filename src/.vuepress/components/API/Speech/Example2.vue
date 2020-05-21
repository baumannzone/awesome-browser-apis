<template>
  <BaseExample>
    <b-form @submit="demo">

      <b-form-group label="Text:" label-for="inputDemo2">
        <b-form-input id="inputDemo2" v-model="form.input" placeholder="Type something cool.." autocomplete="off"></b-form-input>
      </b-form-group>

      <b-form-group label="Pitch (Tone)" label-for="rangePitchDemo2">
        <b-form-input id="rangePitchDemo2" v-model="form.pitch" type="range" min="0" max="2" step="0.05">
        </b-form-input>
        <small>Value: {{form.pitch}}</small>
      </b-form-group>

      <!-- speed -->
      <b-form-group label="Rate (Speed)" label-for="rangeRateDemo2">
        <b-form-input id="rangeRateDemo2" v-model="form.rate" type="range" min="0.46" max="3.6" step="0.01">
        </b-form-input>
        <small>Value: {{form.rate}}</small>
      </b-form-group>

      <b-button type="submit" variant="primary" size="sm">Submit</b-button>
    </b-form>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'SpeechExample2',
    components: {
      BaseExample
    },
    data() {
      return {
        form: {
          input: 'Creo que ya lo sabes, pero mi perro se llama Rambo (a.k.a. #RambitoJS)',
          pitch: 1,
          rate: 1
        }
      }
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
