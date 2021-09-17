<template>
  <q-uploader
        style="max-width: 1200px"
        url="http://localhost:4444/upload"
        label="Just add one csv file"
        multiple
        max-files="1"
        @rejected="onRejected"
      />
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    function onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }

    return { onRejected }
  }
}
</script>

<style>

</style>