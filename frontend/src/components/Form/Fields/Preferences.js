// Preferences.js
import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({ preferences, selectedPreferences = [], onPreferenceChange }) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences);

  const handlePreferenceChange = (preference) => {
    const updated = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];
    setCurrentPreferences(updated);
    onPreferenceChange(updated);
  };

  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold text-blue mb-3 uppercase tracking-wide">Preferências</h2>
      <ul className="grid grid-cols-2 gap-2 text-blue text-xs font-medium">
        {preferences.map((preference, index) => (
          <li key={index} className="flex items-center gap-2">
            <Checkbox
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
