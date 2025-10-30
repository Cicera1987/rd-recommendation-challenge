// Form.js
import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { SubmitButton } from './Buttons/';

function Form({ onRecommend }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    onRecommend(dataRecommendations);
  };

  return (
    <form
      className="w-full mx-auto bg-white rounded-2xl shadow-lg p-6 border  border-water"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1">
          <Preferences
            preferences={preferences}
            onPreferenceChange={(selected) => handleChange('selectedPreferences', selected)}
          />
        </div>
        <div className="flex-1">
          <Features
            features={features}
            onFeatureChange={(selected) => handleChange('selectedFeatures', selected)}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-200 pt-4">
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
        <div className="mt-3 md:mt-0">
          <SubmitButton text="Obter recomendação" />
        </div>
      </div>
    </form>
  );
}

export default Form;
