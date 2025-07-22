 <script setup>
    import { RouterLink } from 'vue-router';
</script>
 <template>
 <div class="m-auto text-center px-6">
    <h1 class="text-7xl font-bold text-[#10b982]">404</h1>
    <h2 class="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
    <p class="text-gray-600 mt-2">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
    
    <router-link to="/" class="mt-6 inline-block px-6 py-2 bg-[#10b982] text-white font-medium rounded-lg shadow hover:bg-[#1a7c5b] transition">
      ⬅ Back to Home
    </router-link>
</div>
  </template>