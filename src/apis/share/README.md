---

title: Share API 
sidebar: auto

---

# Web Share API
> aka Share API

::: tip
The `Navigator.share()` method invokes the native sharing mechanism of the device as part of the Web Share API.
If the Web Share API is unsupported, then this method will be `undefined`.
:::

## Examples

### Demo #1
> Report when the target element is fully visible inside the box

<ClientOnly>
  <API-Share-Example1/>
</ClientOnly>

::: details Code
```js
const data = {
  title: 'Awesome Browser API\'s by @Baumannzone',
  text: '🔴 Join me and watch @baumannzone on #YoutubeLive. Awesome Browser API\'s #YoMeQuedoEnCasaJS',
  url: 'https://www.youtube.com/watch?v=5O5ppW9DcNE'
}

navigator.share(data)
  .then(() => {
    this.message = 'Successful share'
    console.log('Share 👌')
  })
  .catch((error) => {
    this.message = error
    console.log('Error sharing:', error)
  })
observer.observe(targetElement)
```
:::
