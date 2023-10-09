import React from 'react';
import { type ContentBlock } from 'data/checkListItems';

const ContentRenderer = ({ content }: { content: ContentBlock }) => {
  switch (content.type) {
    case 'text':
      return <p className="pt-2">{content.data}</p>;
    case 'disclaimer':
      return <div className="disclaimer bg-yellow-300">{content.data}</div>;
    case 'list':
      return (
        <ul>
          {content.data.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      );
    case 'image':
      return <img src={content.data.src} alt={content.data.alt} />;
    case 'table':
      return (
        <div className="flex flex-col md:flex-row">
          {content.data.headers.map((header, columnIndex) => (
            <div key={columnIndex} className="flex flex-col border border-slate-400">
              <div className="p-2 font-bold">{header}</div>
              {content.data.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="p-2 border-t border-slate-400">
                  {row[columnIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    case 'subtask':
      return (
        <div className="subtask">
          <h3>{content.data.description}</h3>
          {content.data.content &&
            content.data.content.map((subContent, index) => <ContentRenderer key={index} content={subContent} />)}
        </div>
      );
    case 'html':
      return <div className="html-content" dangerouslySetInnerHTML={{ __html: content.data }} />;
    default:
      return null;
  }
};

export default ContentRenderer;
