<template>
	<div>
		<h3 id="title" class="text-center">{{searchTitle}}</h3>
		<div class="q-pa-md">
			<div class="row q-col-gutter-xl">
				<div class="col-12 col-md">
					<q-input
						id="artistInput"
						filled
						v-model="termText"
						label="Artist"
						ref="termText"
						lazy-rules
						:rules="[ val => val && val.length > 0 || 'Please type something']"
						/>
				</div>
				<div class="col-12 col-md">
					<q-select id="mediaSelect" square filled v-model="option" :options="options" label="Media" />
				</div>
				<div class="col-12 col-md row items-start justify-center">
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
		<div class="q-pa-md row justify-center q-gutter-md">
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
			searchTitle: 'iTunes Search Index',
			termText: '',
			option: null,
			options: [
        'all', 'audiobook', 'ebook', 'movie', 'musicVideo', 'software', 'podcast'
			],
			searchResults: []
		}
	},
	components: {
		Card
	},
	
	methods: {
		// metodo para modificar filtro de busqueda de entidad, segun lo seleccionado en el select
		setEntity () {
			var entity = null

			if (this.option == 'all' || this.option == null)
				entity = ''
			else
				entity = '&entity=' + this.option

			return entity
		},
		// metodo que inicia la peticion al API de iTunes
		makeRequest(searchTerm, searchEntity) {
			// axios es utilizado para realizar una peticion segun el termino y la entidad de busqueda.
			axios.get(conf.iTunesURL+'search?term='+searchTerm+searchEntity)
				.then(res => {
					this.searchResults=res.data.results
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
		},
		// metodo para iniciar el proceso de busqueda. controla si el filtro de busqueda no esta b
		search () {
			this.$refs.termText.validate()

			if (this.$refs.termText.hasError) {
				this.formHasError = true
			}
			else {
				var searchTerm = this.termText.replace(' ','+')
				var searchEntity = this.setEntity()		
				this.makeRequest(searchTerm, searchEntity)
			}
			
		}		
	}
}
</script>