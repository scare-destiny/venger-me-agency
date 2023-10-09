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
  type: 'text' | 'disclaimer' | 'list' | 'image' | 'table' | 'subtask';
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
          { type: 'disclaimer', data: 'Make sure to...' },
          { type: 'list', data: [{ text: 'Item 1' }, { text: 'Item 2' }] },
          {
            type: 'subtask',
            data: {
              id: '1.1.1',
              description: 'Subtask description',
              content: [{ type: 'text', data: 'Nested content...' }],
            },
          },
          {
            type: 'table',
            data: {
              headers: ['Record Type', 'Host', 'Value', 'TTL'],
              rows: [
                ['A', '@', '192.0.2.1', '3600'],
                ['CNAME', 'www', 'example.com.', '3600'],
                // ... other rows
              ],
            },
          },
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
      { id: '1.5', description: 'Create MX records for your domain' },
    ],
  },
  {
    id: '2',
    title: 'Infrastructure',
    tasks: [
      { id: '2.1', description: 'Use the correct tool to send email' },
      { id: '2.2', description: 'Choose an email marketing platform with ability to schedule batch delivery' },
      { id: '2.3', description: 'Choose the correct type of IP address' },
      // ...other tasks
    ],
  },
  {
    id: '3',
    title: 'Reputation',
    tasks: [
      { id: '3.1', description: 'Check if your domain or IP is blacklisted' },
      { id: '3.2', description: 'Check your IP address reputation' },
      { id: '3.3', description: 'Warm up your domain and IP address' },
      // ...other tasks
    ],
  },
  {
    id: '4',
    title: 'List Quality',
    tasks: [
      { id: '4.1', description: 'Clean your contact list' },
      { id: '4.2', description: 'Always send emails to personal or business addresses of individuals' },
      { id: '4.3', description: 'Avoid spam traps' },
      { id: '4.4', description: 'Remove fake & bounced email addresses' },
    ],
  },
  {
    id: '5',
    title: 'Content Quality',
    tasks: [
      { id: '5.1', description: "Don't use complex HTML" },
      { id: '5.2', description: 'Only use secure HTTPS links' },
      { id: '5.3', description: "Don't use fancy signatures" },
      { id: '5.4', description: "Don't include attachments in your emails" },
      { id: '5.5', description: "Don't use spam trigger words" },
      { id: '5.6', description: "Don't use ALL CAPS IN YOUR SUBJECT LINE" },
      { id: '5.7', description: 'Personalize the subject line and email body' },
      { id: '5.8', description: 'Include an opt-out or unsubscribe link' },
      { id: '5.9', description: 'Never use base64 code in your emails' },
      { id: '5.10', description: "Don't use URL shorteners" },
      { id: '5.11', description: 'Avoid the no-reply address' },
      { id: '5.12', description: "Match your 'From' address to your 'From' name" },
      { id: '5.13', description: "Personalize the 'From' address for the purpose" },
      { id: '5.14', description: 'Set a custom reply-to address' },
      { id: '5.15', description: 'Add alt tags to your images' },
    ],
  },
  {
    id: '6',
    title: 'Test Your Emails',
    tasks: [{ id: '6.1', description: 'Test, Test & Test Again!' }],
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
