<!-- src/views/Simulation.vue -->
<template>
  <div>
    <h1>Season Simulation</h1>
    <button @click="simulateSeason">Simulate Season</button>
    <div v-if="results.length > 0">
      <h2>Final Ratings</h2>
      <ul>
        <li v-for="player in results" :key="player.id">
          {{ player.name }}: {{ player.rating }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { simulateSeason } from '@/utils/simulation'; // Adjust the path based on your project structure

export default {
  data() {
    return {
      playerNames: [
        'Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5',
        'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10',
      ],
      results: [],
    };
  },
  methods: {
    simulateSeason() {
      this.results = simulateSeason(this.playerNames, 10, 32); // Adjust the number of games and kFactor as needed
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
