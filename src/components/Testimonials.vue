<template>
<!-- On desktop I want to translate the divs so they are staggered a bit. -->
  <div class="flex flex-col items-center justify-start">
      <div class="text-3xl md:text-4xl mb-8 font-bold">Testimonials</div>
      <Testimonial class="transform md:-translate-x-48" text="Dreamland Homes was an absolute pleasure to work with. They helped me through every aspect of the home and made sure that the process went as smooth as possible. 10/10 will work with them again!"/>
      <Testimonial class="transform md:translate-x-48" text="Could not be happier with our experience at Dreamland Homes! Shauna was amazing to work with, and she made sure all our questions were answered quickly."/>
      <Testimonial class="transform md:-translate-x-48" text="Nothing but praise for Dreamland Homes! We came out of it with a beautiful home exactly how we had envisioned it, but the process of working with them was just as rewarding."/>
      <Testimonial class="transform md:translate-x-48" text="Stop your search here, just start your build process with Dreamland Homes! I guarantee you will have the best and most stress-free experience ever!"/>
      
      
  </div>
</template>

<script>
import Testimonial from './Testimonial.vue'
import faker from 'faker'
console.log(faker.name.firstName())
export default {
    data() {
        return {
            faker: faker
        }
    },
    components: {
        Testimonial
    }
}
</script>

<style>

</style>