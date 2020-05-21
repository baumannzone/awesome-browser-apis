---

title: Vibration API ❗️
sidebar: auto

---

# Vibration API ❗️

::: tip
Most mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake.
The Vibration API offers Web apps the ability to access this hardware if it exists, and does nothing if the device doesn't support it.
:::

## Examples

### Demo #1
> Speech recognition example

<ClientOnly>
  <API-Vibration-Example1/>
</ClientOnly>

::: details Code
```js
if ('SpeechRecognition' in window) {
  // speech recognition API supported
} else {
  // speech recognition API not supported
}

const recognition = new SpeechRecognition()

recognition.onresult = (event) => {
  // What you said
  console.log(event.results[0][0].transcript)
}

// Start recognition
recognition.start()
```
:::

### Demo #2
> Speech recognition example

<ClientOnly>
  <API-SpeechRecognition-Example2/>
</ClientOnly>

::: details Code
```js
// Pages hosted on HTTPS do not need to ask repeatedly for permission, whereas HTTP hosted pages do
// Streaming results as they are received
// you can start to render results before the user has stopped talking

const recognition = new SpeechRecognition()

// Streaming "Realtime"
recognition.interimResults = true

// Max num of possible alternatives
recognition.maxAlternatives = 10

recognition.onresult = (event) => {
  // What you said
  console.log(event.results[0][0].transcript)
}

recognition.onstart = () => {
  isRecording = true
  console.log('Speech recognition service has started')
}

recognition.onend = () => {
  isRecording = false
  console.log('Speech recognition service has finished')
}

// ...

// Start recognition
recognition.start()
```
:::
