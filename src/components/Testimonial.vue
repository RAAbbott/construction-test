<template>
    <div class="w-100 px-6 text-center mb-12 bg-white rounded-lg py-6 shadow-md">
        <span class="material-icons" style="font-size:48px">format_quote</span>
        <div>{{text}}</div>
        <g-image class="h-24 w-24 rounded-full mx-auto mt-12" :src="faker.image.avatar()" />
        <div class="mt-3 text-sm">{{`${faker.name.firstName()} ${faker.name.lastName()}`}}</div>
    </div>  
</template>

<script>
import faker from 'faker'
export default {
    props: ['text'],
    data() {
        return {
            faker: faker
        }
    }
}
</script>

<style>

</style>