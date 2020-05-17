<template>
  <BaseExample>
    <h3>Battery Status:</h3>
    <div>
      <ul>
        <li v-for="(value, item) in batteryManager" :key="item">
          {{ item }}:
          <b-badge variant="dark"> {{ value}}</b-badge>
        </li>
      </ul>
    </div>
  </BaseExample>
</template>

<script>
  import BaseExample from "../../BaseExample"

  function onChargingchange({currentTarget: battery}, bm) {
    bm.charging = battery.charging
    console.log(`Battery charging? ${battery.charging ? 'Yes' : 'No'}`)
  }

  function onLevelchange({currentTarget: battery}, bm) {
    bm.level = battery.level * 100
    console.log(`Battery Level ${battery.level} %`)
  }

  export default {
    name: 'BatteryExample1',
    components: {
      BaseExample
    },
    data() {
      return {
        batteryManager: {
          level: null,
          charging: null,
          chargingTime: null,
          dischargingTime: null
        }
      }
    },
    mounted() {
      navigator.getBattery()
        .then((battery) => {
          console.log('Battery Manager:')
          console.log(battery)

          this.batteryManager.level = battery.level * 100
          this.batteryManager.charging = battery.charging
          this.batteryManager.chargingTime = battery.chargingTime
          this.batteryManager.dischargingTime = battery.dischargingTime

          battery.addEventListener('chargingchange', ({currentTarget: battery}) => {
            this.batteryManager.charging = battery.charging
            console.log(`Battery charging? ${battery.charging ? 'Yes' : 'No'}`)
          })

          battery.addEventListener('levelchange', ({currentTarget: battery}) => {
            this.batteryManager.level = battery.level * 100
            console.log(`Battery Level ${battery.level * 100 } %`)
          })
        })
    }
  }
</script>
