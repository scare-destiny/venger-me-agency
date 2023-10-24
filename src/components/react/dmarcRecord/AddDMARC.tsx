// src/components/AddDMARC.tsx
import React, { useState } from 'react';

const AddDMARC: React.FC = () => {
  const [hostingProvider, setHostingProvider] = useState('');

  const handleHostingProviderChange = (event) => {
    setHostingProvider(event.target.value);
  };

  const renderInstructions = () => {
    switch (hostingProvider) {
      case 'cPanel':
        return (
          <>
            <ol className="list-decimal mb-6 pl-5">
              <li>Log in to cPanel</li>
              <li>Scroll down to the Email section</li>
              <li>Click on Email Deliverability</li>
              <li>Click on Manage next to your domain</li>
              <li>Scroll down to the DKIM section</li>
              <li>Locate the Name and Value fields with the 2 values you will need to create the DKIM record</li>
              <li>
                If your hosting provider controls DNS for your domain click Install the suggested record to have the
                DKIM record automatically added
              </li>
            </ol>
            <p className="text-md my-2">
              If you see the following warning message displayed:{' '}
              <em>This system does not control DNS for this domain</em>, you'll need to manually create the DKIM record
              with your domain registrar.
            </p>
          </>
        );
      case 'DirectAdmin':
        return (
          <>
            <ol className="list-decimal mb-6 pl-5">
              <li>Log in to DirectAdmin</li>
              <li>Hover over the E-mail Manager tab</li>
              <li>Click on Email Accounts</li>
              <li>Click on the blue Enable DKIM button</li>
            </ol>
            <p className="text-md my-2">
              If your hosting provider controls DNS for your domain check if the DKIM record was successfully added to
              your DNS.
            </p>
            <ol className="list-decimal mb-6 pl-5">
              <li>Hover over the Account Manager tab</li>
              <li>Click on DNS Management</li>
              <li>You should see a TXT record with the following starting value v=DKIM1</li>
            </ol>
            <p className="text-md my-2">
              If your hosting provider doesn't manage DNS for your domain, you will need to copy and paste the contents
              of the DKIM record and manually create a new DKIM record with your domain registrar.
            </p>
          </>
        );
      case 'Plesk':
        return (
          <>
            <ol className="list-decimal mb-6 pl-5">
              <li>Log in to Plesk</li>
              <li>In the left menu click Websites & Domains</li>
              <li>Select your domain</li>
              <li>Click on the Mail tab</li>
              <li>Click on Mail Settings</li>
              <li>Scroll down and select Use DKIM spam protection system to sign outgoing email messages</li>
              <li>Click on Apply to save your changes</li>
            </ol>
            <p className="text-md my-2">
              If your hosting provider controls DNS for your domain, check if the DKIM record was successfully added to
              your DNS.
            </p>
            <ol className="list-decimal mb-6 pl-5">
              <li>In the left menu click Websites & Domains</li>
              <li>Select your domain</li>
              <li>Click on the Hosting & DNS tab</li>
              <li>Click on DNS Settings</li>
              <li>Scroll down until you locate the TXT record which starts with a value of v=DKIM1</li>
            </ol>
            <p className="text-md my-2">
              If your hosting provider doesn't manage DNS for your domain, you will need to copy and paste the contents
              of the DKIM record and manually create a new DKIM record with your domain registrar.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <h3 className="text-md font-bold  underline">Add your DMARC record</h3>
      <p className="mb-2 text-md">
        Similar to SPF and DKIM, DMARC records are created by adding a TXT record to your DNS records. Since you now
        have experience adding a TXT record you should already know what to do. Below is an example DMARC record to
        guide you.
      </p>
      <div className="mb-6">
        <label className="block text-sm font-medium" htmlFor="recordType">
          Type:
        </label>
        <input
          type="text"
          id="recordType"
          value="TXT"
          readOnly
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-slate-900 mt-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium" htmlFor="hostName">
          Host or Name:
        </label>
        <input
          type="text"
          id="hostName"
          value="_dmarc.example.com"
          readOnly
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-slate-900 mt-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium" htmlFor="ttl">
          TTL:
        </label>
        <input
          type="text"
          id="ttl"
          value="Auto"
          readOnly
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-slate-900 mt-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium" htmlFor="dkimRecord">
          Content or Value:
        </label>
        <input
          type="text"
          id="dkimRecord"
          value="v=DMARC1; p=none;"
          readOnly
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-slate-900 mt-2"
        />
      </div>
    </div>
  );
};

export default AddDMARC;
