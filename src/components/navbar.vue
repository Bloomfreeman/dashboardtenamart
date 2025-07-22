<template>
<aside class="w-64 h-screen bg-[#10b982] text-white flex flex-col p-4 space-y-4 rounded-3xl">
    
    <!-- Search bar -->
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        class="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Nav links -->
    <nav class="flex-1">
      <ul class="space-y-2">
        <li>
          <a href="#" class="block px-3 py-2 rounded hover:bg-[#1a7c5b] transition">🏠 Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 rounded hover:bg-[#1a7c5b] transition">📁 Projects</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 rounded hover:bg-[#1a7c5b] transition">👥 Team</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 rounded hover:bg-[#1a7c5b] transition">⚙️ Settings</a>
        </li>
      </ul>
    </nav>

    <!-- Footer or logout -->
    <div>
      <a href="#" class="block px-3 py-2 rounded bg-black hover:bg-[#1a7c5b] text-center transition">Logout</a>
    </div>
  </aside>
  </template>