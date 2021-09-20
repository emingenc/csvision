<template>
  <q-page class="flex flex-center q-pa-md width">
    <div>
      <apexchart v-if="store.state.columnsCsv" width="700" type="donut" 
      :options="options" :series="this.store.state.yaxisData"></apexchart>
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject,computed} from 'vue';


export default defineComponent({
  
  setup(){
    const store = inject("csvStore");
    
    const options = computed(() => {
      return{
        labels: store.state.xaxisData,
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
  }})
   
    return{
      store,
      options: options,
    }
  },
})
</script>
