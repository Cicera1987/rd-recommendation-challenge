import React from 'react';

function FollowButton({ icon, onNext }) {
  return (
    <button
      onClick={onNext}
      className="w-12 h-12 bg-water rounded-full flex items-center justify-center text-white hover:bg-green shadow-lg hover:shadow-2xl transition-colors transition-shadow duration-300"
    >
      {icon}
    </button>
  );
}

export default FollowButton;
