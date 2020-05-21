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
/**
* The vibrate API is only available once the user has started interacting with your page
* (e.g, by tapping or dragging on the screen).
* It cannot be used before a user interaction
* this is to prevent web pages (particularly embedded advertisements!)
* from attempting to scare the user by making their phone vibrate.
*/
if ('vibrate' in navigator) {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
  navigator.vibrate(400)
}
// Nope. You Can’t Detect A Vibrator™
```
:::
