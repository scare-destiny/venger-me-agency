// src/components/ObtainDKIMKey.tsx
import React, { useState } from 'react';

const ObtainDKIMKey: React.FC = () => {
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
    <div className="p-4">
      <h3 className="text-md font-bold  underline">Obtain your DKIM Key</h3>
      <p className="mb-2 text-md">
        Your DKIM Key can be obtained through your hosting control panel. Locating it depends on the type of control
        panel used by your hosting provider. Select the control panel type below for instructions.
      </p>
      <label className="block text-sm font-medium" htmlFor="hostingProvider">
        Hosting Provider:
      </label>
      <select
        className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 mb-6"
        id="hostingProvider"
        value={hostingProvider}
        onChange={handleHostingProviderChange}
      >
        <option value="">Select your hosting provider</option>
        <option value="cPanel">cPanel</option>
        <option value="DirectAdmin">DirectAdmin</option>
        <option value="Plesk">Plesk</option>
        {/* ... other hosting providers */}
      </select>
      {renderInstructions()}
    </div>
  );
};

export default ObtainDKIMKey;
