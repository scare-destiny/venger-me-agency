import React from 'react';
import { type ContentBlock } from 'data/checkListItems';

const ContentRenderer = ({ content }: { content: ContentBlock }) => {
  switch (content.type) {
    case 'text':
      return <p className="pt-2">{content.data}</p>;
    case 'disclaimer':
      return <div className="disclaimer">{content.data}</div>;
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
        <table>
          <thead>
            <tr>
              {content.data.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case 'subtask':
      return (
        <div className="subtask">
          <h3>{content.data.description}</h3>
          {content.data.content &&
            content.data.content.map((subContent, index) => <ContentRenderer key={index} content={subContent} />)}
        </div>
      );
    default:
      return null;
  }
};

export default ContentRenderer;
