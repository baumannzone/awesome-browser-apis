<template>
  <BaseExample>

<!--    <div class="mb-3">-->
<!--      <b-form-checkbox-->
<!--        id="checkbox-1"-->
<!--        v-model="showControls"-->
<!--        name="checkbox-1"-->
<!--        :value="true"-->
<!--        :unchecked-value="false"-->
<!--      >-->
<!--        Show audio controls-->
<!--      </b-form-checkbox>-->

<!--      <div class="my-3">-->
<!--        <audio src="../../../public/audio/dover-the-hitter.mp3" :controls="showControls" class="w-100"/>-->
<!--      </div>-->
<!--    </div>-->

<!--    <hr>-->

    <div>
      <b-form>
        <b-form-group
          id="fieldset-1"
          :description="`Current value: ${volume}`"
          label="VOL"
          label-for="range-vol"
        >
          <b-form-input id="range-vol" v-model="volume" type="range" min="0" max="2" step="0.01"/>
        </b-form-group>

        <b-form-group
          id="fieldset-2"
          :description="`Current value: ${panner}`"
          label="PAN"
          label-for="range-panner"
        >
          <b-form-input id="range-panner" v-model="panner" type="range" min="-1" max="1" step="0.01"/>
        </b-form-group>
      </b-form>
      <b-button variant="primary" size="sm" @click="demo">Play</b-button>

      <audio src="../../../public/audio/dover-the-hitter.mp3"/>
    </div>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  const audioElement = document.querySelector('audio')
  const AudioContext = window.AudioContext || window.webkitAudioContext

  let audioCtx
  let track

  export default {
    name: 'AudioExample4',
    components: {
      BaseExample
    },
    data() {
      return {
        showControls: false,
        volume: 1,
        panner: 0
      }
    },
    methods: {
      demo() {
        console.log('<<<<<<<<<<<<<audioElement>>>>>>>>>>>>>')
        console.log(audioElement)
        audioCtx = new AudioContext()
        track = audioCtx.createMediaElementSource(audioElement)

        // check if context is in suspended state (autoplay policy)
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }

        audioElement.play();

        // // Volume
        // const gainNode = audioCtx.createGain()
        // gainNode.gain.value = this.volume
        //
        // // Panner
        // const pannerOptions = {pan: 0}
        // const panner = new StereoPannerNode(audioCtx, pannerOptions)
        // panner.pan.value = this.panner

        // Connect
        track.connect(audioCtx.destination)
      }
    }
  }
</script>








