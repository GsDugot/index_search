<template>
  <q-layout view="lhr Lpr lfr">
    <q-page-container>
      <Index />
    </q-page-container>
  </q-layout>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Index
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
