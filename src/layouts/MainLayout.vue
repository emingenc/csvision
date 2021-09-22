<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
           CSVision
        </q-toolbar-title>
        <div class="fill">

          <VisionBar v-if="store.state.columnsCsv"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      
    >
      <q-list>
        <q-item-label
          header
        >
         Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import VisionBar from "components/VisionBar.vue";
import csvStore from 'src/store/csvStore';

const linksList = [
  
  {
    title: 'Github',
    caption: 'github.com/emingenc/csvision',
    icon: 'code',
    link: 'https://github.com/emingenc/csvision'
  },
  {
    title: 'Discord ',
    caption: '',
    icon: 'chat',
    link: 'https://discord.gg/mMWGmBWE'
  },
  {
    title: 'Personal website',
    caption: 'emingenc.github.io',
    icon: 'public',
    link: 'https://emingenc.github.io'
  },
];

import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    VisionBar
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const store = inject('csvStore')

    return {
      store,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
