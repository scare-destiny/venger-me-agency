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
  type: 'text' | 'disclaimer' | 'list' | 'image' | 'table' | 'subtask' | 'html';
  data: string | ListItem[] | ImageData | TableData | Subtask;
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

const checklistItems: ChecklistItem[] = [
  {
    id: '1',
    title: 'Authentication',
    tasks: [
      {
        id: '1.1',
        description: 'Create an SPF record for your domain',
        content: [
          {
            type: 'text',
            data: 'An SPF record defines which IP addresses are allowed to send email from your domain. Answer the questions to generate an SPF record.',
          },
          // {
          //   type: 'table',
          //   data: {
          //     headers: ['Record Type', 'Host', 'Value', 'TTL'],
          //     rows: [
          //       ['A', '@', '192.0.2.1', '3600'],
          //       ['CNAME', 'www', 'example.com.', '3600'],
          //       // ... other rows
          //     ],
          //   },
          // },
          // ...other content blocks
        ],
      },
      {
        id: '1.2',
        description: 'Create a DKIM record for your domain',
        content: [
          {
            type: 'text',
            data: 'An SPF record defines which IP addresses are allowed to send email from your domain. Answer the questions to generate an SPF record.',
          },
        ],
      },
      { id: '1.3', description: 'Create a DMARC record for your domain' },
      { id: '1.4', description: 'Send email via secure SSL/TLS connection' },
      {
        id: '1.5',
        description: 'Create MX records for your domain',
        content: [
          {
            type: 'text',
            data: "MX records tell email systems where to send messages. Without proper MX records, emails can get lost or bounce back, similar to sending a letter without the right address. Not having an MX record can also lead mailbox providers to think the sender isn't following email rules, leading to delivery problems or being labeled as spam. Select a mailbox provider from the dropdown for instructions to set up MX records.",
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
        description: 'Use the correct tool to send email',
        content: [
          {
            type: 'text',
            data: "Email Marketing Platforms help their users send emails to their subscribers or sales prospects, and Email Delivery Providers help their users send transactional emails to their customers. Email Marketing Platforms can be subcategorized into Inbound and Outbound. It's important to use the correct tool as they cannot all be used for the same type of email, and could result in being banned if you misuse their services.          ",
          },
          {
            type: 'table',
            data: {
              headers: [
                'Transactional 	',
                'Delivery Services',
                'Inbound',
                'Marketing Automation Software',
                'Outbound',
                'Sales Outreach Software',
              ],
              rows: [
                [
                  'Welcome message, sales receipt, comment notification or account verification	',
                  'Amazon SES, Postmark, Mailgun, Mailjet, SendGrid',
                  'Newsletters or emails where users requested information (filled out a single or double opt-in form)	',
                  'ActiveCampaign, Sendinblue, Hubspot, Mailchimp, ConvertKit, Campaign Monitor, Klaviyo, Drip, Bento',
                  'Sales or unsolicited emails (cold emails)	',
                  'Lemlist, Reply.io, Outreach.io, MailShake, SmartReach                  ',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '2.2',
        description: 'Choose an email marketing platform with ability to schedule batch delivery',
        content: [
          {
            type: 'text',
            data: "If you're sending marketing emails choose a platform with ability to send in batches. Depending on the number of contacts you have in your list, slowly drip out the emails over a duration of hours or days instead of sending them all at once.            ",
          },
        ],
      },
      {
        id: '2.3',
        description: 'Choose the correct type of IP address',
        content: [
          {
            type: 'text',
            data: "Decide whether to use a shared or dedicated IP address. A shared IP is used by multiple senders while a dedicated IP is reserved just for you. If you send less than 50,000/month then a shared IP will be fine, though many lower volume senders switch to a dedicated IP address to control their reputation. If you send more than 50,000/month you should get a dedicated IP or several, depending on your sending volume. Most email marketing platforms and email delivery providers offer dedicated IP addresses for an additional monthly fee. This is only relevant for newsletters or transactional emails. If you're sending cold email marketing campaigns — you'll simply use the IP address provided by your mail provider (Google Workspace, Office365, AWS WorkMail, Zoho, etc).",
          },
        ],
      },
      {
        id: '2.4',
        description: 'Use separate email address, subdomain and IP address for transactional and marketing emails',
        content: [
          {
            type: 'text',
            data: " The reputation of the IP address, domain, and email address all play a role in getting emails into your customer's inbox rather than the spam folder. Or, in the case of Google, in the Promotions tab. Email providers know customers want and expect transactional emails, but it's not always easy for them to tell what's transactional and what's better classified as marketing emails.",
          },
          {
            type: 'text',
            data: ' Using a separate email address, subdomain and IP address for each type of mail makes it much more likely that your important emails will get to your customers, and will prevent normal correspondance or transactional emails from being negatively impacted by marketing email campaigns that accidentally lead to a negative domain or IP reputation.            ',
          },
          {
            type: 'table',
            data: {
              headers: ['Standard Emails 	', 'Transactional Emails', 'Marketing Emails'],
              rows: [
                ['	Your Server IP Address', 'Delivery Provider IP Address', 'Marketing Platform IP Address'],
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
            data: 'How do you know when a recipient has marked your email as spam? What can you do about it? If you set up feedback loops, email providers will notify you when a recipient has marked one of your emails as spam. Youll need to set up separate feedback loops for all the email providers you send to. Below are links to signup to feedback loops for the most popular email providers.        ',
          },
          {
            type: 'table',
            data: {
              headers: [
                'Postmaster Tools by Gmail 	',
                'Microsoft Junk Mail Reporting Program',
                'Yahoo Mail Complaint Feedback Loop',
                'List of other Feedback Loops	',
              ],
              rows: [
                [
                  'https://www.gmail.com/postmaster/',
                  '	https://postmaster.live.com/snds/JMRP.aspx (Only for dedicated IP address)',
                  '	https://io.help.yahoo.com/contact/',
                  '	https://glockapps.com/isp-feedback-loops/',
                ],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '2.6',
        description: 'Create a custom tracking domain',
        content: [
          {
            type: 'text',
            data: "Custom tracking domains are important if you use an email marketing platform to send emails. Instead of using your email marketing platform's domain to track actions (opens, link clicks & unsubscribers), custom tracking domains use your domain to track actions and isolate your reputation from other users who use the same provider.",
          },
          {
            type: 'text',
            data: "For example, if a spammer uses MailChimp, and the spammer's emails contain the default MailChimp tracking domain, and this causes the default tracking domain to be listed by a domain-based spam blacklist, and if your emails contain the same tracking domain, the deliverability of your emails could be affected.            ",
          },
          {
            type: 'text',
            data: 'Creating a custom tracking domain involves adding a CNAME record to your DNS records. Most email marketing platforms will give you the ability to create a custom tracking domain and will provide step-by-step instructions.            ',
          },
        ],
      },
      {
        id: '2.7',
        description: 'Create postmaster and abuse role email accounts',
        content: [
          {
            type: 'text',
            data: 'Having these two role email accounts is good practice and a requirement by some email providers. They are used to receive abuse complaints so you should check them regularly and resolve all issues as soon as possible.            ',
          },
          {
            type: 'table',
            data: {
              headers: ['Postmaster Email 	', 'Abuse Email'],
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
        description: 'Never use free email addresses',
        content: [
          {
            type: 'text',
            data: 'Never use a free webmail address as your "From" address. For example, email addresses from Yahoo, AOL, Outlook/Hotmail or Gmail. Instead, use an email address registered at your organization\'s own domain. When an email is sent through an email marketing platform, receiving email providers view free webmail "From" addresses as more suspicious than those from custom domains, increasing the chance emails from those addresses will be rejected.',
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
        description: 'Check if your domain or IP is blacklisted',
        content: [
          {
            type: 'text',
            data: "Check your domain and IP address against known spam blacklists to see if you've been blacklisted. If you are; request to be delisted. If you're using an email delivery provider be sure to check the outbound sending IP addresses assigned to your account.",
          },
          {
            type: 'table',
            data: {
              headers: ['Spamhaus 	', 'Spamcop', 'SURBL', 'DNSBL.info', 'MX Toolbox'],
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
        description: 'Check your IP address reputation',
        content: [
          {
            type: 'text',
            data: 'Talos Reputation Center generates a reputation score grouped into Good, Neutral and Poor. You should aim for an Email Reputation score of Neutral or Good.',
          },
          {
            type: 'text',
            data: 'Barracuda Central maintains a history of IP addresses for both known spammers as well as senders with good email practices.            .',
          },
          {
            type: 'text',
            data: "Sender Score is a free email reputation evaluation service from Validity. It provides an indication of the trustworthiness of an email sender's IP address.            ",
          },
          {
            type: 'table',
            data: {
              headers: ['Talos Intelligence 	', 'Barracuda Central', 'Sender Score'],
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
            data: "Gradually increase the send rate to warm up the sending IP addresses tied to your domain with the objective of building good IP & domain reputation with email providers. Start with low volume and increase the sending rate gradually over time. Here's a few common scenarious.      ",
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
           <p class='py-2'> Sending emails to address that bounce will harm your sender score and reputation with email providers, which is why it's important to verify your contact's email addresses.  </p>
            
            If you acquired contacts through a double opt-in method you don't need to validate as they have already been verified through the double opt-in confirmation process (double opt-in is when a user has to confirm their email address after filling out a form or subscribing to your newsletter). 
            
            <p class='py-2'> An email validation service will filter out fake, disposable, catch-all and spam trap email addresses. You can do a quick Google search for 
          <a class='text-blue-600 '  href="https://en.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer">
          email list validation 
        </a>to find companies offering this service. Some email marketing platforms will do this for you automatically when you import your list, or offer this service for an additional fee.
            
          `,
          },
        ],
      },
      {
        id: '4.2',
        description: 'Always send emails to personal or business addresses of individuals',
        content: [
          {
            type: 'text',
            data: "Don't send marketing emails to role or general email addresses, instead send to personal or business email addresses of individuals.",
          },
          {
            type: 'table',
            data: {
              headers: [
                'Sales Department 	',
                'Chief Executive Officer',
                'John Doe, CEO Company Email',
                'John Doe Personal Email',
              ],
              rows: [
                ['	sales@example.com	 ❌', 'ceo@example.com	❌', '	john.doe@example.com	✔️', 'john.doe@gmail.com	✔️'],
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
            data: "Spam traps are email addresses used by email providers and blocklist operators to identify senders who aren't following email best practices. There are two types of spam traps:",
          },
          {
            type: 'table',
            data: {
              headers: ['Pristine	', 'Recycled'],
              rows: [
                [
                  "	These spam traps are email addresses that have never been valid and couldn't even opt into receiving email. They are available on public websites but hidden within the site's code. The purpose of pristine traps is to identify email marketers who use poor list building practices such as scraping sites for emails or purchasing contact lists. ",
                  "These spam traps were once valid email addresses but have since been repurposed by their provider. Someone could have used this address to opt in at one time, but the address has since been abandoned. Recycled spam traps might be on your sending list if: 1) Your list is more than one year old. 2) You don't email your list frequently or 3) There are mistyped or invalid addresses on your list.",
                ],
                // ... other rows
              ],
            },
          },
          {
            type: 'text',
            data: "The impact of spam traps varies depending on the type. Hitting a pristine spam trap is more severe than hitting a recycled trap. If you've emailed a pristine spam trap, your domain or sending IP address could be immediately blocklisted. If you send email to recycled spam traps regularly, you could start to see your emails being routed to the junk folder. To avoid spam traps, regularly clean up your contact lists.",
          },
        ],
      },
      {
        id: '4.4',
        description: 'Remove fake & bounced email addresses',
        content: [
          {
            type: 'text',
            data: "Too many bounced emails have the same effect as spam complaints: they hurt your reputation which affects email deliverability. If you send an email to a fake email address it will be returned with a hard-bounce message. If you remove fake and bounced email addresses when you clean your email list, the number and percentage of bounces will go down the next time you send. There are two types of bounced email: Hard and Soft. Hard bounces happen because the domain name doesn’t exist, the email address doesn’t exist or delivery is blocked by the email server. Most email marketing platforms will automatically clean hard-bounced email addresses from your list but they will keep soft-bounces. Soft-bounces usually happen because the recipient reached the maximum storage quota for their email account. It's worth noting that if soft bounces happen regularly, then they'll eventually become hard bounces.",
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
        description: "Don't use complex HTML",
        content: [
          {
            type: 'text',
            data: "The majority of email providers don't support every type of HTML content you see on the web. Web browsers are able to display scripts, animations, and complex navigation menus, while your typical email inbox isn't built to handle this type of content. If you're sending outbound email marketing campaigns (cold emails) we recommend creating very simple email content with links only. If you're sending inbound marketing campaigns (newsletters) you can get a little more creative, but don't use complex HTML.",
          },
          {
            type: 'table',
            data: {
              headers: ['Safe to use ✔️', 'Do not use ❌'],
              rows: [
                [
                  '	Static or table-based layouts, HTML tables & nested tables, template width of 600px-800px or simple, inline CSS',
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
        description: 'Only use secure HTTPS links',
        content: [
          {
            type: 'text',
            data: 'When including links to images or sites in your email body, only use secure HTTPS links. If you link to images or sites without secure links, emails could be considered insecure by email providers and blocked or sent to the junkmail folder.',
          },
          {
            type: 'table',
            data: {
              headers: ['http://www.yourdomain.com	', 'https://www.yourdomain.com	'],
              rows: [
                ['	Not secure 	❌', 'Secure ✔️'],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '5.3',
        description: "Don't use fancy signatures",
        content: [
          {
            type: 'text',
            data: "Signatures featuring your logo and links to social media is fine for regular correspondance but not for transactional email or marketing email campaigns. Keep it simple with a few lines inluding your name, position title, company and link to your website. You want to keep the number of links in your email body to a minimum. In order to comply with anti-spam laws, you'll also need to include a opt-out or unsubscribe link beneath your signature or at the bottom of your emails, as well as your physical or mailing address.",
          },
        ],
      },
      {
        id: '5.4',
        description: "Don't include attachments in your emails",
        content: [
          {
            type: 'text',
            data: "While it's common practice to include attachments in emails to people you communicate with on a regular basis, doing so in bulk will trigger spam filters. That's because actual spam emails typically contain harmful attachments. In turn, spam filters are designed to detect and remove emails with attachments. Attachments also increase the size of your email – making them longer to load. The information you need to include should be in the body of the email. To include additional material, use a secure link to another page rather than an attachment.",
          },
        ],
      },
      {
        id: '5.5',
        description: "Don't use spam trigger words",
        content: [
          {
            type: 'text',
            data: 'Never use spammy words in any portion of your emails. Below is a list of words in either your subject line or body that will trigger spam filters. If any of your emails require the usage of any of these terms (like when running a promotion), try to use synonyms. Spam filters have become much more sophisticated in recent years and using one or two phrases won’t hurt you so long as you use email marketing best practices and use spam trigger words within context.',
          },
          {
            type: 'image',
            data: {
              src: 'src/assets/images/email-spam-trigger-words.png',
              alt: 'Description of Image',
            },
          },
        ],
      },
      {
        id: '5.6',
        description: "Don't use ALL CAPS IN YOUR SUBJECT LINE",
        content: [
          {
            type: 'text',
            data: 'This is a common practice by spammers and is sure to trigger spam filters and land your emails in the junkmail folder. Write simple, easy to read subject lines in lowercase letters.',
          },
          {
            type: 'table',
            data: {
              headers: ['Spammy subject line', 'Good subject line'],
              rows: [
                ['CELEBRATE MOTHERS DAY WITH FREE FLOWERS!', 'Joe, celebrate mothers day with these beautiful flowers'],
              ],
            },
          },
        ],
      },
      {
        id: '5.7',
        description: 'Personalize the subject line and email body',
        content: [
          {
            type: 'text',
            data: "Personalization is vital to reach high open rates by including the recipients first name in the subject line. If recipients see emails are addressed to them personally, with a compelling subject line that's relevant to them, they're more likely to open and read your emails. Open rates are also an important engagement signal for email providers. If they see recipients opening and replying to your emails, they're more likley to send your emails directly to the inbox and increase your sender score and reputation.",
          },
        ],
      },
      {
        id: '5.8',
        description: 'Include an opt-out or unsubscribe link',
        content: [
          {
            type: 'text',
            data: "If you send in bulk, email providers will expect you to include an opt-out or unsubscribe link. Otherwise, your emails can land in the spam folder and you can eventually be blacklisted. They're also important to avoid having your emails marked as spam as they give recipients the opportunity to opt-out of receiving your emails and ensures you're only sending to people who want to hear from you. Unsubscribe links are also required in order to comply with anti-spam laws which gives email recipients the right to unsubscribe.",
          },
        ],
      },
      {
        id: '5.9',
        description: 'Never use base64 code in your emails',
        content: [
          {
            type: 'html',
            data: `
            If you don't know what
            <a class='text-blue-600 '  href="https://en.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer">
            base64 code 
          </a> is, you're probably not using it. If you are – stop! Spammers use base64 to hide email content from spam filters. Using base64 code will land your emails in the spam folder.
              
            `,
          },
        ],
      },
      {
        id: '5.10',
        description: "Don't use URL shorteners",
        content: [
          {
            type: 'text',
            data: "Spammers use shared domain url shorteners to hide the domain names they use for scams and viruses from spam filters. Because of this some email providers filter our emails containing URL shortners. As an alternative try using the original URL link to a website or file and linking it to text that describes exactly where it's taking the reader. This puts the link in the background HTML, which both looks better and can help with potential filtering problems.",
          },
        ],
      },
      {
        id: '5.11',
        description: 'Avoid the no-reply address',
        content: [
          {
            type: 'text',
            data: 'Sending from a no-reply address comes across as uncaring to subscribers. It can also be frustrating if they need to reach you about something, and it may even be bad news for delivery rates in the long-term. The way a user engages with your email — including replying — can help determine where you end up in the inbox. If people respond to your email campaigns, via reply email, this is seen as a good signal and helps improve your reputation with some email providers.',
          },
        ],
      },
      {
        id: '5.12',
        description: "Match your 'From' address to your 'From' name",
        content: [
          {
            type: 'text',
            data: 'To assist with subscriber trust, it\'s a good idea for your "From" name to be similar to your "From" email address. For example, if a subscriber receives an email from ABC Widgets Support, they would expect it to be linked with an email address similar to support@abcwidgets.com.',
          },
        ],
      },
      {
        id: '5.13',
        description: "Personalize the 'From' address for the purpose",
        content: [
          {
            type: 'text',
            data: 'If you send both marketing and transactional emails, give recipients an idea of what you\'re sending them by fitting the "From" email address to the purpose. For example: newsletters@, support@ or billing@. This splitting of function also allows subscribers to manage your emails using their own client filters however they see fit. It also ensures that if they, for example, write a rule that deletes all emails from newsletters@, they will still receive emails from invoices@ or support@. If you\'re worried about managing too many email addresses, you can use a different reply-to address when sending a campaign to redirect replies.',
          },
        ],
      },
      {
        id: '5.14',
        description: 'Set a custom reply-to address',
        content: [
          {
            type: 'text',
            data: 'While it\'s good for deliverability reasons to use a "From" address that invites recipients to contact you, you may want responses to go to a different address. If you have a large subscriber list you could end up receiving tens of thousands of out-of-office emails that you\'d prefer to go somewhere other than your main email address. Most email marketing platforms will give you the ability to set a different email address for replies when sending a campaign.',
          },
          {
            type: 'table',
            data: {
              headers: ['From Name', 'From Email', 'Reply-to Email'],
              rows: [
                ['ABC Widgets', 'newsletter@newsletter.abcwidgets.com', 'replies@newsletter.abcwidgets.com'],
                // ... other rows
              ],
            },
          },
        ],
      },
      {
        id: '5.15',
        description: 'Add alt tags to your images',
        content: [
          {
            type: 'text',
            data: "Using alt tags for images included in your emails is important for accessbility, user experience and getting your emails past the spam filter. They provide a textual alternative to your images, and a useful fallback for people who are blind, visually impaired or when your images cannot be displayed. Here's an example alt tag being used in an image.",
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
            data: "First, test the quality or spammyness of your emails. Navigate to Mail-Tester.com and send an email to the address generated for you (the email body should contain the content you want to send your contacts). Then, wait a few seconds and check your score.Your goal is to get a perfect (10/10) score. If you get less than a perfect score, go back and fix what's missing, then test again until you achieve a perfect (10/10) score. Second, find out exactly where your emails will land. Navigate to GlockApps Inbox Email Tester and send an email to the address generated for you (again, the email body should contain the content you want to send your contacts). Then, wait a few seconds and click to see the results. GlockApps has a free plan which allows you to perform up to 3 tests per day. Your goal is to get a Good score of 80/100 or more. If you get less than 80/100, go back and fix what's missing, then test again.",
          },
          {
            type: 'disclaimer',
            data: 'You should perform these tests each time you send an email campaign.',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'Maintain Your Reputation (4 tasks) 🔗',
    tasks: [
      {
        id: '7.1',
        description: 'Keep your bounce rate below 5%',
        content: [
          {
            type: 'text',
            data: 'Monitor your bounce rate closely and keep it below 5% to maintain your good sender reputation with email providers, and ensure your emails consistently land in your customers inbox.',
          },
        ],
      },
      {
        id: '7.2',
        description: 'Keep your complaint rate below 0.1%',
        content: [
          {
            type: 'text',
            data: 'Monitor your spam complaint rate closely and keep it below 0.1%. A spam complaint rate is the number of people who reported email as spam out of the total number of messages you have sent. The industry acceptable standard spam complaint rate is anything less than 0.1%, or 1 complaint for every 1,000 sent messages. Anything above this level is considered high.',
          },
        ],
      },
      {
        id: '7.3',
        description: 'Send a consistent number of emails',
        content: [
          {
            type: 'text',
            data: "Most email providers only store reputation data for 30 days, so you should not go 30 days or more without sending on any given IP address. If you do, you'll need to warm it up again, so make sure to be consistent with your sending rate.",
          },
        ],
      },
      {
        id: '7.4',
        description: 'Remove inactive subscribers from your list',
        content: [
          {
            type: 'text',
            data: "If some of your contacts haven't opened any of your emails after several months — it most likely means they've lost interest, or your emails are no longer relevant to their immediate needs. Purge these subscribers from your list to maintain high open rates and healthy sender reputation with email providers. Removing inactive subscibers means you're sending to fewer people but they're more likely to open your emails and engage with your campaigns, which will have a positive impact on your deliverability.",
          },
        ],
      },
    ],
  },
  // ...other checklist items
];

export { checklistItems };
export type { Task, ChecklistItem, ContentBlock };
