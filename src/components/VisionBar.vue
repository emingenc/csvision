<template>
  <div class="q-gutter-md row bg-primary ">
      <q-select
        label-color="white"
        filled
        v-model="store.state.xaxis"
        use-input
        input-debounce="0"
        label="X axis"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="menu"
      >
      <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-white">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>

      <q-select
      label-color="white"
        filled
        v-model="store.state.yaxis"
        use-input
        input-debounce="0"
        label="Y axis"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="menu"
      >
      <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      
    </div>
</template>

<script>
import { ref,inject } from 'vue'

export default {
    setup () {
        const store = inject("csvStore");
      let stringOptions = [...store.state.visibleColumns]
    let options = ref(stringOptions)

    return {
      store,
      options,

      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  }
}
</script>

<style>

</style>