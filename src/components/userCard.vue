<script setup>

import card from './card.vue';
import { ref,defineProps,onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

//take json file and convert it to csv and download it
function exportToCSV(data, filename = "data.csv") {
  const csv = [
    Object.keys(data[0]).join(","),
    ...data.map(row => Object.values(row).join(","))
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

defineProps({
    limit: Number,
    show:{
        type: Boolean,
        default: false
    },
    showExport:{
        type: Boolean,
        default: false
    }

})
const users=ref([])
onMounted(async()=>{
    try{
        const response = await axios.get('http://localhost:5000/Users');
        users.value=response.data;
    }catch(error){
        console.log('error when fetching data', error);
    }
    
});
</script>
<template>
    <div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <card v-for="user in users.slice(0,limit || users.length)" :key="user.id" :user="user"/>
    
    </div>
    <!-- This button only shows in dashboard page -->
    <div v-if="show" class=" w-48 m-auto my-10 px-6">
        <router-link to="/users" class="bg-[#10b982] text-white text-center py-4 px-6 rounded hover:bg-[#1a7c5b]">Show More</router-link>
    
    </div>
    <!-- This button only shows in wishlisted page -->
    <div v-if="showExport" class=" w-48 m-auto my-10 px-6">
        <button @click="exportToCSV(users)" class="bg-[#10b982] text-white text-center py-4 px-6 rounded hover:bg-[#1a7c5b]">Export To CSV</button>
    
    </div>
    </div>
</template>