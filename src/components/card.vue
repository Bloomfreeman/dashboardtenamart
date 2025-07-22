<script setup>
import { defineProps } from 'vue';


defineProps({
    bg: {
        type: String,
        default: 'bg-[#10b982]'
    },
    hover: {
        type: String,
        default: 'hover:bg-[#1a7c5b]'
    },
    user: Object
});
</script>
<template>
    <div :class="`bg-gray-100 p-6 rounded-lg shadow-md h-48 w-96 overflow-hidden flex-wrap`">
        <div class="flex space-x-4 mt-1">
            <h3 class="text-lg font-semibold">Name: </h3>
            <h3 class="text-lg font-semibold">{{user.name}}</h3>
        </div>
        <div class="flex space-x-4">
            <h3 class="text-lg font-semibold">Email: </h3>
            <h3 class="text-lg font-semibold">{{ user.email }}</h3>
        </div>
        <div class="flex space-x-4">
            <h3 class="text-lg font-semibold">phone: </h3>
            <h3 class="text-lg font-semibold">{{ user.phone }}</h3>
        </div>
        <div class="flex space-x-1">
        <a href="#" :class="`mr-52 mt-9 block px-3 py-2 rounded ${bg} ${hover} text-center text-white transition`">delete</a>
        <a href="#" :class="`mt-9 block px-3 py-2 rounded ${bg} ${hover} text-white text-center transition`">block</a>
        </div>
    </div>
</template>