<template>
  <BaseExample>
    <h3>Network Status:</h3>
    <div>
      <ul>
        <li v-for="(value, item) in networkManager" :key="item">
          {{ item }}:
          <b-badge variant="dark">{{ value }}</b-badge>
        </li>
      </ul>
    </div>
  </BaseExample>
</template>

<script>
import BaseExample from '../../BaseExample'

export default {
  name: 'NetworkExample1',
  components: {
    BaseExample,
  },
  data() {
    return {
      networkManager: {
        connectionType: null,
        connectionMode: null,
      },
    }
  },
  mounted() {
    const connection =
        navigator.connection || navigator.mozConnection || navigator.webkitConnection

    console.log( connection )

    this.networkManager.connectionType = connection.effectiveType
    this.networkManager.connectionMode = connection.type

    connection.addEventListener( 'change', this.updateConnectionStatus )
  },
  methods: {
    updateConnectionStatus( event ) {
      console.log( `Connection type changed from ${ this.networkManager.connectionType } to ${ event.currentTarget.effectiveType }` )
      this.networkManager.connectionType = event.currentTarget.effectiveType
      this.networkManager.connectionMode = event.currentTarget.type
    },
  },
}
</script>
