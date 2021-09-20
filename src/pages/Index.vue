<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <Dashboard v-if="store.state.columnsCsv"/>
      <Table />
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject} from 'vue';
import Table from "components/Table.vue";
import Dashboard from "components/Dashboard.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Table,
    Dashboard
  },
  setup(){
    const store = inject("csvStore");
    return{
      store,
    }
  }
})
</script>
