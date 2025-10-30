import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        className="w-4 h-4 accent-blue-500 border-gray rounded-sm"
        {...props}
      />
      <span className="text-xs text-blue font-medium break-words leading-snug">{children}</span>
    </label>
  );
}

export default Checkbox;
