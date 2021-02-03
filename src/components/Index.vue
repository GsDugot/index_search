<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md">
				<q-input filled v-model="text" label="Artist" />
			</div>
			<div class="col-12 col-md">
				<q-select square filled v-model="model" :options="options" label="Media" />
			</div>
      <div class="col-12 col-md">
				<q-btn padding="md lg" color="primary" icon="search" label="Search" />
			</div>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			model: null,
			options: [
        'all', 'audiobook', 'ebook', 'movie', 'music', 'musicVideo', 'shortFilm', 'software', 'tvShow', 'podcast'
      ],
		}
	}
}
</script>

<style>

</style>