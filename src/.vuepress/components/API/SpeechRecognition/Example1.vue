<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">Start</b-button>
    <p>
      <small v-if="isRecording">Recording...</small>
    </p>

    <b-form class="mt-4">
      <b-input-group>
        <b-form-input type="text" v-model="transcript" placeholder="Say something funny"></b-form-input>
        <b-input-group-append>
          <b-button variant="dark" @click="clearInput">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-form-text>Confidence: {{ confidence }}</b-form-text>
    </b-form>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'SpeechRecognitionExample1',
    components: {
      BaseExample
    },
    data() {
      return {
        transcript: '',
        confidence: '',
        isRecording: false
      }
    },
    methods: {
      demo (ev) {
        ev.preventDefault()

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const recognition = new SpeechRecognition()

        recognition.onresult = (event) => {
          this.transcript = event.results[0][0].transcript
          this.confidence = event.results[0][0].confidence
          console.log(event)
          console.log(event.results[0][0].transcript)
        }

        recognition.onstart = () => {
          this.isRecording = true
          console.log('Speech recognition service has started')
        }

        recognition.onend = () => {
          this.isRecording = false
          console.log('Speech recognition service has finished')
        }

        // Start recognition
        recognition.start()
      },
      clearInput () {
        this.transcript = ''
        this.confidence = ''
      }
    }
  }
</script>
