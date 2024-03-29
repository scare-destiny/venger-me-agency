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

  const allRecordsAvailable = results.every(
    (result) =>
      result.spfResult !== null &&
      result.sslResult?.certificateExists &&
      result.dmarcResult !== null &&
      result.mxResult &&
      result.mxResult.mxRecords.length > 0 &&
      isAnyDkimAvailable(result.dkimResult)
  );

  return (
    <div>
      {results.map((result, index) => (
        <div key={index} className="result-block">
          <ResultItem
            title="SPF Check"
            result={result.spfResult ? `Available ✅: ${result.spfResult}` : 'Not Available ❌'}
          />
          {/* <ResultItem
            title="SSL Check"
            result={result.sslResult?.certificateExists ? 'Available ✅' : 'Not Available ❌'}
          /> */}
          <ResultItem
            title="DMARC Check"
            result={result.dmarcResult ? `Available ✅: ${result.dmarcResult}` : 'Not Available ❌'}
          />
          <ResultItem
            title={
              result.mxResult.mxRecords && result.mxResult.mxRecords.length > 0
                ? 'MX Record Available ✅'
                : 'MX Record Not Available ❌'
            }
            result={
              result.mxResult && result.mxResult.mxRecords
                ? result.mxResult.mxRecords.length > 0
                  ? result.mxResult.mxRecords.map((mxRecord) => `${mxRecord.exchange}`).join(', ')
                  : 'Not Available ❌'
                : 'Not Available ❌'
            }
          />
          <ResultItem
            title={isAnyDkimAvailable(result.dkimResult) && 'DKIM Record Available ✅'}
            result={
              isAnyDkimAvailable(result.dkimResult)
                ? Object.entries(result.dkimResult)
                    .map(([selector, record]) => (record ? `${selector}: ${record}` : null))
                    .filter(Boolean)
                    .join(', ')
                : 'No DKIM records available ❌'
            }
          />
          {allRecordsAvailable ? (
            <div className="notification-success pt-4">
              All records are set up. You are ready to send emails. Complete all items in the checklist below to get
              65-80% open rate!{' '}
            </div>
          ) : (
            <div className="notification-error pt-4">
              Some records are not set up. You are not ready to send emails. Complete all items in the checklist below
              to get 65-80% open rate!{' '}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
