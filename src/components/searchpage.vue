<script setup>
import { useRoute } from 'vue-router';
import card from './card.vue';
import {ref, onMounted, watch } from 'vue';
import axios from 'axios';

const userD=ref([]);    //lateron we put the user data here
const route=useRoute();
const radio=route.params.rd;    //return the fillter that passed to the url
let search_resalt=ref([]);  //lateron will be used to hold the searched datas
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); //removes symboles from the searched text
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
watch(()=>route.params.value,(newVal,oldVal) => {   //run when new word got searched
    search_resalt.value=[]
    search();
});
            

</script>
<template>
   <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <card v-for="user in search_resalt" :key="user._id" :user="user"/>
    
    </div>
</template>