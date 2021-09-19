<template>
  <q-page class="flex flex-center q-pa-md">
      <VisionBar/>
    <div>
      <BarChart/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject} from 'vue';
import BarChart from "components/apexcharts/BarChart.vue";
import VisionBar from "components/VisionBar.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    BarChart,
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
