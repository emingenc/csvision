<template>
  <q-file 
        accept="csv"
        :label-color="filesCsv?'':''"
        :icon-color="filesCsv?'':'white'"
        :bg-color="filesCsv?'':''"
        :rounded ="filesCsv?false:true"
        :outlined ="filesCsv?false:true"
        :style="filesCsv?'max-width:300px':'max-width:400px'"
        v-model="filesCsv"
        :dense ="filesCsv?true:false"
        clearable
        icon="home"
        label="  Upload csv"
        multiple
        :filter="checkFileType"
        @rejected="onRejected"
      >
      <template v-if="!filesCsv" v-slot:prepend>
          <q-icon name="upload" />
      </template>
  </q-file>
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
          this.store.state.fileName = val[0].name
          const lines = response.split('\n')
          const collumns = lines[0].split(',')
          const tableCollumns = []
          for (var i = 0; i < collumns.length; i++){
            if (collumns[i] ){
                tableCollumns.push(
                  { name: collumns[i], label: collumns[i],
                        field: collumns[i], sortable: true }
                )
              }
          }
          this.store.state.columnsCsv = tableCollumns
          this.store.state.visibleColumns = [...tableCollumns]
          this.store.state.visibleColumns = this.store.state.visibleColumns.map(e => e.name)
          this.store.state.xaxis = this.store.state.visibleColumns[0]
          this.store.state.filterColumnName = this.store.state.visibleColumns[0]
          this.store.state.yaxis = this.store.state.visibleColumns[this.store.state.visibleColumns.length-1]

          const tableRows = []
          for (var i=1; i < lines.length; i++) {
              let rowObject = new Object
              for (var j=0; j < lines[i].length; j++) {
                let key = collumns[j]
                let value = lines[i].split(',')[j]
                if (!isNaN(value)){
                  value = Number(value)
                }
                if (key ){
                  rowObject[key] = value
                }
              }
              if(Object.keys(rowObject).length === 0){
              }
              else{
                tableRows.push(rowObject)
              }
            }
          this.store.state.rowsCsv = tableRows 
          this.store.methods.Visiualise()
           
        })
        }
      }
  }
}
</script>

<style>

</style>