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


<API-Audio-Example1 />
  
::: details Code
```js
const ac = new AudioContext()
const oscillator = ac.createOscillator()

// Connect
oscillator.connect(ac.destination)
const time = ac.currentTime

// Duration (1s)
oscillator.start(time)
oscillator.stop(time + 1)
```
:::


### Demo 2
