<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <BarChart/>
      <Table />
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject} from 'vue';
import Table from "components/Table.vue";
import BarChart from "components/apexcharts/BarChart.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Table,
    BarChart
  },
  setup(){
    const store = inject("csvStore");
    return{
      store,
    }
  }
})
</script>
