<script setup>
import navbar from './components/navbar.vue';
import userCard from './components/userCard.vue';
import charts from './components/barcharts.vue';
import linechart from './components/linechart.vue';
import piechart from './components/piechart.vue';
</script>

<template>
  <div class="flex">
  <navbar/>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:h-1/2">
    <charts/>
    <linechart/>
    <piechart/>
    </div>
    <userCard :limit="8"/>
    
  </div>
  </div>
  
</template>

