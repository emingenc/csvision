<template>
  <div class="q-pa-md ">
    <div class="flex justify-between">
    <Uploader /> 
    <div class="text-primary">
    change view:
    <q-btn
          color="primary"
          flat
          :label="grid ? 'grid' : 'table'"
          no-caps
          @click="grid=!grid"
        /> 
    </div>

    <q-btn
          color="primary"
          flat
          icon-right="archive"
          class='absolute-top-right'
          label="Export"
          no-caps
          @click="exportTable"
        />
    </div>
    <q-table
      v-if="store.state.collumnsCsv" 
      :grid="grid"
      :card-class="grid ? 'bg-primary text-white':''"
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
import { exportFile, useQuasar } from 'quasar'
import Uploader from "components/Uploader.vue";
import {ref, inject } from 'vue'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}
export default {
  components: {
    Uploader,
  },
  setup () {
    const $q = useQuasar()
    return {
      store : inject("csvStore"),
      filter: ref(''),
      grid: ref(false),
      
      }
  },
  methods:{
    exportTable () {
        // naive encoding to csv format
        const content = [this.store.state.collumnsCsv.map(col => wrapCsvValue(col.label))].concat(
          this.store.state.rowsCsv.map(row => this.store.state.collumnsCsv.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          this.store.state.fileName,
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
  }
}
</script>