import React from 'react';

interface ResultItemProps {
  title: string;
  result: any;
}

const ResultItem: React.FC<ResultItemProps> = ({ title, result }) => {
  const isAvailable = result !== null && result !== undefined && result !== '';
  return (
    <div className="result-item">
      <div className="result-header">
        <span className="result-title font-bold">{title}</span>
        {/* <span className={`result-status ${isAvailable ? 'success' : 'error'}`}>{isAvailable ? '✅' : '❌'}</span> */}
      </div>
      <div className="result-body overflow-scroll">{isAvailable ? result : 'Record not available'}</div>
    </div>
  );
};

export default ResultItem;
