<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">{{this.cardFields.collectionName}}</div>
          <div class="text-subtitle2">{{this.cardFields.artistName}}</div>
        </div>
      </q-img>

			<q-card-section>
        <div class="text-h6">{{this.cardFields.collectionPrice}}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		cardFields: {
			default: { collectionName: 'Ejem', artistName: 'Ej1', artworkUrl100: '', collectionPrice: '$0.0'}
		}
	}
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>