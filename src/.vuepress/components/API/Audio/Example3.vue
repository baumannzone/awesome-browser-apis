<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo">White Noise</b-button>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'AudioExample3',
    components: {
      BaseExample
    },
    methods: {
      demo() {
        // Stereo
        const channels = 2

        const AudioContext = window.AudioContext || window.webkitAudioContext
        const audioCtx = new AudioContext()

        // Create an empty 2 seconds stereo buffer at the
        // sample rate of the AudioContext
        const frameCount = audioCtx.sampleRate * 2.0 // 88200

        const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)  // AudioBuffer

        // Fill the buffer with white noise;
        // Random values between -1.0 and 1.0
        let channel = 0
        for (channel; channel < channels; channel++) {
          // This gives us the actual array that contains the data
          const nowBuffering = myArrayBuffer.getChannelData(channel)
          for (let i = 0; i < frameCount; i++) {
            // Math.random() is in [0 => 1.0]
            // audio needs to be in [-1.0 => 1.0]
            nowBuffering[i] = Math.random() * 2 - 1
          }
        }

        // Get an AudioBufferSourceNode.
        // This is the AudioNode to use when we want to play an AudioBuffer
        const source = audioCtx.createBufferSource()
        // Set the buffer in the AudioBufferSourceNode
        source.buffer = myArrayBuffer
        // Connect the AudioBufferSourceNode to the
        // destination so we can hear the sound
        source.connect(audioCtx.destination)

        // start the source playing
        source.start()

        source.onended = () => {
          console.log('White noise finished')
        }
      }
    }
  }
</script>
