<!-- src/views/PlayerProfileView.vue -->
<template>
  <div>
    <Navbar />
    <h1 class="title">Player Profile</h1>
    <div>
      <h2>{{ player.name }}</h2>
      <p>ELO: {{ player.rating }}</p>
      <p>Matches Played: {{ player.matchesPlayed }}</p>
      <p>Wins: {{ player.wins }}</p>
      <p>Losses: {{ player.losses }}</p>
      <p>Win Percentage: {{ calculateWinPercentage(player.wins, player.losses) }}%</p>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      player: null,
    };
  },
  created() {
    // Fetch player data based on the route parameter (player id)
    const playerId = this.$route.params.id;
    this.player = this.getPlayerById(playerId);
  },
  methods: {
    getPlayerById(playerId) {
      // Replace this with your actual player data fetching logic
      const players = [
        { id: 1, name: 'SwiftTiger', rating: 1500, matchesPlayed: 50, wins: 25, losses: 25 },
        { id: 2, name: 'CleverLion', rating: 1480, matchesPlayed: 45, wins: 22, losses: 23 },
        { id: 3, name: 'MightyEagle', rating: 1450, matchesPlayed: 40, wins: 20, losses: 20 },
        { id: 4, name: 'RadiantDragon', rating: 1420, matchesPlayed: 55, wins: 28, losses: 27 },
        { id: 5, name: 'GoldenPhoenix', rating: 1380, matchesPlayed: 60, wins: 30, losses: 30 },
        { id: 6, name: 'SwiftLion', rating: 1360, matchesPlayed: 48, wins: 24, losses: 24 },
        { id: 7, name: 'CleverEagle', rating: 1340, matchesPlayed: 42, wins: 21, losses: 21 },
        { id: 8, name: 'MightyPhoenix', rating: 1320, matchesPlayed: 38, wins: 19, losses: 19 },
        { id: 9, name: 'RadiantTiger', rating: 1300, matchesPlayed: 58, wins: 29, losses: 29 },
        { id: 10, name: 'GoldenDragon', rating: 1280, matchesPlayed: 65, wins: 32, losses: 33 },
      ];

      return players.find(player => player.id === parseInt(playerId));
    },
    calculateWinPercentage(wins, losses) {
      const totalMatches = wins + losses;
      return totalMatches > 0 ? ((wins / totalMatches) * 100).toFixed(2) : 0;
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.title {
  text-align: center;
}

/* Add any additional styling for the player profile page */
</style>
