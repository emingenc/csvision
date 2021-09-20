<template>
  <div class="q-pt-xl  row flex justify-around bg-primary  fill">
      <div class='q-ml-md q-pr-xl  q-mb-lg row text-white text-caption'>
     
      <q-checkbox  v-model="store.state.dashboard" label="Dashboard" />
      </div>
      <div v-if="store.state.dashboard" class="row">

      <q-select
        class='q-ml-xl q-pb-lg'
        label-color="white"
        filled
        v-model="xaxis"
        use-input
        input-debounce="0"
        label="Labels"
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
      class='q-ml-xl q-pb-lg'
      label-color="white"
        filled
        v-model="yaxis"
        use-input
        input-debounce="0"
        label="Values"
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
      <div class="text-white q-pb-md" v-else>
        You can check the box to see the CSVision dashboard.
      </div>

    </div>
</template>

<script>
import { ref,inject } from 'vue'

export default {
    setup () {
        const store = inject("csvStore");
      let stringOptions = store.state.visibleColumns?[...store.state.visibleColumns]:[]
    let options = ref(stringOptions)
    let xaxis = ref(store.state.xaxis)
    let yaxis = ref(store.state.yaxis)

    return {
      store,
      options,
      xaxis,
      yaxis,

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
  },
  methods:{
    
  },
  watch:{
    xaxis(val){
      this.store.state.xaxis = val
      this.store.methods.Visiualise()
    },
    yaxis(val){
      this.store.state.yaxis = val
      this.store.methods.Visiualise()
    }
  }
}
</script>

<style>

</style>
