<template>
  <div class="q-pa-md">
    <Uploader/>  
    <q-table
    v-if="store.state.collumnsCsv" 
      title="Treats"
      dense
      :rows="store.state.rowsCsv"
      :row-key=" store.state.collumnsCsv[0].name"
    />
  </div>
</template>
<script>
import Uploader from "components/Uploader.vue";
import {  inject } from 'vue'



export default {
  components: {
    Uploader,
  },
  setup () {
    return {
      store : inject("csvStore"),
    }
  }
}
</script>