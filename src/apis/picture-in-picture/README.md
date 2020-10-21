---

title: Picture In Picture 🖼
sidebar: auto

---

# Picture In Picture 🖼

> aka PIP

::: tip
The Picture-in-Picture API allows websites to create a floating video window on top of other windows, allowing users to continue watching videos while interacting with other applications on their device.
:::

## Examples

### Demo #1
> Picture in picture basic

<ClientOnly>
  <API-PictureInPicture-Example1 />
</ClientOnly>

::: details Code
```html
<video id="video" width="100%" controls>
  <source src="video.mp4" type="video/mp4">
</video>

<button id="button">Activate PIP</button>
```

```js
// Find html elements
const video = document.getElementById('video')
const button = document.getElementById('button')

// Create event listener click and exec requestPictureInPicture method
button.addEventListener('click', () => {
  video.requestPictureInPicture()
})
```
:::
