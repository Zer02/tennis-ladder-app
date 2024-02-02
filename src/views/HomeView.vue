<!-- src/views/HomeView.vue -->
<template>
  <div>
    <!-- <Navbar /> -->
    <button @click="simulateWeek">Simulate Week</button>
    <h1 class="title">Tennis Ranked Ladder</h1>
    <div class="centered-table">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>ELO</th>
            <th>Matches Played</th>
            <!-- <th>Wins</th>
            <th>Losses</th> -->
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="player.id">
            <td>{{ index + 1 }}</td>
            <td>
              <router-link :to="'/player/' + player.id" class="player-link">{{ player.name }}</router-link>
            </td>
            <td>{{ player.rating }}</td>
            <td>{{ player.matchesPlayed }}</td>
            <!-- <td>{{ player.wins }}</td>
            <td>{{ player.losses }}</td> -->
            <td>{{ calculateWinPercentage(player.wins, player.losses) }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { calculateWinPercentage } from '@/utils/calculateWinPercentage';
import { simulateSeason } from '@/utils/simulation'; 

export default {
  components: {
    Navbar,
  },
  data() {
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
      { id: 10, name: 'GoldenDragon', rating: 1280, matchesPlayed: 65, wins: 32, losses: 33 }
      // Add more players with accurate data...
    ];

    return {
      players,
    };
  },
  methods: {
    calculateWinPercentage,
    simulateWeek() {
      // Simulate a week of matches
      const results = simulateSeason(this.players, 5, 32); // 5 matches per week, adjust kFactor as needed

      // Update HomeView data based on the simulation results
      this.players.forEach((player, index) => {
        player.rating = results[index].rating;
        player.matchesPlayed += results[index].matchesPlayed;
        player.wins += results[index].wins;
      });

      // Update ranks based on sorted ELO ratings
      this.updateRanks();
    },
    updateRanks() {
      // Sort players based on ELO ratings
      const sortedPlayers = this.players.slice().sort((a, b) => b.rating - a.rating);

      // Update ranks based on the sorted order
      sortedPlayers.forEach((sortedPlayer, index) => {
        const originalIndex = this.players.findIndex((player) => player.name === sortedPlayer.name);
        this.$set(this.players, originalIndex, {
          ...this.players[originalIndex],
          rank: index + 1,
        });
      });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.title {
  text-align: center;
}

.centered-table {
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

.player-link {
  /* color: #3498db; */
  text-decoration: none;
}

.player-link:hover {
  text-decoration: underline;
}
</style>
