<template>
  <div class="flex flex-center ">
    <div class="row q-pa-lg" v-if="store.state.dashboard">
      <BarChart v-if="store.state.visibleCharts.includes('barChart')"/>
      
      <div class="row">
         <TreeMap v-if="store.state.visibleCharts.includes('treeMap')"/>
          <PieChart v-if="store.state.visibleCharts.includes('pieChart')"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent , inject} from 'vue';
import BarChart from "components/apexcharts/BarChart.vue";
import PieChart from "components/apexcharts/PieChart.vue";
import TreeMap from "components/apexcharts/TreeMap.vue";


export default defineComponent({
  name: 'PageIndex',
  components: {
   BarChart,
    PieChart,
    TreeMap
  },
  setup(){
    const store = inject("csvStore");
    return{
      store,
    }
  }
})
</script>
