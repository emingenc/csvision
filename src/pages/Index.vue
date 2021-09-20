<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <Uploader v-if="!(store.state.columnsCsv)" />
      <Dashboard v-if="store.state.columnsCsv"/>
      <Table v-if="store.state.columnsCsv" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject} from 'vue';
import Uploader from "components/Uploader.vue";
import Table from "components/Table.vue";
import Dashboard from "components/Dashboard.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Uploader,
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
