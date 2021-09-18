<template>
  <div class="q-pa-md">
    <Uploader/>  
    <q-table
    v-if="store.state.collumnsCsv" 
    style="max-width:1000px"
      :title="store.state.fileName.replace('.csv','')"
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