---

title: Geolocation API 🗺
sidebar: auto

---

# Geolocation API 🗺

::: tip
The Geolocation API allows the user to provide their location to web applications if they so desire.
For privacy reasons, the user is asked for permission to report location information.
:::

## Examples

### Demo #1
> Geolocation basics

<API-Geolocation-Example1 />


::: details Code
```js
navigator.geolocation
  .getCurrentPosition((position) => {
    console.log(position)
  }, (error) => {
    console.log(error)
  })
```
:::
