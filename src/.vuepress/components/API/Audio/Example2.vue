<template>
  <BaseExample>
    <b-form>
      <b-form-group label="Type:">
        <b-form-radio-group id="types" v-model="selected" :options="options" name="radio-options"></b-form-radio-group>
      </b-form-group>
      <b-form-group label="Frequency:">
        <b-form-input id="range-1" v-model="freq" type="range" min="200" max="2000" step="100"></b-form-input>
        <div class="">Freq:
          <b-badge variant="info">{{ freq }}</b-badge>
        </div>
      </b-form-group>
    </b-form>
    <b-button variant="primary" size="sm" @click="demo">Sound</b-button>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'AudioExample2',
    components: {
      BaseExample
    },
    data() {
      return {
        selected: 'sine',
        options: [
          {value: 'sine', text: 'sine'},
          {value: 'square', text: 'square'},
          {value: 'sawtooth', text: 'sawtooth'},
          {value: 'triangle', text: 'triangle'}
        ],
        freq: 400
      }
    },
    methods: {
      demo() {
        const ac = new AudioContext()
        const oscillator = ac.createOscillator()

        // Options
        oscillator.type = this.selected
        oscillator.frequency.value = this.freq

        // Connect
        oscillator.connect(ac.destination)

        const time = ac.currentTime
        oscillator.start(time)
        oscillator.stop(time + 1)
      }
    }
  }
</script>
