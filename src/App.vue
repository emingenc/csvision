<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import csvStore from './store/csvStore'
export default defineComponent({
  name: 'App',
  setup(){
    provide('csvStore',store)
  },
})
</script>
