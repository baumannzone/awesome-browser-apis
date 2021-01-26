---

title: Web Speech API 🗣
sidebar: auto

---

# Speech Recognition
> aka Voice to Text API

::: tip
Speech recognition is the ability of a machine or program to identify words and phrases in spoken language and convert them to a machine-readable format. Introduced in 2012 by W3C.  
The HTML5 Speech Recognition API allows JavaScript to have access to a browser’s audio stream and to convert it to text.
:::

## Examples

### Demo #1
> Speech recognition example

<ClientOnly>
  <API-SpeechRecognition-Example1/>
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
