<template>
    <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="4"
        map-type-id="terrain"
        style="width: 100%; height: 332px"
    >
    </GMapMap>
  </template>
  
  <script >
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: 51.093048, lng: 6.842120},
      }
    }
  }
  </script>