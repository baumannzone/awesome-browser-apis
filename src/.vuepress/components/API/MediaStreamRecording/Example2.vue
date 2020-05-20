<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="startStop" class="mr-2">
      <span v-if="recording">Stop</span>
      <span v-else>Start</span>
    </b-button>
    <br>
    <small v-if="recording">Recording...</small>
    <hr>
    <video v-if="videoSrc" controls :src="videoSrc" class="w-100"></video>
  </BaseExample>
</template>

<script>
import BaseExample from "../../BaseExample"

export default {
  name: 'MediaRecordingExample2',
  components: {
    BaseExample
  },
  data() {
    return {
      chunks: [],
      mediaRecorder: undefined,
      videoSrc: undefined,
      recording: false
    }
  },
  created() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream)

        this.mediaRecorder.ondataavailable = (e) => {
          this.chunks.push(e.data)
        }

        this.mediaRecorder.onstop = ({currentTarget}) => {
          const blob = new Blob(this.chunks, { 'type': currentTarget.mimeType })
          this.chunks = []
          this.videoSrc = window.URL.createObjectURL(blob)
          window.URL.revokeObjectURL(blob)
        }
      })
      .catch((err) => {
        console.log('Err: ' + err)
      })
  },
  methods: {
    startStop () {
      if(this.mediaRecorder.state === 'recording') {
        this.mediaRecorder.stop()
        this.recording = false
      }
      else {
        this.mediaRecorder.start()
        this.recording = true
      }
    }
  }
}
</script>
