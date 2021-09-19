<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <apexchart v-if="store.state.columnsCsv" width="500" type="bar" 
      :options="options" :series="series"></apexchart>
    </div>
    <q-btn @click="store.getters.getRowData('Total Cases')">

    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent , inject} from 'vue';


export default defineComponent({
  
  setup(){
    const store = inject("csvStore");
    const xaxis = store.getters.getRowData(store.state.xaxis)
    const yaxis = store.getters.getRowData(store.state.yaxis)
    const yaxisSelected = store.state.yaxis
    const xaxisSelected = store.state.xaxis
    const options = () => {return {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: xaxis
        }
      }
  }
    const series =()=>{return [{
        name: yaxisSelected,
        data: yaxis
      }]}
    return{
      store,
      yaxisSelected,
      xaxisSelected,
      options: options(),
      series: series()
    }
  },
  watch:{
    yaxisSelected(){
      this.options = this.options()
      this.series = this.series()
    }
    
  },
})
</script>
