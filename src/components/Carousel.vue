<template>
  <vue-glide :type="carousel" :perView="1">
      <vue-glide-slide class="pb-6" v-for="card in data" :key="card.id">
        <Card class="mx-auto" :data="card"/>
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<"><span class="material-icons mr-24" style="font-size:36px;">chevron_left</span></button>
        <button data-glide-dir=">"><span class="material-icons" style="font-size:36px;">chevron_right</span></button>
      </template>
  </vue-glide>
</template>

<script>
import Card from './Card.vue'
export default {
    props: ['data'],
    components: {
        Card
    }
}
</script>

<style>

</style>