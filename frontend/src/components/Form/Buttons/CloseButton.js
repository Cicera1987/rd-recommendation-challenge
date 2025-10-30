import React from 'react';

function CloseButton({ text, onClose }) {
  return (
    <button
      onClick={onClose}
      className="px-4 py-2 bg-water rounded-lg border-r-2 border-r-blue hover:bg-green transition flex items-center justify-center gap-2"
    >
      {text}
    </button>
  );
}

export default CloseButton;
