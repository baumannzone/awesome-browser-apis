---

title: Audio API 🔊🎶
sidebar: auto

---

# Audio API 🔊

> aka Web Audio API

::: tip 📗 The Web Audio API provides a powerful system for controlling audio on the Web, allowing developers to choose
audio sources, add effects to audio, create audio visualizations and more...
:::

---

## Examples

### Demo #1

> Simple sound from scratch

<API-Audio-Example1 />

::: details Code

```js
const ac = new AudioContext()
const oscillator = ac.createOscillator()

// Connect
oscillator.connect( ac.destination )

// Duration (1s)
const time = ac.currentTime
oscillator.start( time )
oscillator.stop( time + 1 )
```

:::

### Demo #2

> Simple sound with options

<API-Audio-Example2 />

::: details Code

```js {4}
const ac = new AudioContext()
const oscillator = ac.createOscillator()

// Options
oscillator.type = this.selected
oscillator.frequency.value = this.freq

// Connect
oscillator.connect( ac.destination )

const time = ac.currentTime
oscillator.start( time )
oscillator.stop( time + 1 )
```

:::

### Demo #3

> White noise 🤪

<API-Audio-Example3 />


::: details Code

```js
const audioCtx = new AudioContext()

// Create an empty 2 seconds stereo buffer at the
// sample rate of the AudioContext
const frameCount = audioCtx.sampleRate * 2.0 // 88200

const myArrayBuffer = audioCtx.createBuffer( channels, frameCount, audioCtx.sampleRate )  // AudioBuffer

// Stereo
const channels = 2

// Fill the buffer with white noise;
// Random values between -1.0 and 1.0
let channel = 0
for ( channel; channel < channels; channel++ ) {
  // This gives us the actual array that contains the data
  const nowBuffering = myArrayBuffer.getChannelData( channel )
  for ( let i = 0; i < frameCount; i++ ) {
    // Audio needs to be in a range from "-1.0" to "1.0"
    nowBuffering[ i ] = Math.random() * 2 - 1
  }
}

// Get an AudioBufferSourceNode.
// This is the AudioNode to use when we want to play an AudioBuffer
const source = audioCtx.createBufferSource()
// Set the buffer in the AudioBufferSourceNode
source.buffer = myArrayBuffer
// Connect the AudioBufferSourceNode to the
// destination so we can hear the sound
source.connect( audioCtx.destination )

// start the source playing
source.start()
```

:::

### Demo #4 (Extra Ball)

> Plays audio with options: volume & panner

**Live Demo**: [https://codepen.io/baumann/pen/OJyBaPK](https://codepen.io/baumann/pen/OJyBaPK)

### Hardcore Mode #5

> Effects

<API-Audio-Example5 />

:::details code

```javascript
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

```
:::
