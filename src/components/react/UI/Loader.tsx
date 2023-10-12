import React from 'react';

// Loader.tsx
const Loader: React.FC = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loader;
