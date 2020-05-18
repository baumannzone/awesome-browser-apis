<template>
  <BaseExample>
    <b-button variant="primary" size="sm" @click="demo"
      :disabled="geoIsLoading"
    >
      <b-spinner v-if="geoIsLoading" small></b-spinner>
      Get Position
    </b-button>
    <hr>
    <pre class="text-white" v-if="coords">{{ coords }}</pre>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  export default {
    name: 'GeolocationExample1',
    components: {
      BaseExample
    },
    data() {
      return {
        geoIsLoading: false,
        coords: null
      }
    },
    methods: {
      demo() {
        if ('geolocation' in navigator) {
          this.geoIsLoading = true
          navigator.geolocation
            .getCurrentPosition((position) => {
              this.geoIsLoading = false
              console.log(position)
              const latitude = position.coords.latitude
              const longitude = position.coords.longitude
              this.coords = {
                latitude,
                longitude
              }
            }, (error) => {
              this.geoIsLoading = false
              this.error = {
                code: error.code,
                msg: error.message
              }
              console.log(error)
            })
        } else {
          console.log('No Geo API 😤')
        }
      }
    }
  }
</script>
