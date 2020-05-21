<template>
  <BaseExample>
    <b-form @submit="demo">

      <b-form-group label="Text:" label-for="inputDemo3">
        <b-form-input id="inputDemo3" v-model="form.input" placeholder="🦄 Type something awesome.." autocomplete="off"></b-form-input>
      </b-form-group>

      <b-form-group label="Voices:">
        <b-form-select v-model="selectedVoiceName" :options="voiceNames"></b-form-select>
      </b-form-group>

      <b-form-group label="Pitch (Tone)" label-for="rangePitchDemo3">
        <b-form-input id="rangePitchDemo3" v-model="form.pitch" type="range" min="0" max="2" step="0.05">
        </b-form-input>
        <small>Value: {{form.pitch}}</small>
      </b-form-group>

      <b-form-group label="Rate (Speed)" label-for="rangeRateDemo3">
        <b-form-input id="rangeRateDemo3" v-model="form.rate" type="range" min="0.46" max="3.6" step="0.01">
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
    name: 'SpeechExample3',
    components: {
      BaseExample
    },
    data() {
      return {
        voices: [],
        voiceNames: [],
        selectedVoiceName: 'Jorge',
        form: {
          input: 'Y además... ¿Sabías que tiene un canal de youtube? 🙀🤡🥳',
          pitch: 1,
          rate: 1
        }
      }
    },
    mounted () {
      // Check support for speech API
      if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = this.populateVoiceList
      } else {
        console.warn('Nope!')
      }
    },
    methods: {
      populateVoiceList () {
        this.voices = window.speechSynthesis.getVoices()
        console.table(this.voices)
        this.voiceNames = this.voices.map((v) => {
          return { value: v.name, text: `${v.name} (${v.lang})`, name: v.name, lang: v.lang }
        })
      },
      demo (ev) {
        ev.preventDefault()
        const text = this.form.input
        const synth = window.speechSynthesis
        const voice = this.voices.find(v => v.name === this.selectedVoiceName)
        const utterThis = new SpeechSynthesisUtterance(text)
        utterThis.voice = voice
        utterThis.pitch = this.form.pitch
        utterThis.rate = this.form.rate
        synth.speak(utterThis)
      }
    }
  }
</script>
