<template>
  <q-page class="flex flex-center">
    <uploader/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Uploader from "components/Uploader.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Uploader,
  },
})
</script>
