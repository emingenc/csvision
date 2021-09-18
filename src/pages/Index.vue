<template>
  <q-page class="flex flex-center q-pa-md">
    {{store.state.rowsCsv}}
    <div>
      <Table />
    </div>
  </q-page>
</template>

<script>
import { defineComponent , inject} from 'vue';
import Table from "components/Table.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Table,
  },
  setup(){
    const store = inject("csvStore");
    return{
      store,
    }
  }
})
</script>
