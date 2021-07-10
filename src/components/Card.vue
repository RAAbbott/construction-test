<template>
  <!-- <div class="h-96 w-96 rounded-xl shadow-sm hover:shadow-lg text-center border bg-white">
    <span class="material-icons mx-auto mt-6" style="font-size:60px;">{{data.icon}}</span>
    <div class="text-3xl my-6">{{data.title}}</div>
    <div class="px-12 text-sm text-gray-700">{{data.text}}</div>
  </div> -->
  <div class="h-100 w-96 rounded-xl shadow-sm hover:shadow-lg text-center border bg-white p-2">
    <g-image :src="require(`../../static/${data.image}.jpeg`)" class="object-cover p-4"/>
    <div class="text-3xl mb-2">{{data.title}}</div>
    <div class="px-12 text-sm text-gray-700">{{data.text}}</div>
  </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>