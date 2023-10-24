import React, { useState, useEffect } from 'react';

const DMARCGenerator = () => {
  const [policy, setPolicy] = useState('none');
  const [pct, setPct] = useState('');
  const [aggregateEmail, setAggregateEmail] = useState('');
  const [forensicReports, setForensicReports] = useState(false);
  const [forensicEmail, setForensicEmail] = useState('');
  const [forensicFilter, setForensicFilter] = useState('');

  const [host, setHost] = useState('');
  const [value, setValue] = useState('');

  const generateDMARC = () => {
    let record = `v=DMARC1; p=${policy}; rua=mailto:${aggregateEmail}`;
    if (policy !== 'none') {
      record += `; pct=${pct}`;
    }
    if (forensicReports) {
      record += `; ruf=mailto:${forensicEmail}`;
      if (forensicFilter) {
        record += `; ${forensicFilter}`;
      }
    }
    setHost('DMARC Record Host or Name    ');
    setValue(record);
  };

  useEffect(() => {
    generateDMARC();
  }, [policy, pct, aggregateEmail, forensicReports, forensicEmail, forensicFilter]);

  const handlePolicyChange = (e) => {
    setPolicy(e.target.value);
    setPct(''); // reset pct
  };

  return (
    <div className="pt-4">
      <h3 className="text-md font-bold  underline">Create your DMARC record</h3>
      <p className="mb-2 text-md">Answer the questions below to generate a DMARC record for your domain.</p>
      <form className="p-4">
        <div className="mb-4">
          <label>DMARC Policy</label>
          <select value={policy} onChange={handlePolicyChange} className="block w-full rounded border py-2 px-3">
            <option value="none">
              None, just collect data (recommended if you're setting up DMARC for the first time)
            </option>
            <option value="quarantine">Quarantine</option>
            <option value="reject">Reject</option>
          </select>
        </div>

        {policy !== 'none' && (
          <div className="mb-4">
            <label>What percentage of emails you want to apply this policy to?</label>
            <input
              type="number"
              value={pct}
              onChange={(e) => setPct(e.target.value)}
              className="block w-full rounded border py-2 px-3"
            />
            <p className="text-sm text-gray-500 mt-1">
              {' '}
              Start with a low percentage and increase gradually. This will allow you to slowly test stronger
              authentication policies without impacting legitimate emails. For example, you could start with 10%. That
              will instruct email providers to quarantine/reject a random 10% of emails and the remaining 90% of emails
              will not be impacted.
            </p>
          </div>
        )}

        <div className="mb-4">
          <label>Email address to receive aggregate reports</label>
          <input
            type="email"
            value={aggregateEmail}
            onChange={(e) => setAggregateEmail(e.target.value)}
            className="block w-full rounded border py-2 px-3"
          />
          <p className="text-sm text-gray-500 mt-1">
            {' '}
            If using a DMARC monitoring service they will provide a unique email address where aggregate DMARC reports
            will be sent for processing.
          </p>
        </div>

        <div className="mb-4">
          <label>
            <input
              className="mr-"
              type="checkbox"
              checked={forensicReports}
              onChange={(e) => setForensicReports(e.target.checked)}
            />
            Do you want to receive individual failure reports?
          </label>
          <p className="text-sm text-gray-500 mt-1">
            {' '}
            Individual failure reports, or Forensic Reports, are copies of individual pieces of email that fail the
            DMARC check.
          </p>

          {forensicReports && (
            <>
              <div className="mt-2">
                <label>Forensic report email</label>
                <input
                  type="email"
                  value={forensicEmail}
                  onChange={(e) => setForensicEmail(e.target.value)}
                  className="block w-full rounded border py-2 px-3"
                />
              </div>

              <div className="mt-2">
                <label>When do you want to receive forensic reports?</label>
                <select
                  value={forensicFilter}
                  onChange={(e) => setForensicFilter(e.target.value)}
                  className="block w-full rounded border py-2 px-3"
                >
                  <option value="fo=0">When both SPF and DKIM fail</option>
                  <option value="fo=1">When either SPF or DKIM fails</option>
                  <option value="fo=d">When DKIM fails</option>
                  <option value="fo=s">When SPF fails</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="mt-4">
          <label>DMARC Record Host or Name</label>
          <input readOnly value={host} className="block w-full rounded border py-2 px-3 bg-gray-200" />
        </div>

        <div className="mt-2">
          <label>DMARC Record Content or Value</label>
          <input readOnly value={value} className="block w-full rounded border py-2 px-3 bg-gray-200" />
        </div>
      </form>
    </div>
  );
};

export default DMARCGenerator;
