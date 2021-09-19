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
    return{
      store,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'yaxis',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
})
</script>
