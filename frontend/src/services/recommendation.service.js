const getRecommendations = (formData = {}, products = []) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;

  const scored = products
    .map((product) => {
      const score =
        product.preferences.filter((pref) => selectedPreferences.includes(pref)).length +
        product.features.filter((feat) => selectedFeatures.includes(feat)).length;

      let relevanceLevel = 'low';
      if (score >= 3) relevanceLevel = 'high';
      else if (score === 2) relevanceLevel = 'medium';

      return {
        ...product,
        score,
        relevanceLevel,
      };
    })
    .filter((product) => product.score > 0)
    .sort((a, b) => b.score - a.score);

  if (selectedRecommendationType === "SingleProduct")
    return scored.length ? [scored.pop()] : [];

  if (selectedRecommendationType === "MultipleProducts")
    return scored;

  return [];
};

export default { getRecommendations };