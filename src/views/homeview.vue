<script setup>
import userCard from '@/components/userCard.vue';
import charts from '@/components/barcharts.vue';
import linechart from '@/components/linechart.vue';
import piechart from '@/components/piechart.vue';
</script> 
<template>
    <div class="overflow-auto h-screen">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-1/3 md:h-4/5 sm:h-3/4">
    <charts/>
    <linechart/>
    <piechart/>
    </div><br>
    <userCard :limit="8" :show="true"/>
    
  </div>
</template>