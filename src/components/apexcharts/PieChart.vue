<template>
  <q-page class="flex flex-center q-pa-md width">
    <div>
      <apexchart v-if="store.state.columnsCsv" width="400" type="donut" 
      :options="options" :series="series"></apexchart>
    </div>
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
    const options = () => {
      return{
        labels: xaxis,
        plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
      }
  }}
    const series =()=>{return yaxis}
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
