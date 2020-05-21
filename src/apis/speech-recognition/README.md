---

title: Speech API 🗣
sidebar: auto

---

# Web Speech API
> aka Text to Voice API

::: tip
The Web Speech API provides two distinct areas of functionality: Speech recognition and Speech synthesis which open up interesting new possibilities for accessibility.
Speech Synthesis or text to voice allow us convert text to voice and playing it out of a device's speaker in multiple languages
:::

## Examples

### Demo #1
> Report when the target element is fully visible inside the box

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
