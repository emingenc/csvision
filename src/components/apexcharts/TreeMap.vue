<template>
  <q-page class="flex flex-center q-pa-md width">
    <div>
      <apexchart v-if="store.state.columnsCsv" width="700" type="treemap" 
      :options="options" :series="series"></apexchart>
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject,computed} from 'vue';


export default defineComponent({
  
  setup(){
    const store = inject("csvStore");
    const options =  {
        legend: {
              show: false
            },
        chart: {
          height: 1200,
          type: 'treemap'
        },
        title: {
          text: 'Basic Treemap'
        }
      }
    const series =computed(()=>{return [{
      data: store.state.xaxisData.map((e,i)=>{
        return {x:e , y:store.state.yaxisData[i]} }
        )
        }]})
      
    return{
      store,
      options:options,
      series:series
    
    }
  },
})
</script>
