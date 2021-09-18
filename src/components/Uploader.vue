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
        then( response => {
          const lines = response.split('\n')
          const collumns = lines[0].split(',')
          this.store.state.filesCsv = lines
          const tableCollumns = []
          for (var i = 0; i < collumns.length; i++){
            if (collumns[i] ){
              if (i == 0){
                    tableCollumns.push(
                      {
                        name: collumns[i],
                        required: true,
                        label: collumns[i],
                        align: 'left',
                        field: row => row.name,
                        format: val => `${val}`,
                        sortable: true
                      }
                    )
                  }
                  else {
                    tableCollumns
                    .push({ name: collumns[i], label: collumns[i],
                            field: collumns[i], sortable: true })
                  }
              }
          }
          this.store.state.collumnsCsv = tableCollumns

          const tableRows = []
          for (var i=1; i < lines.length; i++) {
              let rowObject = new Object
              for (var j=0; j < lines[i].length; j++) {
                if (collumns[j] &&  lines[i]){
                  rowObject[collumns[j]] = lines[i].split(',')[j]
                  console.log(lines[i].split(','))
                }
              }
              if(Object.keys(rowObject).length === 0){
              }
              else{
                tableRows.push(rowObject)
              }
            }
          this.store.state.rowsCsv = tableRows  
        })
        }
      }
  }
}
</script>

<style>

</style>