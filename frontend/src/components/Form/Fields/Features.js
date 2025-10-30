import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);

  const handleFeatureChange = (feature) => {
    const updated = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];
    setCurrentFeatures(updated);
    onFeatureChange(updated);
  };

  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold text-blue mb-3 uppercase tracking-wide">
        Funcionalidades
      </h2>
      <ul className="grid grid-cols-2 gap-2 text-blue text-xs font-medium">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Checkbox
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
