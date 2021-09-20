<template>
  <div class="flex flex-center ">
      <VisionBar/>
    <div class="row " v-if="store.state.dashboard">
      <BarChart/>
      <div>
      <PieChart/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent , inject} from 'vue';
import BarChart from "components/apexcharts/BarChart.vue";
import PieChart from "components/apexcharts/PieChart.vue";
import VisionBar from "components/VisionBar.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    BarChart,
    PieChart,
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
