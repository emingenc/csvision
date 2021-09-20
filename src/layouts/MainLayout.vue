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

          <VisionBar/>
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
    title: 'Personel website',
    caption: 'emingenc.github.io',
    icon: 'public',
    link: 'https://emingenc.github.io'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    VisionBar
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
