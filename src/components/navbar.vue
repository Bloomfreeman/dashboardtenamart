<script setup>
  import { RouterLink, useRoute, useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const route = useRoute();
  const isActiveLink = (routePath)=>{
    return route.path === routePath;  //check the url to highlight the link
  }
  const userInput = ref("");  //take the search value
  const router=useRouter();
  const search_filter=ref("name") //pass it to the url after search
  const redirectP=()=>{
    router.push(`/search/${userInput.value}/${search_filter.value}`); //redirect to the searched page
  }

</script>
<template>
<aside class="w-64 h-screen bg-[#10b982] text-white flex flex-col p-4 space-y-4 rounded-3xl">
    
    <!-- Search bar and Filter-->
    <div>
      <input 
        type="text" 
        placeholder="Search..."
        id="search"
        v-model="userInput" 
        @keydown.enter="redirectP"
        class="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      <form >
      
        
      <div class="p-4 bg-[#1a7c5b] text-right mt-5 shadow-lg rounded-xl max-w-sm">
        <h1 class="text-base font-semibold mb-4 text-white">Filter</h1>

      <div class="space-y-3">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" id="name" autocomplete="name" v-model="search_filter" value="name" checked class="text-blue-600 focus:ring-blue-500 w-4 h-4">
          <span class="text-white font-medium">Name</span>
        </label>

        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" id="email" autocomplete="email" v-model="search_filter" value="email"  class="text-blue-600 focus:ring-blue-500 w-4 h-4">
          <span class="text-white font-medium">Email</span>
        </label>

        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" id="phone" autocomplete="phone" v-model="search_filter" value="phone" class="text-blue-600 focus:ring-blue-500 w-4 h-4">
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
      </ul>
    </nav>

    <!-- Footer or logout -->
    <div>
      <a href="#" class="block px-3 py-2 rounded bg-black hover:bg-[#1a7c5b] text-center transition">Logout</a>
    </div>
  </aside>
  </template>