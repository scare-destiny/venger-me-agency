import React from 'react';
import ResultItem from './ResultItem';

interface ResultData {
  spfResult: string | null;
  sslResult: { certificateExists: boolean } | null;
  mxResult: { mxRecords: Array<{ exchange: string; priority: number }> } | null;
  dkimResult: { [key: string]: string | null };
  dmarcResult: string | null;
}

interface ResultsListProps {
  results: Array<ResultData>;
}

const isAnyDkimAvailable = (dkimResult: { [key: string]: string | null }) => {
  return Object.values(dkimResult).some((value) => value !== null);
};

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  results.forEach((result) => {
    console.log(result);
  });

  return (
    <div>
      {results.map((result, index) => (
        <div key={index} className="result-block">
          <ResultItem
            title="SPF Check"
            result={result.spfResult ? `Available ✅: ${result.spfResult}` : 'Not Available ❌'}
          />
          <ResultItem
            title="SSL Check"
            result={result.sslResult?.certificateExists ? 'Available ✅' : 'Not Available ❌'}
          />
          <ResultItem
            title="DMARC Check"
            result={result.dmarcResult ? `Available ✅: ${result.dmarcResult}` : 'Not Available ❌'}
          />
          <ResultItem
            title="MX Records"
            result={
              result.mxResult && result.mxResult.mxRecords
                ? result.mxResult.mxRecords.length > 0
                  ? result.mxResult.mxRecords
                      .map((mxRecord) => `${mxRecord.exchange} (Priority: ${mxRecord.priority})`)
                      .join(', ')
                  : 'Not Available ❌'
                : 'Not Available ❌'
            }
          />
          <ResultItem
            title="DKIM Checks"
            result={
              isAnyDkimAvailable(result.dkimResult)
                ? Object.entries(result.dkimResult)
                    .map(([selector, record]) => (record ? `${selector}: ${record}` : null))
                    .filter(Boolean)
                    .join(', ')
                : 'No DKIM records available ❌'
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
