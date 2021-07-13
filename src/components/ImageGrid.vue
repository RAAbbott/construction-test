<template>
  <div class="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start w-screen xl:w-156">
      <div class="w-96 h-80 m-4 flex-initial md:block hidden relative" v-for="i in 6" :key="i">
          <g-image :key="i" :src="require(`../../static/home${i}.jpeg`)" class="relative"></g-image>
          <span class="absolute text-gray-500 text-xs left-0 bottom-10">{{dates[i - 1]}}</span>
      </div>
        <div class="w-96 h-80 flex-initial md:hidden relative" v-for="i in 4" :key="i">
          <g-image :key="i" :src="require(`../../static/home${i}.jpeg`)" class="relative"></g-image>
          <span class="absolute text-gray-500 text-xs left-0 bottom-10">{{dates[i - 1]}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [
        '08/25/2020',
        '07/16/2019',
        '03/01/2021',
        '05/23/2021',
        '05/29/2021',
        '12/02/2019'
      ]
    }
  }
}
</script>

<style>

</style>