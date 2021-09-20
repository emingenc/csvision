<template>
  <div class="flex flex-center ">
      <VisionBar/>
    <div class="row " v-if="store.state.dashboard">
      <BarChart/>
      <div>

      <TreeMap/>
      <PieChart/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent , inject} from 'vue';
import BarChart from "components/apexcharts/BarChart.vue";
import PieChart from "components/apexcharts/PieChart.vue";
import TreeMap from "components/apexcharts/TreeMap.vue";
import VisionBar from "components/VisionBar.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    BarChart,
    PieChart,
    TreeMap,
    VisionBar
  },
  setup(){
    const store = inject("csvStore");
    return{
      store,
    }
  }
})
</script>
