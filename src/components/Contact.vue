<template>
  <div class="flex flex-col justify-center items-center">
      <div class="text-3xl px-2 md:text-4xl font-bold">Next Steps</div>
      <div class="text-gray-700 text-sm font-semibold mt-4 mb-12">Contact us using the form below!</div>
      <form name="contact" method="POST" data-netlify="true" class="flex flex-col justify-center items-start">
          <input type="text" name="name" class="form-input rounded-md border border-gray-300 shadow-md text-sm w-96 md:w-104" placeholder="Name">
          <input type="email" name="email" class="form-input rounded-md border border-gray-300 shadow-md my-8 text-sm w-96 md:w-104" placeholder="Email">
          <textarea name="message" class="form-input rounded-md border border-gray-300 shadow-md text-sm w-96 md:w-104 h-64" placeholder="Message"></textarea>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>