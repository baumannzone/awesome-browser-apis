---

title: Battery API 🔋
sidebar: auto

---

# Battery API 🔋
> aka Battery Status API

::: tip 📗
The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change.  
This can be used to save changes before the battery runs out in order to prevent data loss.
:::

::: danger 🛑
This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. 
:::

---

## Examples

### Demo #1
> Simple demo

<API-Battery-Example1 />

::: details Code
```js
navigator.getBattery()
  .then((battery) => {
    console.log('Battery Manager:')
    console.log(battery)
  })
```
:::
