// src/components/SetupDKIMForESPs.tsx
import React, { useState } from 'react';

const SetupDKIMForESPs: React.FC = () => {
  // Assume generatedRecord is obtained somehow
  const generatedRecord =
    'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoVtFsczFBT40TYMfEZRy6f+CP+gmxBxx9E1qQlKh3ictboYXfeebQy7Z42kjkOaCxF/Qy7v+TdnF9eY1P1MYPvzp24sRtg9dh6R4mYo+7niG87gMRvpynloB6U1Ho5M0Akj90Oi6EWK1pjGRzLLOmoNy2+0qzgnqSLEfclq4mlPoOACJz/zuc5lPbroT1UWNJVATyGVsRWxpNEXBMhY//NrGcvvwM75uJgavf+nYr1klby7t9lO+AXen/cCequWUEuJ6pZMbpjE5fReHfDbzl3ou1e64aHadbs+W+11MnoV7pfqfgMxwpey98Sa6S+076IZ/m1tgBpr3NG03yUNOiQIDAQAB;';

  const [provider, setProvider] = useState('');

  const providers = [
    'Active Campaign',
    'Amazon SES',
    'AuthSMTP',
    'AWeber',
    'Benchmark',
    'ConstantContact',
    'ConvertKit',
    'Elastic Email',
    'Fastmail',
    'GetResponse',
    'Google Workspace (GSuite)',
    'Infusionsoft',
    'iContact',
    'MailChimp',
    'Mailerlite',
    'Mailjet',
    'MailGun',
    'Mailfence',
    'MailRoute',
    'Mailkit',
    'Mandrill',
    'Moosend',
    'Marketo',
    'Mimecast',
    'Office 365',
    'Postmark',
    'SendGrid',
    'Shopify',
    'Sendinblue',
    'Salesforce',
    'Zendesk',
    'Zoho Mail',
    'Zoho Campaigns',
  ];

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  return (
    <div className="p-4">
      <h3 className="text-md font-bold underline">Setup DKIM for Email Service Providers</h3>
      <p className="mb-2 text-md">
        If you send email through an email marketing platform or email delivery provider; you need to setup DKIM records
        for them as well.
      </p>
      <div className="mb-6">
        <label className="block text-sm font-medium" htmlFor="espdkim">
          Select platform or provider:
        </label>
        <select
          id="espdkim"
          value={provider}
          onChange={handleProviderChange}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 mt-2"
        >
          <option value="">Select platform or provider</option>
          {providers.map((provider, index) => (
            <option key={index} value={provider.toLowerCase().split(' ').join('')}>
              {provider}
            </option>
          ))}
        </select>
      </div>
      <p>WIP 🔨 </p>
    </div>
  );
};

export default SetupDKIMForESPs;
