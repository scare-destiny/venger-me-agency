import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { domainStorage } from '~/stores/domainStore';
const SPFRecordGenerator = () => {
  const [serverEmail, setServerEmail] = useState('Yes');
  const [mailServerEmail, setMailServerEmail] = useState('Yes');
  const [ipv4Addresses, setIpv4Addresses] = useState('');
  const [ipv6Addresses, setIpv6Addresses] = useState('');
  const [emailPlatform, setEmailPlatform] = useState('');
  const [emailHandling, setEmailHandling] = useState('Soft Fail');
  const [spfRecord, setSpfRecord] = useState('');

  const generateSPFRecord = () => {
    let record = 'v=spf1';
    if (serverEmail === 'Yes') record += ' mx';
    if (mailServerEmail === 'Yes') record += ' a';
    if (ipv4Addresses) record += ` ip4:${ipv4Addresses}`;
    if (ipv6Addresses) record += ` ip6:${ipv6Addresses}`;
    if (emailPlatform === 'Sendgrid') record += ' include:sendgrid.net';
    // ... other platforms
    record += emailHandling === 'Soft Fail' ? ' ~all' : emailHandling === 'Fail' ? ' -all' : ' ?all';
    setSpfRecord(record);
  };

  useEffect(() => {
    generateSPFRecord();
  }, [serverEmail, mailServerEmail, ipv4Addresses, ipv6Addresses, emailPlatform, emailHandling]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(spfRecord);
  };

  const $domain = useStore(domainStorage);

  return (
    <form>
      {/* ...form fields for each question... */}
      <div className="mb-6">
        <label htmlFor="serverEmail" className="block text-sm font-medium">
          Do you send email from your server?
        </label>
        <select
          id="serverEmail"
          name="serverEmail"
          onChange={(e) => setServerEmail(e.target.value)}
          value={serverEmail}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        >
          <option value="Yes">Yes (recommended)</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="mailServerEmail" className="block text-sm font-medium">
          Do you send email from your mail server?
        </label>
        <select
          id="mailServerEmail"
          name="mailServerEmail"
          onChange={(e) => setMailServerEmail(e.target.value)}
          value={mailServerEmail}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        >
          <option value="Yes">Yes (recommended)</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="ipv4Addresses" className="block text-sm font-medium">
          Enter any additional IPv4 addresses
        </label>
        <input
          type="text"
          id="ipv4Addresses"
          name="ipv4Addresses"
          onChange={(e) => setIpv4Addresses(e.target.value)}
          value={ipv4Addresses}
          placeholder="e.g., 192.0.2.0, 198.51.100.1"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="ipv6Addresses" className="block text-sm font-medium">
          Enter any additional IPv6
        </label>
        <input
          type="text"
          id="ipv6Addresses"
          name="ipv6Addresses"
          onChange={(e) => setIpv6Addresses(e.target.value)}
          value={ipv6Addresses}
          placeholder="e.g., 2001:db8::, 2001:db8:85a3::8a2e:370:7334"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="emailPlatform" className="block text-sm font-medium">
          Select platform or provider you use to send emails
        </label>
        <select
          id="emailPlatform"
          name="emailPlatform"
          onChange={(e) => setEmailPlatform(e.target.value)}
          value={emailPlatform}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        >
          {/* Add more platforms as needed */}
          <option value="Sendgrid">Sendgrid</option>
          <option value="Shopify">Shopify</option>
          <option value="Zendesk">Zendesk</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="emailHandling" className="block text-sm font-medium">
          How should your emails be handled?
        </label>
        <select
          id="emailHandling"
          name="emailHandling"
          onChange={(e) => setEmailHandling(e.target.value)}
          value={emailHandling}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        >
          <option value="Soft Fail">
            Soft Fail (Non-compliant email will be accepted but marked as non-compliant) - RECOMMENDED
          </option>
          <option value="Fail">Fail (Non-compliant email will be rejected)</option>
          <option value="Neutral">Neutral (All emails are accepted)</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          readOnly
          value={$domain}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        />
        <button onClick={copyToClipboard} className="ml-4 btn btn-primary cursor-pointer">
          Copy
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          readOnly
          value={spfRecord}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
        />
        <button onClick={copyToClipboard} className="ml-4 btn btn-primary cursor-pointer">
          Copy
        </button>
      </div>
    </form>
  );
};

export default SPFRecordGenerator;
