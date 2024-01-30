// src/utils/simulation.js

// ELO Calculation Function
export function calculateELO(playerRating, opponentRating, outcome, kFactor) {
  const expectedScore = 1 / (1 + 10 ** ((opponentRating - playerRating) / 400));
  const actualScore = outcome === 'win' ? 1 : outcome === 'draw' ? 0.5 : 0;
  const newRating = playerRating + kFactor * (actualScore - expectedScore);

  return Math.round(newRating);
}

// Season Simulation Function
export function simulateSeason(playerNames, numGames, kFactor) {
  const players = playerNames.map((name, index) => ({ id: index + 1, name, rating: 1500 }));
  const results = [];

  // Simulate season
  for (let game = 0; game < numGames; game++) {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    // Simulate each match in the season
    for (let i = 0; i < shuffledPlayers.length - 1; i += 2) {
      const player1 = shuffledPlayers[i];
      const player2 = shuffledPlayers[i + 1];

      // Simulate match outcome (assuming win, draw, or loss for simplicity)
      const outcome = Math.random() > 0.5 ? 'win' : Math.random() > 0.8 ? 'draw' : 'loss';

      // Update ELO ratings based on match outcome
      player1.rating = calculateELO(player1.rating, player2.rating, outcome, kFactor);
      player2.rating = calculateELO(
        player2.rating,
        player1.rating,
        outcome === 'win' ? 'loss' : outcome === 'draw' ? 'draw' : 'win',
        kFactor
      );
    }
  }

  // Return the final ratings after the season
  return players.map((player) => ({ ...player }));
}
