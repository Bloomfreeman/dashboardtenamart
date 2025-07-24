<template>
  <div class="w-full md:h-64 lg:mt-9">
    <canvas ref="canvasRef" class=" w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import axios from 'axios'

const canvasRef = ref(null)
const userD=ref([])
let male=0;
let female=0;

onMounted(async() => {
    const response = await axios.get('http://localhost:5000/Users');
    userD.value=response.data;
    for (let user in userD._rawValue){
      let value=userD._rawValue[user]
      if (value.Gender ==='M'){
          male+=1;
      }else{
        female+=1;
      }
    }
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
