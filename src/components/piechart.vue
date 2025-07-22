<template>
  <div class="w-full max-w-3xl md:-my-40 lg:mt-9">
    <canvas ref="canvasRef" class=" w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import userData from '@/generated.json'

const canvasRef = ref(null)
let male=0;
let female=0;
for (let user in userData){
    let value=userData[user]
    if (value.Gender ==='M'){
        male+=1;
    }else{
        female+=1;
    }
}
onMounted(() => {
    
  const ctx = canvasRef.value.getContext('2d')

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Male','Female'],
      datasets: [{
        data: [male,female],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})
</script>
