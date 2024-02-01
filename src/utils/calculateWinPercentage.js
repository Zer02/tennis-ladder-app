export function calculateWinPercentage(wins, losses) {
  const totalMatches = wins + losses;
  return totalMatches > 0 ? ((wins / totalMatches) * 100).toFixed(2) : 0;
}