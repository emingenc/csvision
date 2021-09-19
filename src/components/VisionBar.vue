<template>
  <div class=" row flex justify-around bg-primary full-width ">
      <div class='q-pl-xl text-white text-caption'>

      <p class='q-pt-sm' >Vision Bar</p>
      <div class="q-gutter-sm">
      <q-checkbox v-model="store.state.dashboard" label="Dashboard" />
    </div>
      </div>
      <q-select
        class='q-pl-xl q-pt-sm'
        label-color="white"
        filled
        v-model="xaxis"
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
      class='q-pl-xl q-pt-sm'
      label-color="white"
        filled
        v-model="yaxis"
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
      <q-btn  flat dense color="white" icon="check" label="Visiualise" @click="Visiualise" />
      
    </div>
</template>

<script>
import { ref,inject } from 'vue'

export default {
    setup () {
        const store = inject("csvStore");
      let stringOptions = [...store.state.visibleColumns]
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
    Visiualise(){
        this.store.state.dashboard = !this.store.state.dashboard
        setTimeout(()=>{this.store.state.dashboard = !this.store.state.dashboard},1)
        
      },
  },
  watch:{
    xaxis(val){
      this.store.state.xaxis = val
      this.Visiualise()
    },
    yaxis(val){
      this.store.state.yaxis = val
      this.Visiualise()
    }
  }
}
</script>

<style>

</style>