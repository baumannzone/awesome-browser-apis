<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="play">Play</b-button>
  </BaseExample>
</template>

<script>
import BaseExample from '../../BaseExample'

export default {
  name: 'AudioExample5',
  components: {
    BaseExample,
  },
  methods: {
    play() {
      let audioCtx = new AudioContext();

      class HarmonicSynth {
        constructor( partialAmplitudes ) {
          this.partials = partialAmplitudes
              .map( () => audioCtx.createOscillator() );
          this.partialGains = partialAmplitudes
              .map( () => audioCtx.createGain() );
          this.masterGain = audioCtx.createGain();

          partialAmplitudes.forEach( ( amp, index ) => {
            this.partialGains[ index ].gain.value = amp;
            this.partials[ index ].connect( this.partialGains[ index ] );
            this.partialGains[ index ].connect( this.masterGain );
          } );
          this.masterGain.gain.value = 0.3;

        }

        connect( dest ) {
          this.masterGain.connect( dest );
        }

        start( time = 0 ) {
          this.partials.forEach( o => o.start( time ) );
        }

        stop( time = 0 ) {
          this.partials.forEach( o => o.stop( time ) );
        }

        setFrequencyAtTime( frequency, time ) {
          this.partials.forEach( ( o, index ) => {
            o.frequency.setValueAtTime( frequency * ( index + 1 ), time );
          } );
        }

        exponentialRampToFrequencyAtTime( frequency, time ) {
          this.partials.forEach( ( o, index ) => {
            o.frequency.exponentialRampToValueAtTime( frequency * ( index + 1 ), time );
          } );
        }
      }


      const G4 = 440 * Math.pow( 2, -2 / 12 );
      const A4 = 440;
      const F4 = 440 * Math.pow( 2, -4 / 12 );
      const F3 = 440 * Math.pow( 2, -16 / 12 );
      const C4 = 440 * Math.pow( 2, -9 / 12 );

      let synth = new HarmonicSynth( [1, 0.1, 0.2, 0.5] );

      let t = audioCtx.currentTime;
      synth.setFrequencyAtTime( G4, t );
      synth.setFrequencyAtTime( G4, t + 0.95 );
      synth.exponentialRampToFrequencyAtTime( A4, t + 1 );
      synth.setFrequencyAtTime( A4, t + 1.95 );
      synth.exponentialRampToFrequencyAtTime( F4, t + 2 );
      synth.setFrequencyAtTime( F4, t + 2.95 );
      synth.exponentialRampToFrequencyAtTime( F3, t + 3 );
      synth.setFrequencyAtTime( F3, t + 3.95 );
      synth.exponentialRampToFrequencyAtTime( C4, t + 4 );

      synth.connect( audioCtx.destination );
      synth.start();
      synth.stop( audioCtx.currentTime + 6 );
    },
    demo() {

      // Reference note:

      const A4 = 440;

      // Octave jumps:

      const A5 = A4 * Math.pow( 2, 1 ); // Same as 440 * 2
      const A6 = A4 * Math.pow( 2, 2 ); // Same as 440 * 2 * 2

      const A3 = A4 * Math.pow( 2, -1 ); // Same as 440 / 2
      const A2 = A4 * Math.pow( 2, -2 ); // Same as 440 / 2 / 2

      // Single note jumps:

      const B4 = A4 * Math.pow( 2, 1 / 12 );
      const C5 = A4 * Math.pow( 2, 2 / 12 );

      const G4 = A4 * Math.pow( 2, -1 / 12 );
      const F4 = A4 * Math.pow( 2, -2 / 12 );

      let audioCtx = new AudioContext();

      let oscillator = audioCtx.createOscillator();

      oscillator.frequency.value = 440;
      setTimeout( () => oscillator.frequency.value *= Math.pow( 2, 1 / 12 ), 1000 );
      setTimeout( () => oscillator.frequency.value *= Math.pow( 2, 1 / 12 ), 2000 );

      oscillator.connect( audioCtx.destination );
      oscillator.start();
      oscillator.stop( audioCtx.currentTime + 3 );


    },
  },
}
</script>
