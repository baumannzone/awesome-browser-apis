---

title: Intersection Observer API 👀 
sidebar: auto

---

# Intersection Observer API 👀
> or How **NETFLIX** does it

::: tip
Intersection Observer API allows us to detect whether an element is visible within another element.  
Most common usecase is to detect whether an element is inside the viewport.
:::

## Examples

### Demo #1
> Report when the target element is fully visible inside the box

<API-IntersectionObserver-Example1></API-IntersectionObserver-Example1>

::: details Code
```js
const rootElement = document.querySelector('.root')
const targetElement = document.querySelector('.target')

const callback = (entries) => {
  const [target] = entries
  if (target.isIntersecting) {
    // Is visible
  } else {
    // Is not visible
  }
}

const observer = new IntersectionObserver(callback, { root: rootElement })
observer.observe(targetElement)
```
:::
