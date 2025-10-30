import React from 'react';
import { Follow } from '../../assets';


function OpenDrawerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white hover:bg-pink transition shadow-lg"
    >
      <Follow />
    </button>
  );
}

export default OpenDrawerButton;
