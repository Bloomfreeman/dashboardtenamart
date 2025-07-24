<script setup>
import { useRoute } from 'vue-router';
import card from './card.vue';
import {ref, onMounted, watch } from 'vue';
import axios from 'axios';

const userD=ref([]);
const route=useRoute();
const radio=route.params.rd;
let search_resalt=ref([]);
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const search=()=>{
    for (let data in userD._rawValue){
        const value=userD._rawValue[data];
        const escapedValue = escapeRegExp(route.params.value);
        const regex=new RegExp(escapedValue,'i')

        
        if (regex.test(value[radio])){
            search_resalt.value.push(value);

        }
    }
}
onMounted(async()=>{
    try{
        const response = await axios.get('http://localhost:5000/Users');
        userD.value=response.data;
        search_resalt.value=[]
        search();
    }catch(error){
        console.log('error when fetching data', error);
    }
});
watch(()=>route.params.value,(newVal,oldVal) => {
    search_resalt.value=[]
    search();
});
            

</script>
<template>
   <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <card v-for="user in search_resalt" :key="user._id" :user="user"/>
    
    </div>
</template>