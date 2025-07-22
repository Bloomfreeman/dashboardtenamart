<script setup>
import usesrData from '@/generated.json';
import card from './card.vue';
import { ref,defineProps } from 'vue';

defineProps({
    limit: Number

})
const users=ref(usesrData)
</script>
<template>
    <div >
    <div class="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <card v-for="user in users.slice(0,limit || users.length)" :key="user._id" :user="user"/>
    
    </div>
    <div class=" w-48 m-auto my-10 px-6">
        <a href="/users" class="bg-[#10b982] text-white text-center py-4 px-6 rounded hover:bg-[#1a7c5b]">Show More</a>
    
    </div>
    </div>
</template>