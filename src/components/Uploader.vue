<template>
  <q-file 
        accept="csv"
        style="max-width:300px;"
        v-model="filesCsv"
        rounded
        clearable
        outlined
        label="Filtered (csv only)"
        multiple
        :filter="checkFileType"
        @rejected="onRejected"
      />
</template>

<script>

import { useQuasar } from 'quasar'
import { ref,inject } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    const store = inject("csvStore");

    return {
      store,
      filesMaxSize: ref(null),
      filesCsv: ref(null),


      checkFileSize (files) {
        return files.filter(file => file.size < 2048)
      },

      checkFileType (files) {
        return files.filter(file => file.type === 'text/csv')
      },

      onRejected (rejectedEntries) {
        // Notify plugin needs to be installed
        // https://quasar.dev/quasar-plugins/notify#Installation
        $q.notify({
          type: 'negative',
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`
        })
      }
    }
  },
  watch:{
      filesCsv(val){
        if (val) {
        val[0]
        .text().
        then(response => this.store.state.filesCsv = response)
        }
      }
  }
}
</script>

<style>

</style>