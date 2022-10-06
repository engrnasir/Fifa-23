<template>
    <GMapMap
        :center="center"
        :zoom="7"     
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
        center: {lat: 38.99093136536435, lng: -1.8468565086554327},
      }
    }
  }
  </script>