<script setup>
import navbar from './components/navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex bg-green-100">
  <navbar/>
  <RouterView/>
  </div>
  
</template>

