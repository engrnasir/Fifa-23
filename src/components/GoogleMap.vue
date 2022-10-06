<template>
    <GMapMap
        :center="center"
        :zoom="4"     
        map-type-id="terrain"
        style="width: 100%; height: 332px"
    >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
    </GMapMap>
  </template>
  
  <script >
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: 38.99093136536435, lng: -1.8468565086554327},
        markers: [
        {
          position: {
            lat: 38.99093136536435, lng: -1.8468565086554327
          },
        }
    ]
      }
    }
  }
  </script>