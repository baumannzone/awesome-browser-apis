<template>
  <BaseExample>
    <h3 v-if="text">{{text}}</h3>
    <div ref="root" class="root">
      <p class="my-5 text-center lead text-muted">Scroll down.. 👇</p>
      <p class="my-5 text-center lead text-muted">Scroll down.. 👇👇</p>

      <!-- The ball -->
      <div class="d-flex justify-content-center">
        <div ref="target" class="target"></div>
      </div>

      <p class="my-5 text-center lead text-muted">Scroll up.. 👆</p>
      <p class="my-5 text-center lead text-muted">Scroll up.. 👆👆</p>
    </div>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'AudioExample1',
    components: {
      BaseExample
    },
    data() {
      return {
        text: ''
      }
    },
    mounted() {
      const rootElement = this.$refs.root
      const targetElement = this.$refs.target

      const callback = (entries) => {
        const [target] = entries

        if (target.isIntersecting) {
          this.text = 'NOW YOU SEE ME 👀'
          console.log('NOW YOU SEE ME 👀')
        } else {
          this.text = 'NOW YOU DON\'T 🙈'
          console.log('NOW YOU DON\'T 🙈')
        }
      }

      const observer = new IntersectionObserver(callback, { root: rootElement })
      observer.observe(targetElement)
    }
  }
</script>

<style lang="stylus">
  .root
    border 5px solid #42b983
    height: 320px
    overflow-y: auto

  .target
    width: 64px
    height: 64px
    border-radius: 50%
    background-color: #42b983
    margin: 300px 0
    border 5px solid #359268

</style>
