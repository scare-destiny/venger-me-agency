// @ts-ignore
interface Task {
  id: string;
  description: string;
  content?: ContentBlock[];
}

interface ChecklistItem {
  id: string;
  title: string;
  tasks: Task[];
}

interface ContentBlock {
  type: 'text' | 'disclaimer' | 'list' | 'image' | 'table' | 'subtask' | 'html' | 'playful';
  data: string | ListItem[] | ImageData | TableData | Subtask | PlayfulData;
}

interface ListItem {
  text: string;
}

interface ImageData {
  src: string;
  alt?: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

interface Subtask {
  id: string;
  description: string;
  content?: ContentBlock[];
}

interface PlayfulData {
  title: string;
  subtitle?: string;
  emoji?: string; // or icon?: string; if you prefer icons
}

const checklistItems: ChecklistItem[] = [
  {
    id: '1',
    title: 'Authentication',
    tasks: [
      {
        id: '1.1',
        description: 'Set up an SPF record for your domain',
        content: [
          {
            type: 'text',
            data: 'An SPF (Sender Policy Framework) record defines which IP addresses have the permission to transmit emails from your domain. Answer the questions to generate an SPF record.',
          },
        ],
      },
      {
        id: '1.2',
        description: 'Set up a DKIM record for your domain',
        content: [
          {
            type: 'text',
            data: 'DomainKeys Identified Mail (DKIM) assists email providers in spotting forged sender addresses in emails, a common tactic in phishing and spam. Emails failing authentication are prone to being directed to the spam or junk mail folder. Adhere to the directions below to acquire your DKIM Key and insert a DKIM record to your DNS entries.',
          },
          {
            type: 'playful',
            data: {
              emoji: '🔨',
              title: 'In Progress',
              subtitle:
                'Keep an eye out! Before you know it, this section will navigate you through the DKIM record setup.',
            },
          },
        ],
      },
      {
        id: '1.3',
        description: 'Set up a DMARC record for your domain',
        content: [
          {
            type: 'text',
            data: "A DMARC (Domain-based Message Authentication, Reporting & Conformance) record allows senders to indicate that their emails are safeguarded by SPF and/or DKIM, and furnish instructions for scenarios where neither authentication methods are passed. Ensure your SPF and DKIM records are in place before employing DMARC. Transitioning to DMARC compliance is more than a mere addition of a TXT record to your DNS entries. It's an endeavor that might span several weeks to months, contingent on your email sending volume, and the email marketing platform or delivery provider you are using.",
          },
          {
            type: 'playful',
            data: {
              emoji: '🔨',
              title: 'In Progress',
              subtitle: "Hang in there! Shortly, you'll find instructions here on devising your DMARC policy.",
            },
          },
        ],
      },
      {
        id: '1.4',
        description: 'Send emails via a secure SSL/TLS connection',
        content: [
          {
            type: 'text',
            data: "Possessing an SSL certificate facilitates the transmission of emails through a secure SSL/TLS connection. It encrypts and fortifies the connection between your mail server and the recipient's mail server, playing a crucial role in establishing your sender score and reputation with email service providers. If you don't have an SSL certificate, reach out to your hosting provider, or opt for the CloudFlare Free Plan encompassing a complimentary SSL certificate.",
          },
        ],
      },
      {
        id: '1.5',
        description: 'Set up MX records for your domain',
        content: [
          {
            type: 'text',
            data: 'MX (Mail Exchange) records guide email systems on where to deliver messages. Absence of precise MX records can result in emails being misplaced or bounced back, akin to sending a letter with an incorrect address. Lack of an MX record can also signal to mailbox providers a non-adherence to email norms by the sender, culminating in delivery hurdles or being tagged as spam. Choose a mailbox provider from the dropdown for step-by-step guidance on establishing MX records.',
          },
          {
            type: 'playful',
            data: {
              emoji: '🔨',
              title: 'In Progress',
              subtitle:
                'In a short while, this space will be enriched with more content aiding you in setting up your MX record.',
            },
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Infrastructure',
    tasks: [
      {
        id: '2.1',
        description: ' Use the correct tool to send email',
        content: [
          {
            type: 'text',
            data: "Email Marketing Platforms assist users in sending emails to subscribers or prospective customers, while Email Delivery Providers facilitate the sending of transactional emails to existing customers. There are further classifications within Email Marketing Platforms, namely Inbound and Outbound. It's crucial to choose the right tool as misusing them for incorrect types of email could lead to account suspension.",
          },
          {
            type: 'table',
            data: {
              headers: [
                'Transactional',
                'Delivery Services',
                'Inbound',
                'Marketing Automation Software',
                'Outbound',
                'Sales Outreach Software',
              ],
              rows: [
                [
                  'Welcome message, sales invoice, comment alerts or account confirmation',
                  'Amazon SES, Postmark, Mailgun, Mailjet, SendGrid',
                  'Newsletters or information emails triggered by user request (via a single or double opt-in form)',
                  'ActiveCampaign, Sendinblue, Hubspot, Mailchimp, ConvertKit, Campaign Monitor, Klaviyo, Drip, Bento',
                  'Sales pitches or cold emails',
                  'Lemlist, Reply.io, Outreach.io, MailShake, SmartReach',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '2.2',
        description: 'Choose an email marketing platform with batch delivery scheduling capability',
        content: [
          {
            type: 'text',
            data: "When sending marketing emails, it's advisable to select a platform that allows batch sending. Depending on your contact list size, gradually release the emails over a span of hours or days rather than a mass send-out, to avoid overwhelming recipients.",
          },
        ],
      },
      {
        id: '2.3',
        description: 'Determine the suitable type of IP address',
        content: [
          {
            type: 'text',
            data: 'Choose between a shared or dedicated IP address. A shared IP is utilized by numerous senders whereas a dedicated IP is exclusively yours. For sending volumes less than 50,000 per month, a shared IP suffices, although some lower volume senders migrate to a dedicated IP for better control over their reputation. For volumes exceeding 50,000 per month, a dedicated IP or multiple is advisable. Many email marketing and delivery platforms provide dedicated IPs for an additional charge. This consideration is advisable for newsletters or transactional emails. For cold email campaigns, the IP address provided by your mail provider (e.g., Google Workspace, Office365, AWS WorkMail, Zoho) is adequate.',
          },
        ],
      },
      {
        id: '2.4',
        description: 'Separate email address, subdomain, and IP address for transactional and marketing emails',
        content: [
          {
            type: 'text',
            data: "The reputations of the IP address, domain, and email address significantly influence the delivery of emails into your customer's inbox rather than being flagged as spam or relegated to the Promotions tab by platforms like Google. Email providers prioritize transactional emails but distinguishing between transactional and marketing emails can be challenging.",
          },
          {
            type: 'text',
            data: 'Utilizing distinct email addresses, subdomains, and IP addresses for each email type increases the likelihood of your crucial emails reaching customers. It also safeguards your regular correspondence or transactional emails from any adverse effects caused by marketing campaigns that might tarnish the domain or IP reputation.',
          },
          {
            type: 'table',
            data: {
              headers: ['Standard Emails', 'Transactional Emails', 'Marketing Emails'],
              rows: [
                ['Your Server IP Address', 'Delivery Provider IP Address', 'Marketing Platform IP Address'],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '2.5',
        description: 'Subscribe to feedback loops',
        content: [
          {
            type: 'text',
            data: "How can you ascertain when an email has been flagged as spam by a recipient, and what measures can be taken? By enrolling in feedback loops, email providers will alert you when an email has been marked as spam by a recipient. It's necessary to set up individual feedback loops for each email provider you're sending to. Below are the links to sign up for feedback loops with popular email providers.",
          },
          {
            type: 'table',
            data: {
              headers: [
                'Postmaster Tools by Gmail',
                'Microsoft Junk Mail Reporting Program',
                'Yahoo Mail Complaint Feedback Loop',
                'Other Feedback Loop Listings',
              ],
              rows: [
                [
                  'https://www.gmail.com/postmaster/',
                  'https://postmaster.live.com/snds/JMRP.aspx (Only for dedicated IP address)',
                  'https://io.help.yahoo.com/contact/',
                  'https://glockapps.com/isp-feedback-loops/',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '2.6',
        description: 'Set up a custom tracking domain',
        content: [
          {
            type: 'text',
            data: 'Setting up custom tracking domains is paramount when using an email marketing platform for sending. Unlike the default tracking domain of the platform, custom tracking domains employ your domain for action tracking (like opens, link clicks, and unsubscribes), thus insulating your reputation from other users on the same platform.',
          },
          {
            type: 'text',
            data: 'For instance, if a spammer utilizes MailChimp and the spam emails carry the default MailChimp tracking domain, a domain-based spam blacklist may list it, and if your emails share this tracking domain, your email deliverability could be compromised.',
          },
          {
            type: 'text',
            data: 'The process to create a custom tracking domain includes adding a CNAME record to your DNS entries. Most email marketing platforms facilitate the creation of custom tracking domains and provide detailed instructions.',
          },
        ],
      },
      {
        id: '2.7',
        description: 'Set up postmaster and abuse role email accounts',
        content: [
          {
            type: 'text',
            data: "It's a sound practice, and sometimes a requisite by certain email providers, to have designated role email accounts like postmaster and abuse. These accounts serve to receive abuse complaints, necessitating regular monitoring and prompt resolution of all reported issues.",
          },
          {
            type: 'table',
            data: {
              headers: ['Postmaster Email', 'Abuse Email'],
              rows: [
                ['postmaster@example.com', 'abuse@example.com'],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '2.8',
        description: 'Avoid using free email addresses',
        content: [
          {
            type: 'text',
            data: 'It\'s not advisable to use a free webmail address as your "From" address. This includes email addresses from Yahoo, AOL, Outlook/Hotmail or Gmail. It\'s better to use an email address that\'s registered at your organization\'s own domain. When you send an email through an email marketing platform, email providers often see free webmail "From" addresses as more suspicious compared to those from custom domains. This perception can increase the likelihood of emails from those addresses being rejected.',
          },
        ],
      },
      // ...other tasks
    ],
  },
  {
    id: '3',
    title: 'Reputation',
    tasks: [
      {
        id: '3.1',
        description: 'Inspect if your domain or IP is on a blacklist',
        content: [
          {
            type: 'text',
            data: "Examine your domain and IP address on known spam blacklists to verify if you've been blacklisted. If that's the case, request to be removed from the list. If you're utilizing an email delivery provider, make sure to inspect the outbound sending IP addresses linked to your account.",
          },
          {
            type: 'table',
            data: {
              headers: ['Spamhaus', 'Spamcop', 'SURBL', 'DNSBL.info', 'MX Toolbox'],
              rows: [
                [
                  'https://check.spamhaus.org/',
                  'https://www.spamcop.net/bl.shtml',
                  'http://www.surbl.org/surbl-analysis',
                  'https://www.dnsbl.info/dnsbl-list.php',
                  'https://mxtoolbox.com/blacklists.aspx',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '3.2',
        description: 'Evaluate your IP address reputation',
        content: [
          {
            type: 'text',
            data: 'The Talos Reputation Center gives a reputation score categorized into Good, Neutral, and Poor. Aim for an Email Reputation score of Neutral or Good.',
          },
          {
            type: 'text',
            data: 'Barracuda Central keeps a track record of IP addresses for both known spammers and senders with proper email practices.',
          },
          {
            type: 'text',
            data: "Sender Score offers a free email reputation assessment service from Validity. It showcases the trustworthiness of an email sender's IP address.",
          },
          {
            type: 'table',
            data: {
              headers: ['Talos Intelligence', 'Barracuda Central', 'Sender Score'],
              rows: [
                [
                  'https://talosintelligence.com/reputation_center/',
                  'https://www.barracudacentral.org/lookups/lookup-reputation',
                  'https://senderscore.org/get-your-score/',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '3.3',
        description: 'Warm up your domain and IP address',
        content: [
          {
            type: 'text',
            data: 'Begin by sending a low volume of emails, gradually increasing the send rate to warm up the sending IP addresses associated with your domain. The goal is to establish a good IP and domain reputation with email providers. Here are a few common scenarios.',
          },
        ],
      },
      // ...other tasks
    ],
  },
  {
    id: '4',
    title: 'List Quality',
    tasks: [
      {
        id: '4.1',
        description: 'Clean your contact list',
        content: [
          {
            type: 'html',
            data: `
    <p class='py-2'>Sending emails to addresses that bounce will negatively affect your sender score and reputation with email providers, hence it's crucial to confirm your contacts' email addresses.</p>
    

            If your contacts were obtained via a double opt-in method, there's no need to validate as they have already been confirmed through the double opt-in process (double opt-in is when a user confirms their email address after filling out a form or subscribing to your newsletter).
             
            <p class='py-2'>An email validation service helps filter out fake, disposable, catch-all, and spam trap email addresses. A simple Google search for 
            <a class='text-blue-600' href="https://en.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer">
            email list validation
            </a> will reveal companies offering this service. Some email marketing platforms provide this service automatically when you import your list or offer it for an additional fee.</p>
            `,
          },
        ],
      },
      {
        id: '4.2',
        description: 'Send emails to personal or business addresses',
        content: [
          {
            type: 'text',
            data: 'Avoid sending marketing emails to generic or role-based email addresses, instead, aim for personal or business email addresses of individuals.',
          },
          {
            type: 'table',
            data: {
              headers: [
                'Sales Department',
                'Chief Executive Officer',
                'John Doe, CEO Company Email',
                'John Doe Personal Email',
              ],
              rows: [
                ['sales@example.com ❌', 'ceo@example.com ❌', 'john.doe@example.com ✔️', 'john.doe@gmail.com ✔️'],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '4.3',
        description: 'Avoid spam traps',
        content: [
          {
            type: 'text',
            data: 'Spam traps are email addresses utilized by email providers and blocklist operators to catch senders who disregard email best practices. They come in two varieties:',
          },
          {
            type: 'table',
            data: {
              headers: ['Pristine', 'Recycled'],
              rows: [
                [
                  "Pristine spam traps are email addresses that have never been legitimate and could not have opted into receiving email. They are placed on public websites but hidden in the site's code. They aim to catch email marketers with poor list building practices like scraping sites for emails or buying contact lists.",
                  "Recycled spam traps were valid email addresses at one point but have since been repurposed by their provider. This type of spam trap might end up on your sending list if: 1) Your list is over a year old. 2) You don't email your list frequently or 3) There are mistyped or invalid addresses on your list.",
                ],
                // ... other rows
              ],
            },
          },
          {
            type: 'text',
            data: "The consequences of hitting spam traps differ based on the type. Landing on a pristine spam trap is more detrimental than a recycled trap. If you've emailed a pristine spam trap, your domain or sending IP address could be blocklisted instantly. Regular hits on recycled spam traps could lead to your emails being directed to the junk folder. To keep away from spam traps, clean your contact lists routinely.",
          },
        ],
      },
      {
        id: '4.4',
        description: 'Discard fake & bounced email addresses',
        content: [
          {
            type: 'text',
            data: "A high number of bounced emails, similar to spam complaints, tarnish your reputation which in turn affects email deliverability. When you send an email to a fake address, it comes back with a hard-bounce message. By removing fake and bounced email addresses during your list cleaning, the count and percentage of bounces will decrease in your future sends. Bounced emails come in two varieties: Hard and Soft. Hard bounces occur because the domain name is non-existent, the email address is invalid, or the delivery is blocked by the email server. Most email marketing platforms will automatically clean out hard-bounced email addresses from your list but retain soft-bounces. Soft-bounces generally occur because the recipient's email account has reached its storage limit. It's worth noting that if soft bounces happen consistently, they'll eventually turn into hard bounces.",
          },
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Content Quality',
    tasks: [
      {
        id: '5.1',
        description: 'Avoid Complex HTML',
        content: [
          {
            type: 'text',
            data: "Most email providers don't support all HTML content types found on the web. Unlike web browsers that can display scripts, animations, and complex navigation menus, typical email inboxes aren't designed to handle such content. For outbound email marketing campaigns (cold emails), it's advisable to craft simple email content with links only. For inbound marketing campaigns (newsletters), you can be a bit more creative but should steer clear of complex HTML.",
          },
          {
            type: 'table',
            data: {
              headers: ['Safe to use ✔️', 'Avoid ❌'],
              rows: [
                [
                  'Static or table-based layouts, HTML tables & nested tables, template width of 600px-800px or simple, inline CSS',
                  'JavaScript, iframe, Flash, embedded audio, embedded video, forms or div layering',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '5.2',
        description: 'Utilize Secure HTTPS Links Only',
        content: [
          {
            type: 'text',
            data: 'Ensure to use secure HTTPS links when linking to images or websites in your email body. Unsecured links can cause emails to be flagged as insecure by email providers, potentially leading to them being blocked or relegated to the junkmail folder.',
          },
          {
            type: 'table',
            data: {
              headers: ['http://www.yourdomain.com', 'https://www.yourdomain.com'],
              rows: [
                ['Not secure ❌', 'Secure ✔️'],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '5.3',
        description: 'Keep Signatures Simple',
        content: [
          {
            type: 'text',
            data: "Although having signatures with your logo and social media links is fine for regular correspondence, it's not ideal for transactional or marketing email campaigns. A simpler signature with your name, job title, company, and website link is preferable. The aim is to minimize the number of links in your email body. Additionally, ensure to include an opt-out or unsubscribe link below your signature or at the email's end, along with your physical or mailing address, to comply with anti-spam laws.",
          },
        ],
      },
      {
        id: '5.4',
        description: 'Avoid Email Attachments',
        content: [
          {
            type: 'text',
            data: "Though attaching files in emails to known contacts is common, doing so in bulk email sends can activate spam filters. This is because malicious emails often contain harmful attachments, and spam filters are engineered to flag such emails. Besides, attachments increase your email size, delaying their load time. It's better to incorporate necessary information within the email body and provide secure links for additional materials instead of attachments.",
          },
        ],
      },
      {
        id: '5.5',
        description: 'Avoid Spam Trigger Words',
        content: [
          {
            type: 'text',
            data: "Avoid using spammy words in your emails as they can trigger spam filters. Below is an image listing words that, if used in your subject line or body, could activate spam filters. If an email needs to contain any of these terms (like in a promotion), try to find synonyms. Modern spam filters are quite advanced, and using a phrase or two won't be detrimental as long as you adhere to email marketing best practices and use these terms in the right context.",
          },
          {
            type: 'image',
            data: {
              src: 'src/assets/images/email-spam-trigger-words.png',
              alt: 'Image depicting spam trigger words',
            },
          },
        ],
      },

      {
        id: '5.6',
        description: 'Avoid ALL CAPS IN THE SUBJECT LINE',
        content: [
          {
            type: 'text',
            data: 'Using all caps in the subject line is a known spammer tactic and will likely trigger spam filters, landing your emails in the junk folder. Opt for simple, readable subject lines in lowercase letters.',
          },
          {
            type: 'table',
            data: {
              headers: ['Spammy subject line', 'Good subject line'],
              rows: [['UNBELIEVABLE DISCOUNTS INSIDE!', 'Enjoy exclusive discounts on your next purchase']],
            },
          },
        ],
      },
      {
        id: '5.7',
        description: 'Personalize Subject Line and Email Body',
        content: [
          {
            type: 'text',
            data: "Personalization helps boost open rates. Including the recipient's first name in the subject line can make emails feel more tailored to them. If emails are seen as relevant and personalized, recipients are more likely to open and read them. Good open rates signal to email providers that your emails are valued, improving your sender score and reputation.",
          },
        ],
      },
      {
        id: '5.8',
        description: 'Add an Opt-out or Unsubscribe Link',
        content: [
          {
            type: 'text',
            data: "Bulk emails should have an opt-out or unsubscribe link. This practice prevents your emails from landing in spam folders, and helps avoid blacklisting. These links provide recipients a choice to opt-out, ensuring you're reaching those interested in your content. Additionally, it complies with anti-spam laws granting recipients the right to unsubscribe.",
          },
        ],
      },
      {
        id: '5.9',
        description: 'Avoid Base64 Code in Emails',
        content: [
          {
            type: 'html',
            data: `
        Spammers often use
        <a class='text-blue-600 '  href="https://en.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer">
        base64 code
        </a> to mask email content from spam filters. Using base64 code will get your emails flagged as spam.
        
                `,
          },
        ],
      },
      {
        id: '5.10',
        description: "Don't Use  URL Shorteners",
        content: [
          {
            type: 'text',
            data: 'Avoid using shared domain URL shorteners as spammers use them to disguise malicious links, leading to filtering by some email providers. Instead, use the original URL linked to descriptive text, which looks better and can alleviate potential filtering issues.',
          },
        ],
      },
      {
        id: '5.11',
        description: 'Avoid No-reply Address',
        content: [
          {
            type: 'text',
            data: 'Using a no-reply address can seem inattentive and frustrate recipients needing to contact you. This practice could also negatively affect delivery rates over time as user engagement, including replies, helps determine inbox placement. Having people respond to your email campaigns improves your reputation with some email providers.',
          },
        ],
      },
      {
        id: '5.12',
        description: "Ensure 'From' Address and 'From' Name Match",
        content: [
          {
            type: 'text',
            data: 'For subscriber trust, the "From" name should resemble the "From" email address. For instance, an email from BBC Support should come from an address like support@bbc.com.',
          },
        ],
      },
      {
        id: '5.13',
        description: "Tailor the 'From' Address to Your Goals",
        content: [
          {
            type: 'text',
            data: 'Distinguish between marketing and transactional emails by customizing the "From" address, like newsletters@, support@, or billing@. This allows recipients to manage your emails using client filters and ensures important emails aren’t missed if they filter out marketing emails.',
          },
        ],
      },
      {
        id: '5.14',
        description: 'Set a Custom Reply-to Address',
        content: [
          {
            type: 'text',
            data: 'Use a different reply-to address to handle responses, especially useful if managing a large subscriber list to avoid a flood of out-of-office emails to your main address. Most email marketing platforms allow setting a different reply address for campaigns.',
          },
          {
            type: 'table',
            data: {
              headers: ['From Name', 'From Email', 'Reply-to Email'],
              rows: [
                ['Gadget Galaxy', 'newsletter@gadgetgalaxy.com', 'replies@gadgetgalaxy.com'],
                // ['Style Street', 'promotions@stylestreet.com', 'support@stylestreet.com'],
                // ['TechTalk Updates', 'updates@techtalk.com', 'feedback@techtalk.com'],
                // ['WellnessWave News', 'news@wellnesswave.com', 'membersupport@wellnesswave.com'],
              ],
            },
          },
        ],
      },
      {
        id: '5.15',
        description: 'Include Alt Tags for Images',
        content: [
          {
            type: 'text',
            data: "Alt tags provide a text alternative for images, aiding accessibility, user experience, and spam filter bypass. They're essential for visually impaired individuals or when images can't be displayed.",
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Test Your Emails',
    tasks: [
      {
        id: '6.1',
        description: 'Test, Test & Test Again!',
        content: [
          {
            type: 'text',
            data: "First off, ensure your emails aren't spammy. Head over to Mail-Tester.com, send an email to the provided address (filled with your intended content), wait a bit, and check your score. Aim for a full 10/10. Anything less? Revisit, adjust, and re-test until you nail that perfect score. Secondly, see where your emails will land using GlockApps Inbox Email Tester. Send another email, wait for a bit, then check the results. Strive for a 'Good' score of 80/100 or more. Falling short? Revise and re-test until you hit or surpass 80/100.",
          },
          {
            type: 'disclaimer',
            data: 'Carry out these tests each time you whip up an email campaign.',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'Maintain Your Reputation',
    tasks: [
      {
        id: '7.1',
        description: 'Keep your bounce rate below 5%',
        content: [
          {
            type: 'text',
            data: 'Keep an eye on your bounce rate —stay below 5% to keep your sender reputation shiny and ensure your emails find their way to your customers’ inbox without a hitch.',
          },
        ],
      },
      {
        id: '7.2',
        description: 'Keep your complaint rate below 0.1%',
        content: [
          {
            type: 'text',
            data: 'Watch your spam complaint rate and keep it under 0.1%. This rate represents the number of spam reports over the total emails sent. Stay below 1 complaint per 1,000 emails sent, as anything more is considered a red flag.',
          },
        ],
      },
      {
        id: '7.3',
        description: 'Send a consistent number of emails',
        content: [
          {
            type: 'text',
            data: "Most email providers only store reputation data for 30 days, so don’t let 30 days pass without sending an email from any IP address. If you do, you'll need to warm up the address again. Stick to a consistent sending rhythm to keep your reputation intact.",
          },
        ],
      },
      {
        id: '7.4',
        description: 'Remove inactive subscribers from your list',
        content: [
          {
            type: 'text',
            data: "Got subscribers who've ghosted you for months? It's time to bid them goodbye. Keeping your list clean from inactive subscribers will safeguard your open rates and sender reputation. Though your list might shrink, the remaining subscribers are more likely to engage, boosting your email deliverability.",
          },
        ],
      },
    ],
  },
  // ...other checklist items
];

export { checklistItems };
export type { Task, ChecklistItem, ContentBlock };
