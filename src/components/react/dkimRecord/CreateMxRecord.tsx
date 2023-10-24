// src/components/SetupDKIMForESPs.tsx
import React, { useState } from 'react';

const CreateMxRecord: React.FC = () => {
  // Assume generatedRecord is obtained somehow
  const generatedRecord =
    'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoVtFsczFBT40TYMfEZRy6f+CP+gmxBxx9E1qQlKh3ictboYXfeebQy7Z42kjkOaCxF/Qy7v+TdnF9eY1P1MYPvzp24sRtg9dh6R4mYo+7niG87gMRvpynloB6U1Ho5M0Akj90Oi6EWK1pjGRzLLOmoNy2+0qzgnqSLEfclq4mlPoOACJz/zuc5lPbroT1UWNJVATyGVsRWxpNEXBMhY//NrGcvvwM75uJgavf+nYr1klby7t9lO+AXen/cCequWUEuJ6pZMbpjE5fReHfDbzl3ou1e64aHadbs+W+11MnoV7pfqfgMxwpey98Sa6S+076IZ/m1tgBpr3NG03yUNOiQIDAQAB;';

  const [provider, setProvider] = useState('');

  const providers = [
    {
      name: 'Google Gmail / Workspace',
      link: 'https://knowledge.workspace.google.com/kb/how-to-add-mx-records-000005563#solution',
    },
    {
      name: 'Microsoft Outlook / Office 365',
      link: 'https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide#add-an-mx-record-for-email-outlook-exchange-online',
    },
    {
      name: 'Zoho Mail',
      link: 'https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html#alink2',
    },
    {
      name: 'Amazon WorkMail',
      link: 'https://docs.aws.amazon.com/workmail/latest/adminguide/domain_verification.html',
    },
  ];

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  return (
    <>
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
            <option key={index} value={provider.name.toLowerCase().split(' ').join('')}>
              {provider.name}
            </option>
          ))}
        </select>
        <p className="mt-2">
          Don't see your platform or provider in the dropdown?{' '}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:eugene@venger.me?subject=Provider%20not%20listed&body=I%20didn't%20find%20my%20provider%20on%20the%20list.%20Please%20add%20it."
          >
            Send us{' '}
          </a>
          a message so we can add it to the list.
        </p>
      </div>
      {provider && (
        <div className="break-words">
          <p className="">
            <a
              href={providers.find((p) => p.name.toLowerCase().split(' ').join('') === provider).link}
              className="font-medium text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {providers.find((p) => p.name.toLowerCase().split(' ').join('') === provider).link}
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default CreateMxRecord;
