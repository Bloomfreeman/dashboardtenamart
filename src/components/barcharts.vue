<template>
  <div class="w-full max-w-3xl md:-mb-40">
    <canvas ref="canvasRef" class=" w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'

const canvasRef = ref(null)

onMounted(() => {
  const ctx = canvasRef.value.getContext('2d')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
      datasets: [{
        label: 'Weakly Signup',
        data: [12, 19, 3, 5, 2, 3,16],
        borderWidth: 1,
        backgroundColor: '#10b982',
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
