// EmailHero.tsx
import React from 'react';

interface EmailHeroProps {
  mainHeader: string;
  subtitle: string;
  actionStatement: string;
  callToAction: string;
}

const EmailHero: React.FC<EmailHeroProps> = ({ mainHeader, subtitle, actionStatement, callToAction }) => (
  <div className="p-8">
    <h1 className="text-4xl font-bold">{mainHeader}</h1>
    <h2 className="text-3xl mt-4 mb-8">{subtitle}</h2>
    <p className="text-xl mb-6">{actionStatement}</p>
    <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">{callToAction}</button>
  </div>
);

export default EmailHero;
