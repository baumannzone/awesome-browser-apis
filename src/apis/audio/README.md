---

title: Audio API 🔊🎶
sidebar: auto

---

# Audio API 🔊
> aka Web Audio API

::: tip 📗
The Web Audio API provides a powerful system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations and more...
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
oscillator.connect(ac.destination)

// Duration (1s)
const time = ac.currentTime
oscillator.start(time)
oscillator.stop(time + 1)
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
oscillator.connect(ac.destination)

const time = ac.currentTime
oscillator.start(time)
oscillator.stop(time + 1)
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

const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)  // AudioBuffer

// Stereo
const channels = 2

// Fill the buffer with white noise;
// Random values between -1.0 and 1.0
let channel = 0
for (channel; channel < channels; channel++) {
  // This gives us the actual array that contains the data
  const nowBuffering = myArrayBuffer.getChannelData(channel)
  for (let i = 0; i < frameCount; i++) {
    // Audio needs to be in a range from "-1.0" to "1.0"
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
```
:::

### Demo #4 (Extra Ball) 🔥
> Plays audio with options: volume & panner

**Live Demo**: [https://codepen.io/baumann/pen/OJyBaPK](https://codepen.io/baumann/pen/OJyBaPK)
