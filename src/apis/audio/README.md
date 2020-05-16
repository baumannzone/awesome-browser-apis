---

title: Audio API
sidebar: auto

---

# Audio API 🔊
> AKA ...

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
