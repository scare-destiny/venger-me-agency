import React from 'react';

interface ResultsListProps {
  results: Array<{ spfResult: boolean; sslResult: boolean; mxResult: [boolean] }>;
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  console.log(results);
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <div>SPF Check: {result.spfResult ? `Available: ${result.spfResult}` : 'Not Available'}</div>
          <div>SSL Check: {result.sslResult ? 'Available' : 'Not Available'}</div>
          <div>
            MX Check:
            {result.mxResult && result.mxResult.mxRecords && result.mxResult.mxRecords.length > 0 ? (
              <ul>
                {result.mxResult.mxRecords.map((mxRecord, mxIndex) => (
                  <li key={mxIndex}>{mxRecord.exchange}</li>
                ))}
              </ul>
            ) : (
              'Not Available'
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
