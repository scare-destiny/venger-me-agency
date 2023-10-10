// src/components/CheckedCount.tsx
import React from 'react';

interface CheckedCountProps {
  count: number;
  totalCount: number;
  optionalText?: string;
  onMarkAllCompleted?: () => void;
}

const CheckedCount: React.FC<CheckedCountProps> = ({ count, totalCount, optionalText, onMarkAllCompleted }) => {
  return (
    <div className="fixed z-50 bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg space-y-2">
      <div>
        <span className="text-xl font-bold">{count}</span> of <span className="text-xl font-bold">{totalCount}</span>{' '}
        completed
      </div>
      {optionalText && <div>{optionalText}</div>}
      {/* <button
        onClick={onMarkAllCompleted}
        className="bg-indigo-800 text-white rounded p-2 hover:bg-indigo-700 transition duration-200"
      >
        Mark all completed
      </button> */}
    </div>
  );
};

export default CheckedCount;
