<template>
  <q-page class="flex flex-center q-pa-md width">
    <div>
      <apexchart v-if="store.state.columnsCsv" width="1300" type="bar" 
      :options="options" :series="series"></apexchart>
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject, computed} from 'vue';


export default defineComponent({
  
  setup(){
    const store = inject("csvStore");
    return{
      store,
      options : computed(() => {return {
        chart: {
          id: 'barchart'
        },
        xaxis: {
          categories: store.state.xaxisData
        }
      }}),
      series : computed(()=>{return [{
        name: store.state.yaxis,
        data: store.state.yaxisData
      }]})

    }
  },
})
</script>
