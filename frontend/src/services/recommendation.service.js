const getRecommendations = (formData = {}, products = []) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;

  const scoredProducts = products.map((product) => {
    const preferenceMatches = product.preferences.filter((p) =>
      selectedPreferences.includes(p)
    ).length;
    const featureMatches = product.features.filter((f) =>
      selectedFeatures.includes(f)
    ).length;

    return {
      ...product,
      score: preferenceMatches + featureMatches,
    };
  });

  const matched = scoredProducts.filter((p) => p.score > 0);

  if (selectedRecommendationType === 'SingleProduct') {
    const sorted = matched.sort((a, b) => a.score - b.score);
    const best = sorted[sorted.length - 1];
    return best ? [best] : [];
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    return matched.sort((a, b) => b.score - a.score);
  }

  return [];
};

export default { getRecommendations };
