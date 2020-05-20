---

title: MediaStream Image Capture API 🏙 
sidebar: auto

---

# MediaStream Image Capture API 🏙
> aka Image Capture API

::: tip
The ImageCapture interface of the MediaStream Image Capture API provides methods to enable the capture of images or photos from a camera.
:::

## Examples

### Demo #1
> Simple image capture

<ClientOnly>
  <API-MediaStreamImageCapture-Example1/>
</ClientOnly>


::: details Code
```js
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new ImageCapture(track)
    
      imageCapture.takePhoto()
        .then(blob => {
          // A Blob object represents a file-like object of immutable, raw data
          // Can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
          // Blobs can represent data that isn't necessarily in a JavaScript-native format.
          
          // Source image:
          // window.URL.createObjectURL(blob)
        })
    })
    .catch((err) => {
      // Handle error
    })
```
:::

### Demo #2
> Image capture with live preview

<ClientOnly>
  <API-MediaStreamImageCapture-Example2/>
</ClientOnly>

::: details Code
```js
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    // Show video in realtime
    videoPlayer.srcObject = stream
  })
```
:::
