<template>
  <q-layout view="lhr Lpr lfr">
    <h3 id="title" class="text-center">{{searchTitle}}</h3>
    <q-page-container>
      <Search />
    </q-page-container>
  </q-layout>
</template>

<script>
import Search from './pages/Search.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Search
  },

  data () {
    return {
      searchTitle: 'iTunes Search Index'
    }
  }
}
</script>

<style>
</style>
