<template>
  <div class="w-full max-w-3xl md:h-64 mt-9">
    <canvas ref="canvasRef" class=" w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import date from '@/date.json'

const canvasRef = ref(null)
let Month=[]
let signups=[]
for (let data in date){
    let {sales,expenses,profit}=date[data]
    Month.push(data)
    signups.push(sales)
}

onMounted(() => {
  const ctx = canvasRef.value.getContext('2d')

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Month,
      datasets: [{
        label: 'Yearly Signup',
        data: signups,
        borderWidth: 1,
        backgroundColor: '#10b982',
        borderColor: 'black'
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
