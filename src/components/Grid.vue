<template>
<div class="text-center">
  <div class="text-4xl font-bold mb-12">{{title}}</div>

  <Carousel :data="cards" class="lg:hidden"/>

  <div class="hidden lg:flex flex-col xl:flex-row xl:justify-around justify-between 2xl:justify-center items-center">
      <div v-for="card in cards" :key="card.id">
        <Card class="2xl:mx-12 mb-16" :data="card"/>
      </div>
  </div>

  <!-- Use tiny carousel instead! -->
</div>

</template>

<script>
import Card from './Card.vue'
import Carousel from './Carousel.vue'
export default {
  props: ['cards', 'title'],
 components: {
  Card,
  Carousel
 },

 data() {
   return {
     
   }
 },

 methods: {

 },

 mounted() {
  //  new Glide('.glide', {
  //    startAt: 2
  //  }).mount()
 }
}
</script>

<style>

</style>