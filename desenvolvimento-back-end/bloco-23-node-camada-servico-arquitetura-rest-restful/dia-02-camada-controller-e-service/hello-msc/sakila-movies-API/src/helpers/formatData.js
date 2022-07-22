const formatData = (data) => {
  return {
    id: data.film_id,
    title: data.title,
    releaseYear: data.release_year,
    rating: data.rating,
    extraInfos: {
      description: data.description,
      languageId: data.language_id,
      specialFeatures: data.special_features,
    },
    lastUpdate: data.last_update,
  };
};

module.exports = formatData;
