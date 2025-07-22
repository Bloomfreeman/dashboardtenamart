<script setup>
  import { RouterLink, useRoute } from 'vue-router';

  const isActiveLink = (routePath)=>{
    const route = useRoute();
    return route.path === routePath;
  }
</script>
<template>
<aside class="w-64 h-screen bg-[#10b982] text-white flex flex-col p-4 space-y-4 rounded-3xl">
    
    <!-- Search bar and Filter-->
    <div>
      <form @submit.prevent="">
      <input 
        type="text" 
        placeholder="Search..." 
        class="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div class="p-4 bg-[#1a7c5b] text-right mt-5 shadow-lg rounded-xl max-w-sm">
        <h1 class="text-base font-semibold mb-4 text-white">Filter</h1>

      <div class="space-y-3">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" id="name" name="search_filter" value="HTML" checked class="text-blue-600 focus:ring-blue-500 w-4 h-4">
          <span class="text-white font-medium">Name</span>
        </label>

        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" id="email" name="search_filter" value="CSS"  class="text-blue-600 focus:ring-blue-500 w-4 h-4">
          <span class="text-white font-medium">Email</span>
        </label>

        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" id="phone" name="search_filter" value="JavaScript" class="text-blue-600 focus:ring-blue-500 w-4 h-4">
          <span class="text-white font-medium">Phone</span>
        </label>
      </div>
    </div>
      </form>
    </div>

    <!-- Nav links -->
    <nav class="flex-1">
      <ul class="space-y-2">
        <li>
          <router-link to="/" :class="[isActiveLink('/')? 'bg-[#1a7c5b]':'','block', 'px-3', 'py-2', 'rounded', 'hover:bg-[#1a7c5b]', 'transition']">🏠 Dashboard</router-link>
        </li>
        <li>
          <router-link to="/users" :class="`${isActiveLink('/users')? 'bg-[#1a7c5b]':''} block px-3 py-2 rounded hover:bg-[#1a7c5b] transition`">📁 Wishlisted</router-link>
        </li>
        <li>
          <router-link to="/block" :class="`${isActiveLink('/block')? 'bg-[#1a7c5b]':''} block px-3 py-2 rounded hover:bg-[#1a7c5b] transition`">👥 Blocked</router-link>
        </li>
      </ul>
    </nav>

    <!-- Footer or logout -->
    <div>
      <a href="#" class="block px-3 py-2 rounded bg-black hover:bg-[#1a7c5b] text-center transition">Logout</a>
    </div>
  </aside>
  </template>