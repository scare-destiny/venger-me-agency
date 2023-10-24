// src/components/CreateDKIMRecord.tsx
import React from 'react';

const CreateDKIMRecord: React.FC = () => {
  // Assume generatedRecord is obtained somehow
  const generatedRecord =
    'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoVtFsczFBT40TYMfEZRy6f+CP+gmxBxx9E1qQlKh3ictboYXfeebQy7Z42kjkOaCxF/Qy7v+TdnF9eY1P1MYPvzp24sRtg9dh6R4mYo+7niG87gMRvpynloB6U1Ho5M0Akj90Oi6EWK1pjGRzLLOmoNy2+0qzgnqSLEfclq4mlPoOACJz/zuc5lPbroT1UWNJVATyGVsRWxpNEXBMhY//NrGcvvwM75uJgavf+nYr1klby7t9lO+AXen/cCequWUEuJ6pZMbpjE5fReHfDbzl3ou1e64aHadbs+W+11MnoV7pfqfgMxwpey98Sa6S+076IZ/m1tgBpr3NG03yUNOiQIDAQAB;';

  return (
    <div className="p-4">
      <h3 className="text-md font-bold  underline">Create your DKIM record</h3>
      <p className="mb-2 text-md">
        Similar to SPF records, DKIM records are created by adding a TXT record to your DNS records. Since you now have
        experience adding a TXT record you should already know what to do. Below is an example DKIM record to guide you.
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
          value="default._domainkey.example.com"
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
          value={generatedRecord}
          readOnly
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-slate-900 mt-2"
        />
      </div>
    </div>
  );
};

export default CreateDKIMRecord;
