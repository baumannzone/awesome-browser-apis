---

title: Network Information API 📡
sidebar: auto

---

# Network Information API 📡

::: tip 📗
The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.). This can be used to select high definition content or low definition content based on the user's connection.
:::

::: danger 🛑
This is an experimental technology. Check the [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API#Browser_compatibility) table carefully before using this in production.
:::

## Examples

### Demo #1
> Network demo with listeners

<API-Network-Example1 />

::: details Code
```js
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
let connectionType = connection.effectiveType

function updateConnectionStatus() {
  console.log(`Connection type changed from ${connectionType} to ${connection.effectiveType}`)
  connectionType = connection.effectiveType
}

connection.addEventListener('change', updateConnectionStatus)
```
:::
