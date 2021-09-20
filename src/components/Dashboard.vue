<template>
  <div class="flex flex-center ">
    <div class="row " v-if="store.state.dashboard">
      <!-- <BarChart/> -->
      <div>
      <PieChart/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent , inject} from 'vue';
//import BarChart from "components/apexcharts/BarChart.vue";
import PieChart from "components/apexcharts/PieChart.vue";


export default defineComponent({
  name: 'PageIndex',
  components: {
   // BarChart,
    PieChart,
  },
  setup(){
    const store = inject("csvStore");
    return{
      store,
    }
  }
})
</script>
