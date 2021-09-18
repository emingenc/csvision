<template>
  <q-page class="flex flex-center q-pa-md">
    <div>
      <Table class="row"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Table from "components/Table.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Table,
  },
})
</script>
