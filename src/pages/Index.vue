<template>
  <div class="w-full">
    <Hero class="z-0"/>
    <Grid class="my-24" :cards="benefits" title="Why Us?"/>
    <Benefit class="py-24 md:py-48 bg-white"/>
    <Grid class="my-24" :cards="services" title="Our Services"/>
    <Examples class="py-24 bg-white"/>
    <Testimonials class="py-24"/>
    <Contact class="py-24 bg-white" />
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Grid from '../components/Grid.vue'
import Benefit from '../components/Benefit.vue'
import Contact from '../components/Contact.vue'
import Testimonials from '../components/Testimonials.vue'
import Examples from '../components/Examples.vue'
export default {
  data() {
    return {
      benefits: [
        {id: 1, icon: 'home', image: 'experience', title: 'Experience', text: 'We are a team of highly experienced and specialized individuals who make sure that every decision we make is qualified. From the research that goes into the design, to putting in the last nail, you can trust us through every step of the process.'},
        {id: 2, icon: 'recommend', image: 'reliable', title: 'Reliability', text: 'When it comes to reliability, we\'re number one. We\'re here to help you every step of the way, and we won\'t stop until you\'re satifsied. It\'s what we do!'},
        {id: 3, icon: 'handyman', image: 'quality', title: 'Quality', text: 'The quality of our craftsmanship is unparalleled. We take immense pride in our work and will make sure every aspect of your home is exactly how you envisioned it.'},
      ],
      services: [
        {id: 1, image: 'design', title: 'Construction Design', text: 'One of the most important parts of any build process: the design. We make sure you have a concrete and well-planned design that is created based on what YOU want.'},
        {id: 2, image: 'commercial', title: 'Commercial Builds', text: 'Commercial buildings are large and sometimes complicated projects - projects that we are up for 100%. We\'ve built numerous commercial buildings and are confident we can do what you need.'},
        {id: 3, image: 'residence', title: 'Residential Properties', text: 'Home is where the heart is, and we respect that. We make sure your home is the best it can be. It\'s a place where memories are made, and families are strengthened.'},
      ]
    }
  },
  components: {
    Hero,
    Grid,
    Benefit,
    Contact,
    Testimonials,
    Examples
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
