import React, { useState, useEffect } from 'react';

type TemplateItem = {
  name: string;
  url: string;
};

const templates: TemplateItem[] = [
  { name: 'SaaS Marketing Template', url: 'https://salient.tailwindui.com/' },
  { name: 'Info Product Template', url: 'https://primer.tailwindui.com/' },
  { name: 'Website with case studies and blog', url: 'https://studio.tailwindui.com/' },
  { name: 'App Marketing Template', url: 'https://pocket.tailwindui.com/' },
  { name: 'Sales Funnel Template', url: 'https://phenomenal-lamington-c08717.netlify.app/' },
  { name: 'Conference Template', url: 'https://keynote.tailwindui.com/' },
];

// Example usage
console.log(templates);

export const List = () => {
  return (
    <ul className=" list list-decimal text-center  ">
      {templates.map((item: any) => (
        <li key={item.name} className="text-xl  py-2 ">
          <a href={item.url} target="_blank" className="text-blue-700 underline">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
