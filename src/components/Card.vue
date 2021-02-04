<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="cardFormat">
      <q-img v-bind:src="this.cardFields.artworkUrl100"></q-img>

			<q-card-section>
        <div class="text-h6">{{this.cardFields.collectionName}}</div>
        <div class="text-subtitle2">{{this.cardFields.artistName}}</div>
      </q-card-section>
			
			<q-card-section>
        <div class="text-h6">{{this.cardFields.collectionPrice}}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		cardFields: {
			default: { collectionName: 'Ejem', artistName: 'Ej1', artworkUrl100: '', collectionPrice: 0.0 }
		}
	}
}
</script>

<style lang="sass" scoped>
.cardFormat
  width: 100%
  max-width: 230px
</style>