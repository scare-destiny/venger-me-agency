import React from 'react';

interface ResultsListProps {
  results: Array<{
    spfResult: boolean;
    sslResult: boolean;
    mxResult: [boolean];
    dkimResult: string | null;
    dmarcResult: string | null;
  }>;
}

function isAnyDkimAvailable(dkimResult) {
  return Object.values(dkimResult).some((value) => value !== null);
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  results.forEach((result) => {
    console.log(result.sslResult);
  });

  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <div>SPF Check: {result.spfResult ? `Available ✅: ${result.spfResult}` : 'Not Available ❌'}</div>
          <div>SSL Check: {result.sslResult ? 'Available ✅' : 'Not Available ❌'}</div>
          <div>
            DMARC Check:
            {result.dmarcResult ? `Available ✅: ${result.dmarcResult}` : 'Not Available ❌'}
          </div>
          <div>
            MX Records {result.mxResult ? `Available ✅:` : 'Not Available'}
            {result.mxResult && result.mxResult.mxRecords && result.mxResult.mxRecords.length > 0 ? (
              <ul>
                {result.mxResult.mxRecords.map((mxRecord, mxIndex) => (
                  <li key={mxIndex}>{mxRecord.exchange}</li>
                ))}
              </ul>
            ) : (
              'Not Available'
            )}
            {isAnyDkimAvailable(result.dkimResult) ? (
              <div>
                <div>DKIM Checks:</div>
                {Object.entries(result.dkimResult).map(
                  ([selector, record], dkimIndex) =>
                    record && (
                      <div key={dkimIndex}>
                        <div>Selector: {selector}</div>
                        <div>Record: {record}</div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div>No DKIM records available ❌</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
