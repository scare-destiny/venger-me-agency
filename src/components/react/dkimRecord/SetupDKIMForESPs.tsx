// src/components/SetupDKIMForESPs.tsx
import React, { useState } from 'react';

const SetupDKIMForESPs: React.FC = () => {
  // Assume generatedRecord is obtained somehow
  const generatedRecord =
    'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoVtFsczFBT40TYMfEZRy6f+CP+gmxBxx9E1qQlKh3ictboYXfeebQy7Z42kjkOaCxF/Qy7v+TdnF9eY1P1MYPvzp24sRtg9dh6R4mYo+7niG87gMRvpynloB6U1Ho5M0Akj90Oi6EWK1pjGRzLLOmoNy2+0qzgnqSLEfclq4mlPoOACJz/zuc5lPbroT1UWNJVATyGVsRWxpNEXBMhY//NrGcvvwM75uJgavf+nYr1klby7t9lO+AXen/cCequWUEuJ6pZMbpjE5fReHfDbzl3ou1e64aHadbs+W+11MnoV7pfqfgMxwpey98Sa6S+076IZ/m1tgBpr3NG03yUNOiQIDAQAB;';

  const [provider, setProvider] = useState('');

  const providers = [
    {
      name: 'Active Campaign',
      link: 'https://help.activecampaign.com/hc/en-us/articles/206903370-SPF-DKIM-and-DMARC-Authentication#dkim',
    },
    {
      name: 'Amazon SES',
      link: 'https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dkim-easy-setup-domain.html',
    },
    {
      name: 'AuthSMTP',
      link: 'https://www.authsmtp.co.uk/faqs/faq-81.html',
    },
    {
      name: 'AWeber',
      link: 'https://help.aweber.com/hc/en-us/articles/360023682313-How-do-I-set-up-DKIM-and-SPF-records-for-my-domain-',
    },
    {
      name: 'Benchmark',
      link: 'https://kb.benchmarkemail.com/en/set-email-domain-authentication/',
    },
    {
      name: 'ConstantContact',
      link: 'https://knowledgebase.constantcontact.com/articles/KnowledgeBase/5932-self-publishing-for-authentication?lang=en_US',
    },
    {
      name: 'ConvertKit',
      link: 'https://help.convertkit.com/en/articles/2502558-using-a-verified-domain-for-email-sending',
    },
    {
      name: 'Elastic Email',
      link: 'https://help.elasticemail.com/en/articles/2281323-how-to-verify-your-domain',
    },
    {
      name: 'Fastmail',
      link: 'https://www.fastmail.com/help/receive/domains-advanced.html#dkimconfig',
    },
    {
      name: 'GetResponse',
      link: 'https://www.getresponse.com/help/working-with-messages/understanding-deliverability/what-is-dkim-and-how-do-i-configure-it.html',
    },
    {
      name: 'Google Workspace (GSuite)',
      link: 'https://support.google.com/a/answer/180504',
    },
    {
      name: 'Infusionsoft',
      link: 'https://help.infusionsoft.com/help/dkim#set-up-dkim',
    },
    {
      name: 'iContact',
      link: 'https://kb.icontact.com/hc/en-us/articles/360025667951-DKIM-SPF-and-DMARC-Information',
    },
    {
      name: 'MailChimp',
      link: 'https://mailchimp.com/help/set-up-email-domain-authentication/',
    },
    {
      name: 'Mailerlite',
      link: 'https://help.mailerlite.com/article/show/29280-how-to-verify-and-authenticate-your-domain#chapter3',
    },
    {
      name: 'Mailjet',
      link: 'https://www.mailjet.com/blog/news/setting-up-dkim-step-by-step/#mailjet',
    },
    {
      name: 'MailGun',
      link: 'https://documentation.mailgun.com/en/latest/user_manual.html#verifying-your-domain',
    },
    {
      name: 'Mailfence',
      link: 'https://kb.mailfence.com/kb/set-up-anti-spoofing-defense-custom-domain/',
    },
    {
      name: 'MailRoute',
      link: 'https://support.mailroute.net/hc/en-us/articles/115009100687-Implementing-DKIM',
    },
    {
      name: 'Mailkit',
      link: 'https://medium.com/@thomas.malicet/sending-emails-with-net-core-using-mailkit-with-dkim-signature-e26af947691c',
    },
    {
      name: 'Mandrill',
      link: 'https://mailchimp.com/developer/transactional/docs/authentication-delivery/#authentication',
    },
    {
      name: 'Moosend',
      link: 'https://docs.moosend.com/users/moosend/en/enable-spf-and-dkim.html',
    },
    {
      name: 'Office 365',
      link: 'https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/use-dkim-to-validate-outbound-email?view=o365-worldwide',
    },
    {
      name: 'Pepipost',
      link: 'https://netcorecloud.com/tutorials/dkim/',
    },
    {
      name: 'Postmark',
      link: 'https://postmarkapp.com/guides/dkim',
    },
    {
      name: 'ProtonMail',
      link: 'https://protonmail.com/support/knowledge-base/email-authentication/',
    },
    {
      name: 'SendGrid',
      link: 'https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication/',
    },
    {
      name: 'SendinBlue',
      link: 'https://help.sendinblue.com/hc/en-us/articles/208261329-How-to-configure-DKIM-and-SPF',
    },
    {
      name: 'SMTP2GO',
      link: 'https://www.smtp2go.com/setupguide/dkim_domain_keys/',
    },
    {
      name: 'SocketLabs',
      link: 'https://help.socketlabs.com/docs/dkim-authentication',
    },
    {
      name: 'Zoho Mail',
      link: 'https://www.zoho.com/mail/help/adminconsole/dkim-configuration.html',
    },
    {
      name: '1&1 IONOS',
      link: 'https://www.ionos.com/help/email/glossary-email-terms-explained/dkim-domainkeys-identified-mail/',
    },
  ];

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  return (
    <div className="">
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
        <div>
          <p className="">
            <a
              href={providers.find((p) => p.name.toLowerCase().split(' ').join('') === provider).link}
              className='font-medium text-primary hover:underline"'
              target="_blank"
              rel="noopener noreferrer"
            >
              {providers.find((p) => p.name.toLowerCase().split(' ').join('') === provider).link}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default SetupDKIMForESPs;
