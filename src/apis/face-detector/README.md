---

title: Shape Detection API ❇️
sidebar: auto

---

# Shape Detection API ❇️
> aka Face Detector API 😃

::: tip
This API provides access to accelerated shape detectors (e.g. human faces) for still images and/or live image feeds.
It is not a W3C Standard nor is it on the W3C Standards Track.
:::

## Examples

### Demo #1
> Face detector demo

Required: `chrome://flags/#enable-experimental-web-platform-features`

<ClientOnly>
  <API-FaceDetector-Example1 />
</ClientOnly>

---

<API-FaceDetector-Example1 />


::: details Code
```js
const faceDetector = new window.FaceDetector({maxDetectedFaces: 5, fastMode: false})

faceDetector.detect(image)
  .then(faces => {
    faces.forEach((face) => {
      // Do something awesome
    })
  })
  .catch((err) => {
    console.error(err.toString())
  })
```
:::
