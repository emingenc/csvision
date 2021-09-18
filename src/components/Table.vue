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
      :filter="filter"
    >
    <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    <template v-slot:body-cell="props">
        <q-td :props="props">
          <q-badge color="blue" :label="props.value" />
        </q-td>
    </template>
    </q-table>

  </div>
</template>
<script>
import Uploader from "components/Uploader.vue";
import {ref, inject } from 'vue'

export default {
  components: {
    Uploader,
  },
  setup () {
    return {
      store : inject("csvStore"),
      filter: ref(''),
    }
  }
}
</script>