<template>
  <div id="app">
  <div>
    <!-- <VideoJSRecord /> -->
 </div>
 <div>
    <MobileRecord />
  </div>
  </div>
</template>

<script>
//import VideoJSRecord from './components/VideoJSRecord.vue'
import MobileRecord from './components/MobileRecord.vue'

export default {
  name: 'app',
  components: {
  //  VideoJSRecord,
    MobileRecord
  }
}
</script>

<style>
/* change player background color */
#myVideo {
  background-color: #95DDF5;
}
</style>