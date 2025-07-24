<script setup>
import { defineProps,onMounted } from 'vue';
import { ref } from 'vue';
import axios from 'axios';
const blockBut=ref('Block')
const blockCol=ref('bg-[#10b982]') 
const blockU=()=>{
    if (blockBut.value==='Block'){
        blockBut.value='Unblock';
        blockCol.value='bg-red-500'
    }else{
        blockBut.value='Block'
        blockCol.value='bg-[#10b982]'
    }
}
const deletU= async (user)=>{
    try{
        const confirm=window.confirm('Are you sure you want to delet this User?');
        if (confirm){
            await axios.delete(`http://localhost:5000/Users/${user.id}`)
        }
    }catch(error){
        console.log('error deleting job ',error)   
    }
}
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
        <button @click=deletU(user) :class="`mr-52 mt-9 block px-3 py-2 rounded ${bg} ${hover} text-center text-white transition`">Delete</button>
        <button @click="blockU" :class="`mt-9 block px-3 py-2 rounded ${blockCol} ${hover} text-white text-center transition`">{{ blockBut }}</button>
        </div>
    </div>
</template>