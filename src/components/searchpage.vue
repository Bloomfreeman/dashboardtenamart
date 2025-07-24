<script setup>
import { useRoute } from 'vue-router';
import userData from'@/generated.json';
import card from './card.vue';
const route=useRoute();
const radio=route.params.rd
let search_resalt=[];
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
for (let data in userData){
    const value=userData[data];
    const escapedValue = escapeRegExp(route.params.value);
    const regex=new RegExp(escapedValue,'i')
    
    if (regex.test(value[radio])){
        search_resalt.push(value);
    }
}
</script>
<template>
   <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <card v-for="user in search_resalt" :key="user._id" :user="user"/>
    
    </div>
</template>