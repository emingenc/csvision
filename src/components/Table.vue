<template>
  <div class="q-pa-md ">
    <div class="flex flex-center justify-between">
    <Uploader /> 
    <div v-if="store.state.columnsCsv"  class="text-primary">
    change view:
    <q-btn
          color="primary"
          flat
          :label="this.store.state.grid ? 'grid' : 'table'"
          no-caps
          @click="this.store.state.grid=!this.store.state.grid"
        /> 
    </div>

    <q-btn
          v-if="store.state.columnsCsv" 
          color="primary"
          flat
          icon-right="archive"
          class=''
          label="Export"
          no-caps
          @click="exportTable"
        />
    </div>
    <q-table
      ref="csvtable"
      v-if="store.state.columnsCsv" 
      :dense="$q.screen.lt.md"
      :grid="this.store.state.grid"
      :card-class="this.store.state.grid ? 'bg-primary text-white':''"
      :title="store.state.fileName.replace('.csv','')"
      :columns="store.state.columnsCsv"
      :rows="store.state.rowsCsv"
      :row-key=" store.state.columnsCsv[0].name"
      :filter="filter"
      :filter-method="filterMethod"
      v-model:pagination="store.state.initialPagination"
      :visible-columns="store.state.visibleColumns"
    >
   
    <template 
    v-if="store.state.columnsCsv" 
     v-slot:top-right>

        <q-select
        
          v-model="store.state.visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="'Visible '+$q.lang.table.columns"
          emit-value
          map-options
          :options="store.state.columnsCsv"
          option-value="name"
          options-cover
          style="min-width: 150px"
          class="q-pr-xl"
        />

        <q-select
        class='q-pl-xl q-pt-sm'
        label-color="primary"
        filled
        v-model="column"
        use-input
        input-debounce="0"
        label="Filter for"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="menu"
      >
      <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-primary">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Filter">
          <template v-slot:append>
            <q-icon name="filter_list" />
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
    const store = inject("csvStore")
    const $q = useQuasar()
    let stringOptions = store.state.visibleColumns?[...store.state.visibleColumns]:[]
    let options = ref(stringOptions)
    let column = ref('')
    return {
      store ,
      options,
      column,
      filter: ref(''),
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
      }
  },
  methods:{
    
    filterMethod (rows, terms, cols){
      // rows contain the entire data
      // keyword contains whatever you have as filter
      try {
        let result = rows.filter(row=>{
        if (terms.includes('>') || terms.includes('<')){
          
           return eval(`${row[this.column]}${terms}`)
         
        }
        else {
          return String(row[this.column]).toLowerCase().includes(terms)
        }
       
      })
      this.store.state.filteredRows = result

      return result
      } catch (error) {
        this.store.state.filteredRows =rows
      
        return rows
      }
      
      },
    exportTable () {
        // naive encoding to csv format
        let filteredRows = this.$refs.csvtable.filteredSortedRows
        let filteredColumns = Object.keys(filteredRows[0])
        filteredColumns = this.$refs.csvtable.columns.filter(e => this.store.state.visibleColumns.includes(e.name) )
        const content = [filteredColumns.map(col => wrapCsvValue(col.label))].concat(
          filteredRows.map(row => filteredColumns.map(col => wrapCsvValue(
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
  },
  
}
</script>