<template>
  <q-layout view="lhr Lpr lfr">
    <q-page-container>
      <Search />
    </q-page-container>
  </q-layout>
</template>

<script>
// inicio de la aplicacion. importa la vista de Search para ser mostrado
import Search from './pages/Search.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Search
  }
}
</script>

<style>
</style>
