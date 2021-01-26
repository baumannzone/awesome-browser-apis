---

title: Web Speech API 🗣 2
sidebar: auto

---

# Speech Synthesis 🗣
> aka Text to Voice API

::: tip
The Web Speech API provides two distinct areas of functionality: Speech recognition and Speech synthesis which open up interesting new possibilities for accessibility.
Speech Synthesis or text to voice allow us convert text to voice and playing it out of a device's speaker in multiple languages
:::

## Examples

### Demo #1
> Basic text to voice

<ClientOnly>
  <API-Speech-Example1/>
</ClientOnly>

::: details Code
> One-line:
```js
window.speechSynthesis.speak(new SpeechSynthesisUtterance('Estoy viendo a Jorge Baumann (@baumannzone) en directo.'))
```


> Multi-line:
```js
const text = 'Estoy viendo a Jorge Baumann (@baumannzone) en directo.'
const synth = window.speechSynthesis
const utterThis = new SpeechSynthesisUtterance(text)
synth.speak(utterThis)
```
:::


### Demo #2
> Text to voice with options

<ClientOnly>
  <API-Speech-Example2/>
</ClientOnly>


::: details Code
```js
const text = this.form.input
const synth = window.speechSynthesis
const utterThis = new SpeechSynthesisUtterance(text)
// Options
utterThis.pitch = this.form.pitch
utterThis.rate = this.form.rate
// Speak
synth.speak(utterThis)
```
:::


### Demo #3
> Text to voice with options and voices

<ClientOnly>
  <API-Speech-Example3/>
</ClientOnly>


::: details Code
```js
// Check support for speech API
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  // Populate voices
  speechSynthesis.onvoiceschanged = window.speechSynthesis.getVoices()
}
```

```js
// getVoices
speechSynthesis.onvoiceschanged = () => {
  const text = 'Hola, soy Jorge Baumann, @baumannzone en Instagram'
  const synth = window.speechSynthesis
  const voices = synth.getVoices()
  const utterThis = new SpeechSynthesisUtterance(text)
  // Options
  utterThis.voice = voices.find(v => v.name === 'Jorge')
  utterThis.pitch = 1.5
  utterThis.rate = 2
  synth.speak(utterThis)
}
```
:::
