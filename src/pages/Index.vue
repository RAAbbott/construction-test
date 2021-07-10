<template>
  <div class="w-full">
    <Hero class="z-0"/>
    <Grid class="my-24" :cards="benefits" title="Why Us?"/>
    <Benefit class="my-48"/>
    <Grid class="my-24" :cards="services" title="Our Services"/>
    <Contact />
    <!-- <Services/> -->
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Grid from '../components/Grid.vue'
import Services from '../components/Services.vue'
import Benefit from '../components/Benefit.vue'
import Contact from '../components/Contact.vue'
export default {
  data() {
    return {
      benefits: [
        {id: 1, icon: 'home', image: 'experience', title: 'Experience', text: 'We are a team of highly experienced and specialized individuals who make sure that every decision we make is qualified. From the research that goes into the design, to putting in the last nail, you can trust us through every step of the process.'},
        {id: 2, icon: 'recommend', image: 'reliable', title: 'Reliability', text: 'When it comes to reliability, we\'re number one. We\'re here to help you every step of the way, and we won\'t stop until you\'re satifsied. It\'s what we do!'},
        {id: 3, icon: 'handyman', image: 'quality', title: 'Quality', text: 'The quality of our craftsmanship is unparalleled. We take immense pride in our work and will make sure every aspect of your home is exactly how you envisioned it.'},
      ],
      services: [
        {id: 1, image: 'design', title: 'Construction Design', text: 'We are a team of highly experienced and specialized individuals who make sure that every decision we make is qualified. From the research that goes into the design, to putting in the last nail, you can trust us through every step of the process.'},
        {id: 2, image: 'commercial', title: 'Commercial Builds', text: 'When it comes to reliability, we\'re number one. We\'re here to help you every step of the way, and we won\'t stop until you\'re satifsied. It\'s what we do!'},
        {id: 3, image: 'residence', title: 'Residential Properties', text: 'The quality of our craftsmanship is unparalleled. We take immense pride in our work and will make sure every aspect of your home is exactly how you envisioned it.'},
      ]
    }
  },
  components: {
    Hero,
    Grid,
    Services,
    Benefit,
    Contact
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
