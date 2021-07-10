<template>
  <div class="flex flex-col justify-center items-center">
      <div class="text-4xl font-bold">Ready To Take The Next Step?</div>
      <div class="text-gray-700 text-sm font-semibold mt-4 mb-12">Contact us using the form below!</div>
      <form name="contact" method="POST" data-netlify="true" class="flex flex-col justify-center items-start">
          <input type="text" name="name" class="form-input rounded-xl border border-gray-300 shadow-lg text-sm w-96" placeholder="Name">
          <input type="email" name="email" class="form-input rounded-xl border border-gray-300 shadow-lg my-8 text-sm w-96" placeholder="Email">
          <textarea name="message" class="form-input rounded-xl border border-gray-300 shadow-lg text-sm w-96 h-64" placeholder="Message"></textarea>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>