const defaultWeights = {
  audienceFit: 1.4,
  informationGain: 1.2,
  motivation: 1.1,
  sourceDepth: 1,
  timeliness: 0.8,
  conversionValue: 0.9,
  risk: -1.2
};

export function scoreTopic(topic, weights = defaultWeights) {
  const scores = topic.scores ?? {};
  const weightedTotal = Object.entries(weights).reduce((total, [key, weight]) => {
    return total + (Number(scores[key] ?? 0) * weight);
  }, 0);

  const maxPositive = Object.entries(weights)
    .filter(([, weight]) => weight > 0)
    .reduce((total, [, weight]) => total + (5 * weight), 0);

  const normalizedScore = Math.max(0, Math.min(100, Math.round((weightedTotal / maxPositive) * 100)));

  return {
    id: topic.id,
    title: topic.title,
    status: topic.status,
    normalizedScore,
    recommendation: recommend(normalizedScore, scores.risk)
  };
}

function recommend(score, risk = 0) {
  if (risk >= 4) return "review_risk_first";
  if (score >= 75) return "write_next";
  if (score >= 55) return "collect_more_sources";
  return "backlog";
}
