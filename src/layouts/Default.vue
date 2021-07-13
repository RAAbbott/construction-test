<template>
  <div class="z-15">

    <!-- Desktop Header/Menu -->
    <header class="hidden lg:flex flex-row justify-between items-center h-28 px-8 xl:px-24 text-black">
      <strong class="text-2xl">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        <span class="font-semibold ml-16 text-base relative"><span class="material-icons absolute bottom-0 -left-7">call</span>{{faker.phone.phoneNumber()}}</span>
      </strong>
      <nav>
        <a class="mr-8 font-semibold text-gray-700" href="#services">SERVICES</a>
        <a class="mr-8 font-semibold text-gray-700" href="#examples">PAST WORK</a>
        <a class="px-6 py-4 font-semibold bg-blue-400 text-white rounded-lg relative" href="#contact">CHAT WITH US <span class="absolute -bottom-5 left-0 text-gray-400 text-xs">*No appointment needed</span></a>
      </nav>
    </header>
    
    <!-- Mobile Header -->
    <div class="absolute z-20 flex items-center flex-row justify-between px-12 w-screen mt-8 lg:hidden">
      <strong class="text-2xl text-white">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <span class="material-icons text-white cursor-pointer" style="font-size:40px;" @click="toggleMenu">menu</span>
    </div>

    <!-- Mobile Menu -->
    <nav :class="{'opacity-100': showMenu, 'opacity-0 invisible': !showMenu}" class="transition-opacity duration-500 ease-in-out xl:hidden w-64 md:w-96 flex flex-col justify-start items-center h-screen py-12 text-gray-700 fixed z-20 right-0 bg-white">
      <span class="material-icons absolute right-6 top-6 cursor-pointer" @click="toggleMenu">close</span>
        <a class="mb-8 font-semibold text-gray-700" href="#services" @click="toggleMenu">SERVICES</a>
        <a class="mb-8 font-semibold text-gray-700" href="#examples" @click="toggleMenu">PAST WORK</a>
      <a class="px-6 py-4 font-semibold bg-blue-400 mb-8 text-white rounded-lg relative" href="#contact" @click="toggleMenu">CHAT WITH US <span class="absolute -bottom-5 left-0 text-gray-400 text-xs">*No appointment needed</span></a>
    </nav>


    <!-- Main Content -->
    <div class="w-full overflow-y-scroll">
      <slot/>
    </div>



    <!-- Footer -->
    <footer class="h-72 bg-black w-full text-white">
      FOOTER
    </footer>


  </div>
</template>

<script>
import faker from 'faker'
export default {
  data() {
    return {
      showMenu: false,
      faker
    }
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  }


}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
