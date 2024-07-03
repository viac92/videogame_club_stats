<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import {
  playerTotalPresenceData,
  playedGamesData, 
  playersPresenceByDayData, 
  playedGamesGenresData, 
} from './data.js';

const playerTotalPresenceConfig = {
  type: 'bar',
  data: playerTotalPresenceData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

const playedGameConfig = {
  type: 'doughnut',
  data: playedGamesData,
};

const playersPresenceByDayConfig = {
  type: 'line',
  data: playersPresenceByDayData,
};

const playedGamesGenresConfig = {
  type: 'radar',
  data: playedGamesGenresData,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }, 
    scales: {
      r: {
        beginAtZero: true
      }
    }
  },
};

onMounted(() => {
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, playerTotalPresenceConfig);
  
  const ctxDoughnut = document.getElementById('myChartDoughnut').getContext('2d');
  new Chart(ctxDoughnut, playedGameConfig);

  const ctxLine = document.getElementById('myChartLine').getContext('2d');
  new Chart(ctxLine, playersPresenceByDayConfig);

  const ctxRadar = document.getElementById('myChartRadar').getContext('2d');
  new Chart(ctxRadar, playedGamesGenresConfig);
});
</script>
<template>
  <div class="container">
    <div style="text-align: center;">
      <h1>Videogame Club Stats</h1>
    </div>
    <div class="graph">
      <div style="text-align: center;">
        <h2>Presenza Totali</h2>
      </div>
      <canvas id="myChart"></canvas>
    </div>
    <div class="graph">
      <div style="text-align: center;">
        <h2>Presenze Settimanali</h2>
      </div>
      <canvas id="myChartLine"></canvas>
    </div>
    <div class="graph">
      <div style="text-align: center;">
        <h2>Titoli Giocati</h2>
      </div>
      <canvas id="myChartDoughnut"></canvas>
    </div>
    <div class="graph">
      <div style="text-align: center;">
        <h2>Generi Giocati</h2>
      </div>
      <canvas id="myChartRadar"></canvas>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15%;
  padding-right: 15%;
}
.graph {
  width: 100%;
  min-width: 350px;
  max-width: 700px;
  margin-top: 30px;
}
</style>
