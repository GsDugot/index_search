<template>
	<div>
		<div class="q-pa-md">
			<div class="row q-col-gutter-xl">
				<div class="col-12 col-md">
					<q-input id="artistInput" filled v-model="termText" label="Artist" />
				</div>
				<div class="col-12 col-md">
					<q-select id="mediaSelect" square filled v-model="option" :options="options" label="Media" />
				</div>
				<div class="col-12 col-md">
					<q-btn
						id="searchButton"
						padding="md lg"
						color="primary"
						icon="search"
						label="Search"
						v-on:click="search()" />
				</div>
			</div>
		</div>
		<div class="q-pa-md row items-start q-gutter-md">
			<div v-for="(result, i) in this.searchResults" :key="i">
				<Card v-bind:cardFields="result"></Card>
			</div>
		</div>
	</div>
</template>

<script>
import Card from '../components/Card.vue'

import axios from 'axios'
import conf from '../config.json'

export default {
	name: 'Search',
	data () {
		return {
			termText: '',
			option: null,
			options: [
        'all', 'audiobook', 'ebook', 'movie', 'music', 'musicVideo', 'shortFilm', 'software', 'tvShow', 'podcast'
			],
			searchResults: []
		}
	},
	components: {
		Card
	},
	
	methods: {

		setEntity () {
			var entity = null

			if (this.option == 'all' || this.option == null)
				entity = ''
			else
				entity = '&entity=' + this.option

			return entity
		},

		search () {
			var searchTerm = this.termText.replace(' ','+')
			var searchEntity = this.setEntity()

			axios.get(conf.iTunesURL + 'search?term=' + searchTerm + searchEntity)
				.then(res => {
					this.searchResults = res.data.results
					console.log(res)
					})
		}		
	}
}
</script>

<style>

</style>