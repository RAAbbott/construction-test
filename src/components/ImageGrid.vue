<template>
  <div class="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start w-screen xl:w-156">
      <div class="w-96 h-96 box-border bg-blue-400 border border-gray-100 m-4 flex-initial hidden xl:block" v-for="i in 9" :key="i">
          Image
      </div>
      <div class="w-96 h-96 box-border bg-blue-400 border border-gray-100 m-4 flex-initial md:block hidden" v-for="i in 8" :key="i">
          Image
      </div>
        <div class="w-96 h-96 box-border bg-blue-400 border border-gray-100 m-4 flex-initial md:hidden" v-for="i in 4" :key="i">
          Image
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>